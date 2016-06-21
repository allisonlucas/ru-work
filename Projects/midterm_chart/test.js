// function displayGraph (id, width, height, interpolation, animate, updateDelay, transitionDelay) {
  // create an SVG element inside the #graph div that fills 100% of the div
  var graph = d3.select('#graph').append('svg:svg').attr('width', '100%').attr('height', '100%')
  
  var lineData = {
    day: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    temp: [140, 143, 145, 131, 141, 140, 144, 147, 148, 150, 151, 151, 148, 147],
    humidity: [72, 74, 75, 77, 78, 85, 81, 81, 80, 79, 77, 75, 73, 72],
    idealTempMin: [140],
    idealTempMax: [160]
  }
  // X scale
  var xRange = d3.scale.linear().domain([d3.min(lineData.day), d3.max(lineData.day)]).range([-5, 500])
  // starting point is -5 so the first value doesn't show and slides off the edge as part of the transition
  // Y scale
  var yRange = d3.scale.linear().domain([d3.min(lineData.temp), d3.max(lineData.temp)]).range([0, d3.max(lineData.temp)])
  console.log(d3.min(lineData.temp))
  
  // Plot the x and y axes & append
//   var xAxis = d3.svg.axis()
//   .scale(xRange)
//   .orient("bottom")
//   .ticks(lineData.day.length - 5)

//   var yAxis = d3.svg.axis()
//   .scale(yRange)
//   .orient("left")
//   .ticks(5)
   
//   graph.append("svg:g")
//   .attr("class", "x axis")
//   .attr("transform", "translate(0,180)")
//   .call(xAxis)

//   graph.append("svg:g")
//   .attr("class", "y axis")
//   .attr("transform", "translate(20,0)")
//   .call(yAxis)
  
  // Plot the temp line & append it
  var lineFunc = d3.svg.line()
    .x(function (d, i) {
      return xRange(lineData.day[i])
    })
    .y(function (d, i) {
      return yRange(lineData.temp[i])
    })
    .interpolate('interpolation')
    
  graph.append('svg:path')
    .attr('d', lineFunc(lineData.day))
    
    // push a new data point onto the back
    var ranNum = Math.floor((Math.random() * 100) + 50)
    lineData.temp.push(Math.floor((Math.random() * 100) + 50));
    console.log(ranNum)
    
    // redraw the line, and then slide it to the left
      // X scale
  var xRange = d3.scale.linear().domain([d3.min(lineData.day), d3.max(lineData.day)]).range([-5, 500])
  // starting point is -5 so the first value doesn't show and slides off the edge as part of the transition
  // Y scale
  var yRange = d3.scale.linear().domain([d3.min(lineData.temp), d3.max(lineData.temp)]).range([0, d3.max(lineData.temp)])
  console.log(d3.min(lineData.temp))
    var lineFunc = d3.svg.line()
    .x(function (d, i) {
      return xRange(lineData.day[i])
    })
    .y(function (d, i) {
      return yRange(lineData.temp[i])
    })
    .interpolate('basis')
    
    graph.selectAll('path')
      .data([lineData.temp]) // set the new data
    //   .attr('transform', 'translate(' + xRange(6) + ')') // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
      .attr('d', lineFunc(lineData.day)) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
      .transition() // start a transition to bring the new value into view
      .ease('linear')
      .duration(1500) // for this demo we want a continual slide so set this to the same as the setInterval amount below
      .attr('transform', 'translate(' + xRange(-1) + ')') // animate a slide to the left back to x(0) pixels to reveal the new value
    
    // graph.append('svg:path')
    //     .attr("d", lineFunc(lineData.day))
    //     .attr("transform", null)
    //   .transition()
    //     .attr("transform", "translate(" + xRange(-1) + ")");
    
    // pop the old data point off the front
    lineData.temp.shift();
    
//   function redrawWithAnimation () {
//     // update with animation
//     graph.selectAll('g.y.axis').call(yAxis)
    
//     graph.selectAll('g.x.axis')
//       .scale(xRange)
//       .orient("bottom")
//       .ticks(lineData.day.length - 5)
//       .data([lineData.temp]) // set the new data
//       .attr('transform', 'translate(' + xRange(6) + ')') // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
//       .attr('d', lineFunc(lineData.temp)) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
//       .transition() // start a transition to bring the new value into view
//       .ease('linear')
//       .duration(1500) // for this demo we want a continual slide so set this to the same as the setInterval amount below
//       .attr('transform', 'translate(' + xRange(0) + ')') // animate a slide to the left back to x(0) pixels to reveal the new value
//       .call(xAxis)
    
//     graph.selectAll('path')
//       .data([lineData.temp]) // set the new data
//       .attr('transform', 'translate(' + xRange(6) + ')') // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
//       .attr('d', lineFunc(lineData.temp)) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
//       .transition() // start a transition to bring the new value into view
//       .ease('linear')
//       .duration(1500) // for this demo we want a continual slide so set this to the same as the setInterval amount below
//       .attr('transform', 'translate(' + xRange(0) + ')') // animate a slide to the left back to x(0) pixels to reveal the new value
//   }
  
//   function redrawWithoutAnimation () {
//     // static update without animation
//     graph.selectAll('path')
//       .data([lineData.temp]) // set the new data
//       .attr('d', lineFunc(lineData.temp)) // apply the new data values
//   }
  
//   setInterval(function () {
//     var v = lineData.temp.shift() // remove the first element of the array
//     lineData.temp.push(v) // add a new element to the array (we're just taking the number we just shifted off the front and appending to the end)
//     if (animate) {
//       redrawWithAnimation()
//     } else {
//       redrawWithoutAnimation()
//     }
//   }, updateDelay)
  
// }
// displayGraph('#graph', 500, 250, 'basis', false, 1500, 750)