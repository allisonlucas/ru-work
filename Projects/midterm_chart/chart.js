(function () {
  angular.module('CompostIt', [])
    .controller('chartCtrl', chartController)
    
  function chartController () {
    var c = this
    console.log('Chart Controller Running!!!!!')
    // ==================================================
    // D3 CODE TO POPULATE GRAPH
    // ==================================================
    function displayGraph (id, width, height, interpolation, animate, updateDelay, transitionDelay) {
      // create an SVG element inside the #graph div that fills 100% of the div
      var graph = d3.select(id).append('svg:svg').attr('width', '100%').attr('height', '100%')
      
      var lineData = {
        day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        temp: [140, 143, 145, 131, 141, 140, 144, 147, 148, 150, 151, 151, 148, 147],
        humidity: [72, 74, 75, 77, 78, 85, 81, 81, 80, 79, 77, 75, 73, 72],
        idealTempMin: [140],
        idealTempMax: [160]
      }
      // X scale will fit values from 0-10 within pixels 0-100
      var xRange = d3.scale.linear().domain([d3.min(lineData.day), d3.max(lineData.day)]).range([-5, width])
      // starting point is -5 so the first value doesn't show and slides off the edge as part of the transition
      // Y scale will fit values from 0-10 within pixels 0-100
      var yRange = d3.scale.linear().domain([d3.min(lineData.temp), d3.max(lineData.temp)]).range([0, height])
      
      // Plot the temp line & append it
      var lineFunc = d3.svg.line()
        .x(function (d, i) {
          return xRange(lineData.day[i])
        })
        .y(function (d, i) {
          return yRange(lineData.temp[i])
        })
        .interpolate(interpolation)
        
      graph.append('svg:path')
        .attr('d', lineFunc(lineData.day))
        
      function redrawWithAnimation () {
        // update with animation
        graph.selectAll('path')
          .data([lineData.temp]) // set the new data
          .attr('transform', 'translate(' + xRange(6) + ')') // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
          .attr('d', lineFunc(lineData.temp)) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
          .transition() // start a transition to bring the new value into view
          .ease('linear')
          .duration(1500) // for this demo we want a continual slide so set this to the same as the setInterval amount below
          .attr('transform', 'translate(' + xRange(0) + ')') // animate a slide to the left back to x(0) pixels to reveal the new value
      }
      
      function redrawWithoutAnimation () {
        // static update without animation
        graph.selectAll('path')
          .data([lineData.temp]) // set the new data
          .attr('d', lineFunc(lineData.temp)) // apply the new data values
      }
      
      setInterval(function () {
        var v = lineData.temp.shift() // remove the first element of the array
        lineData.temp.push(v) // add a new element to the array (we're just taking the number we just shifted off the front and appending to the end)
        if (animate) {
          redrawWithAnimation()
        } else {
          redrawWithoutAnimation()
        }
      }, updateDelay)
      
    }
    displayGraph('#graph', 500, 250, 'basis', false, 1500, 750)
    // ==================================================
    // D3 CODE TO POPULATE DOUGHNUT
    // ==================================================
    var w = 300, // width
      h = 300, // height
      r = 100, // radius
      ir = 50,
      pi = Math.PI,
      color = d3.scale.category20c()
      
    c.data = [{
      'label': 'green',
      'value': [40]
    }, {
      'label': 'brown',
      'value': [60]
    }]
    
    c.weightObj = {
      green: [0.5, 3, 0.75, 1],
      brown: [2, 1, 1, 0.5]
    }
    
    c.submit = function () {
      console.log('Submit Data')
      if (c.color == 'Brown') {
        c.weightObj.brown.push(c.weight)
        console.log(c.weightObj.brown)
        var brownTotal = c.weightObj.brown.reduce(function (a, b) {
          return a + b
        })
        console.log("Brown Total: ", brownTotal)
        var greenTotal = c.weightObj.green.reduce(function (a, b) {
          return a + b
        })
        console.log("Green Total: ", greenTotal)
        var percentBrown = (brownTotal / (greenTotal + brownTotal)) * 100
        console.log("percent brown: ", percentBrown)
        c.data[1].value.splice(0, 1, percentBrown)
        console.log(c.data[1].value)
      } else {
        c.weightObj.green.push(c.weight)
        var greenTotal = c.weightObj.green.reduce(function (a, b) {
          return a + b
        })
        console.log("Green Total: ", greenTotal)
        var brownTotal = c.weightObj.brown.reduce(function (a, b) {
          return a + b
        })
        var percentGreen = (greenTotal / (greenTotal + brownTotal)) * 100
        console.log("Percent Green: ", percentGreen)
        c.data[0].value.splice(0, 1, percentGreen)
        
      }
      c.weight = ''
      c.color = ''
      
      d3.select('#donut').remove()
      drawDoughnut()
    }
    function drawDoughnut() {

    var vis = d3.select(".svg-div")
      .append("svg")
      .attr("id", "donut")
      .data([c.data])
      .attr('width', w)
      .attr('height', h)
      .append('svg:g')
      .attr('transform', 'translate(' + r + ',' + r + ')')
      
    var arc = d3.svg.arc()
      .outerRadius(r)
      .innerRadius(ir)
      
    var pie = d3.layout.pie()
      .value(function (d) {
        return d.value
      })
      .startAngle(-90 * (pi / 180))
      .endAngle(90 * (pi / 180))
      
    var arcs = vis.selectAll('g.slice')
      .data(pie)
      .enter()
      .append('svg:g')
      .attr('class', 'slice')
      
    arcs.append('svg:path')
      .attr('fill', function (d, i) {
        return color(i)
      })
      .attr('d', arc)
      
    arcs.append('svg:text')
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')'
      })
      .attr('text-anchor', 'middle')
      .text(function (d, i) {
        return c.data[i].label
      })
    }
    drawDoughnut()
    
  }
}())