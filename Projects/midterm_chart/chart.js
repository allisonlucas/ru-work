(function () {
  angular.module('CompostIt', [])
    .controller('chartCtrl', chartController)
    
  function chartController () {
    var c = this
    
    // ==================================================
    // D3 CODE TO POPULATE GRAPH
    // ==================================================
    function displayGraph (id, width, height, margin, interpolation, updateDelay) {
      // create an SVG element inside the #graph div that fills 100% of the div
      var lineData = {
        day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        temp: [140, 143, 145, 131, 141, 140, 144, 147, 148, 150, 151, 151, 148, 147],
        humidity: [72, 74, 75, 77, 78, 85, 81, 81, 80, 79, 77, 75, 73, 72],
        idealTempMin: [140],
        idealTempMax: [160]
      }

      function draw () {
        var graph = d3.select(".temp-graph").append('svg:svg').attr("id", "graph").attr('width', '500').attr('height', '250').attr('margin', '45')
        
          // X scale
        var xRange = d3.scale.linear().domain([d3.min(lineData.day), d3.max(lineData.day)]).range([margin, width - margin])
        // starting point is -5 so the first value doesn't show and slides off the edge as part of the transition
        // Y scale
        var yRange = d3.scale.linear().domain([d3.min(lineData.temp) - 20, d3.max(lineData.temp) + 20]).range([height - margin, margin])
        
        // Plot the x and y axes & append
        var xAxis = d3.svg.axis()
          .scale(xRange)
          .tickSize(0)
        var yAxis = d3.svg.axis()
          .scale(yRange)
          .ticks(6)
          .tickSize(0)
          .orient('left')
   
        graph.append('svg:g')
          .attr('class', 'x-axis')
          .attr('transform', 'translate(0,' + (height - margin) + ')')
          .call(xAxis)
          .append("text")
            .attr("x", width / 2 )
            .attr("y",  margin)
            .style("text-anchor", "middle")
            .text("Date")
   
        graph.append('svg:g')
          .attr('class', 'y-axis')
          .attr('transform', 'translate(' + margin + ',0)')
          .call(yAxis)
          .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - 35)
            .attr("x",0 - ((height + margin) / 2))
            .text("Temperature")
        
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
          .attr('d', lineFunc(lineData.temp))
        
        graph.selectAll('path')
            .data([lineData.temp]) // set the new data
            .attr('d', lineFunc(lineData.temp)) // apply the new data values
      }
      draw()
      
      setInterval(function () {
        
        lineData.day.shift() // remove the first element of the array
        var j = lineData.day.length
        
        lineData.day.push(j++)
        var v = lineData.temp.shift() // remove the first element of the array
        lineData.temp.push(v) // add a new element to the array (we're just taking the number we just shifted off the front and appending to the end)
        d3.select('#graph').remove()
        draw()
      }, updateDelay)
    }
      
    displayGraph('#graph', 500, 250, 45, 'basis', 1500)
    // ==================================================
    // D3 CODE TO POPULATE DOUGHNUT
    // ==================================================
    var w = 375, // width
      h = 175, // height
      r = 150, // radius
      ir = 75,
      pi = Math.PI,
      color = ['#2ca02c', '#8c564b']
      
    c.data = [{
      label: 'GREEN',
      value: 53.846154
    }, {
      label: 'BROWN',
      value: 46.153846
    }]
    
    c.weightObj = {
      green: [0.5, 3, 0.75, 1],
      brown: [2, 1, 1, 0.5]
    }
    
    console.log('Green starting percent:' + c.data[0].value)
    console.log('Brown starting percent:' + c.data[1].value)
    
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
        var percentGreen = (greenTotal / (greenTotal + brownTotal)) * 100
        c.data[1].value = percentBrown
        c.data[0].value = percentGreen
        console.log('New percent brown: ' + c.data[1].value)
        console.log('New percent green: ' + c.data[0].value)
      } else {
        c.weightObj.green.push(c.weight)
        console.log(c.weightObj.green)
        var greenTotal = c.weightObj.green.reduce(function (a, b) {
          return a + b
        })
        console.log("Green Total: ", greenTotal)
        var brownTotal = c.weightObj.brown.reduce(function (a, b) {
          return a + b
        })
        console.log("Brown Total: ", brownTotal)
        var percentGreen = (greenTotal / (greenTotal + brownTotal)) * 100
        var percentBrown = (brownTotal / (greenTotal + brownTotal)) * 100
        c.data[0].value = percentGreen
        c.data[1].value = percentBrown
        console.log('New percent brown: ' + c.data[1].value)
        console.log('New percent green: ' + c.data[0].value)
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
        return color[i]
      })
      .attr('opacity', '0.75')
      .attr('d', arc)
      
    arcs.append('svg:text')
      .attr('transform', function (d) {
        return 'translate(' + arc.centroid(d) + ')'
      })
      .attr('text-anchor', 'middle')
      .attr('fill', '#ffffff')
      .text(function (d, i) {
        return c.data[i].label
      })
    }
    drawDoughnut()
    
  }
}())