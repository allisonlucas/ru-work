// ANGULAR CODE HERE  
angular.module('myCtrl', [])
  // .controller('chart', chart)
  .controller('test',function(){
    var test = this
    test.title = "test"
  })
  
function chart() {
  var c = this;
  console.log('hello')
}

  // c.tempInput = function() {
  //   if (c.temp === null || c.temp === '' || c.date === null || c.date === '') {
  //       alert('Please enter the day of the month as a single number and a valid temperature.')
  //   } else {
  //       c.lineData.push({
  //       x: c.date,
  //       y: c.temp
  //       })
  //       c.date = ''
  //       c.temp = ''
  //   }
  // }

// -- Temp/Humidity graph starts here -- //

// function displayGraph(id, width, height, interpolation, animate, updateDelay, transitionDelay) {
// 	// create an SVG element inside the #graph div that fills 100% of the div
// 	var graph = d3.select(id).append("svg:svg").attr("width", "100%").attr("height", "100%");

// var lineData = 
// {
//   day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
//   temp : [140, 143, 145, 131, 141, 140, 144, 147, 148, 150, 151, 151, 148, 147],
//   humidity : [72, 74, 75, 77, 78, 85, 81, 81, 80, 79, 77, 75, 73, 72],
//   idealTempMin : [140],
//   idealTempMax : [160]
// };

// // var vis = d3.select('#visualisation'),
// //     WIDTH = 500,
// //     HEIGHT = 250,
// //     MARGINS = {
// //       top: 20,
// //       right: 20,
// //       bottom: 30,
// //       left: 30
// //     },
    
// //     // Set the x-range based on margins and data
// //     xRange = d3.scale.linear().domain([d3.min(lineData.day), d3.max(lineData.day)]).range([MARGINS.left, WIDTH - MARGINS.right])
// //     yRange = d3.scale.linear().domain([d3.min([d3.min(lineData.temp), d3.min(lineData.humidity), d3.min(lineData.idealTempMin)]) - 20, d3.max([d3.max(lineData.temp), d3.max(lineData.humidity), d3.max(lineData.idealTempMax)]) + 20]).range([HEIGHT - MARGINS.top, MARGINS.bottom])

// // X scale will fit values from 0-10 within pixels 0-100
// var xRange = d3.scale.linear().domain([d3.min(lineData.day), d3.max(lineData.day)]).range([-5, width]); // starting point is -5 so the first value doesn't show and slides off the edge as part of the transition
// // Y scale will fit values from 0-10 within pixels 0-100
// var yRange = d3.scale.linear().domain([d3.min(lineData.temp), d3.max(lineData.temp)]).range([0, height]);

// // var xAxis = d3.svg.axis()
// //                   .scale(xRange)
// //                   .orient("bottom");

// // graph.append("svg:g")
// //   .attr("class", "axis")
// //   // .attr("transform", "translate(0," + height + ")")
// //   .call(xAxis);
  
// // var yAxis = d3.svg.axis()
// //                 .scale(yRange)
// //                 .orient("left");

// // graph.append("svg:g")
// // .attr("class", "axis")
// // // .attr("transform", "translate(0," + height + ")")
// // .call(yAxis);
    
// // var xAxis = d3.svg.axis()
// //       .scale(xRange)
// //       .tickSize(2)
// //       .tickSubdivide(true);
// // var yAxis = d3.svg.axis()
// //       .scale(yRange)
// //       .tickSize(2)
// //       .orient('left')
// //       .tickSubdivide(true);

// // graph.append('svg:g')
// //   .attr('class', 'x axis')
// //   .attr('transform', 'translate(0,' + height + ')')
// //   .call(xAxis)
// //   .append("text")
// //     .attr("x", width / 2 )
// //     .attr("y",  10)
// //     .style("text-anchor", "middle")
// //     .text("Date")

// // graph.append('svg:g')
// //   .attr('class', 'y axis')
// //   .attr('transform', 'translate(' + (20) + ',0)')
// //   .call(yAxis)

// // Add the ideal temp area rectangle
// // graph.append('svg:rect')
// //   .attr('x', xRange(lineData.day[0]))
// //   .attr('y', yRange(lineData.idealTempMax[0]))
// //   .attr('width', xRange(d3.max(lineData.day)))
// //   .attr('height', (yRange(lineData.idealTempMin[0]) - yRange(lineData.idealTempMax[0])))
// //   .attr('class', 'area')
// //   .attr('opacity', 0.5)
  
// // Plot the temp line & append it
// var lineFunc = d3.svg.line()
//   .x(function(d,i) {
//     return xRange(lineData.day[i]);
//   })
//   .y(function(d,i) {
//     return yRange(lineData.temp[i]);
//   })
//   .interpolate(interpolation);
  
//   graph.append('svg:path')
//   .attr('d', lineFunc(lineData.day))
//   // .attr('stroke', 'blue')
//   // .attr('stroke-width', 2)
//   // .attr('fill', 'none');
  
// // // Plot the humidity line & append it
// // var lineFunc2 = d3.svg.line()
// //   .x(function(d,i) {
// //     return xRange(lineData.day[i]);
// //   })
// //   .y(function(d,i) {
// //     return yRange(lineData.humidity[i]);
// //   })
// //   .interpolate('linear');
  
// //   graph.append('svg:path')
// //   .attr('d', lineFunc2(lineData.day))
// //   .attr('stroke', 'purple')
// //   .attr('stroke-width', 2)
// //   .attr('fill', 'none');
  
// 		function redrawWithAnimation() {
// 		// update with animation
// 		graph.selectAll("path")
// 			.data([lineData.temp]) // set the new data
// 			.attr("transform", "translate(" + xRange(6) + ")") // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
// 			.attr("d", lineFunc(lineData.temp)) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
// 			.transition() // start a transition to bring the new value into view
// 			.ease("linear")
// 			.duration(1500) // for this demo we want a continual slide so set this to the same as the setInterval amount below
// 			.attr("transform", "translate(" + xRange(0) + ")"); // animate a slide to the left back to x(0) pixels to reveal the new value
			
// 			/* thanks to 'barrym' for examples of transform: https://gist.github.com/1137131 */
// 	}
	
// 	function redrawWithoutAnimation() {
// 		// static update without animation
// 		graph.selectAll("path")
// 			.data([lineData.temp]) // set the new data
// 			.attr("d", lineFunc(lineData.temp)); // apply the new data values
// 	}
	
// 	setInterval(function() {
// 	   var v = lineData.temp.shift(); // remove the first element of the array
// 	   lineData.temp.push(v); // add a new element to the array (we're just taking the number we just shifted off the front and appending to the end)
// 	   if(animate) {
// 		   redrawWithAnimation();
// 	   } else {
// 	   	   redrawWithoutAnimation();
// 	   }
// 	}, updateDelay);
// }

// displayGraph("#graph", 500, 250, "basis", false, 1500, 750);
  
// // // Add a legend
// // var colors = {  
// //   0 : ["Temperature", "blue"],
// //   1 : ["Humidity", "purple"],
// //   2 : ["Ideal Temperature Range", "green"]
// // };

// // var legend = vis.append('svg:g')
// //   .attr("class", "legend")
// //   .attr("x", 300)
// //   .attr("y", 300)
// //   .attr("height", 100)
// //   .attr("width", 100);
  
// //   legend.selectAll('rect')
// //       .data(lineData)
// //       .enter()
// //       .append("rect")
// //       .attr("x", 300)
// //       .attr("y", function(d, i){ return i * 15;})
// //       .attr("width", 10)
// //       .attr("height", 10)
// //       .style("fill", 'green');
    



// // // Rotating time-line
// // function displayTimeline(id, width, height, interpolation, animate, updateDelay, transitionDelay) {
// // 	// create an SVG element inside the #graph div that fills 100% of the div
// // 	var timeline = d3.select(id).append("svg:svg").attr("width", "100%").attr("height", "100%");

// //   var lineData = 
// //   {
// //     day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
// //     time : [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
// //     change : [0]
// //   };
  
// //     // X scale will fit values from 0-10 within pixels 0-100
// //   var xRange = d3.scale.linear().domain([d3.min(lineData.time), d3.max(lineData.time)]).range([-5, width]); // starting point is -5 so the first value doesn't show and slides off the edge as part of the transition
// //   // Y scale will fit values from 0-10 within pixels 0-100
// //   var yRange = d3.scale.linear().domain([0, 0]).range([0, height]);
  
// //   // Plot the temp line & append it
// //   var lineFunc = d3.svg.line()
// //     .x(function(d,i) {
// //       return xRange(lineData.time[i]);
// //     })
// //     .y(function(d,i) {
// //       return yRange(lineData.change[i]);
// //     })
// //     .interpolate(interpolation);
    
// //     timeline.append('svg:path')
// //     .attr('d', lineFunc(lineData.day))
    
// //     function redrawWithAnimation() {
// // 		// update with animation
// // 		timeline.selectAll("path")
// // 			.data([lineData.time]) // set the new data
// // 			.attr("transform", "translate(" + xRange(6) + ")") // set the transform to the right by x(1) pixels (6 for the scale we've set) to hide the new value
// // 			.attr("d", lineFunc(lineData.time)) // apply the new data values ... but the new value is hidden at this point off the right of the canvas
// // 			.transition() // start a transition to bring the new value into view
// // 			.ease("linear")
// // 			.duration(1500) // for this demo we want a continual slide so set this to the same as the setInterval amount below
// // 			.attr("transform", "translate(" + xRange(0) + ")"); // animate a slide to the left back to x(0) pixels to reveal the new value
			
// // 			/* thanks to 'barrym' for examples of transform: https://gist.github.com/1137131 */
// // 	}
	
// // 	function redrawWithoutAnimation() {
// // 		// static update without animation
// // 		timeline.selectAll("path")
// // 			.data([lineData.time]) // set the new data
// // 			.attr("d", lineFunc(lineData.time)); // apply the new data values
// // 	}
	
// // 	setInterval(function() {
// // 	   var v = lineData.time.shift(); // remove the first element of the array
// // 	   lineData.time.push(v); // add a new element to the array (we're just taking the number we just shifted off the front and appending to the end)
// // 	   if(animate) {
// // 		   redrawWithAnimation();
// // 	   } else {
// // 	   	   redrawWithoutAnimation();
// // 	   }
// // 	}, updateDelay);
// // }

// // displayTimeline("#timeline", 500, 50, "basis", false, 1500, 750);


// // DOUGHNUT CHART

//     var w = 300,                        //width
//     h = 300,                            //height
//     r = 100,                            //radius
//     ir = 50,
//     pi = Math.PI,
//     color = d3.scale.category20c();     
 
//     c.data = [{"label":"green", "value": [40]}, 
//             {"label":"brown", "value": [60]}];
//     console.log(c.data)
            
//     c.weightObj = {
//       green : [0.5, 3, 0.75, 1],
//       brown : [2, 1, 1, 0.5]
//     }
//     console.log(c.weightObj.green)
    
//     c.data[0].label = ''
//     c.data[0].value = ''
    
//     console.log(c.data[0].label)
    
//     c.submit = function() {
//       console.log('working')
//       if(c.data.label == 'brown') {
//         c.weightObj.brown.push(Number(c.data.value));
//         console.log(c.weightObj.brown)
//         var brownTotal = c.weightObj.brown.reduce(function(a, b) {
//           return a + b;
//         });
//         console.log(brownTotal)
//         var greenTotal = c.weightObj.green.reduce(function(a, b) {
//           return a + b;
//         });
//         var percentBrown = (brownTotal / (greenTotal + brownTotal)) * 10;
//         console.log(percentBrown)
//         c.data[1].value.splice(0, 1, percentBrown)
//         console.log(c.data[1].value)
//       } else {
//         c.weightObj.brown.push(c.weight);
//         var greenTotal = c.weightObj.green.reduce(function(a, b) {
//           return a + b;
//         });
//         var brownTotal = c.weightObj.brown.reduce(function(a, b) {
//           return a + b;
//         });
//         var percentGreen = (greenTotal / (greenTotal + brownTotal)) * 10;
//         c.data[0].value.splice(0, 1, percentGreen)
//       }
//     }
    
//     var vis = d3.select("#donut") 
//         .data([data])          
//             .attr("width", w)  
//             .attr("height", h)
//         .append("svg:g")       
//             .attr("transform", "translate(" + r + "," + r + ")")    
 
//     var arc = d3.svg.arc()              
//         .outerRadius(r)
// 		.innerRadius(ir);
 
//     var pie = d3.layout.pie()           
//         .value(function(d) { return d.value; })
//         .startAngle(-90 * (pi/180))
//         .endAngle(90 * (pi/180));
 
//     var arcs = vis.selectAll("g.slice")     
//         .data(pie)                          
//         .enter()                            
//             .append("svg:g")                
//                 .attr("class", "slice");    
 
//         arcs.append("svg:path")
//                 .attr("fill", function(d, i) { return color(i); } ) 
//                 .attr("d", arc);                                    
 
//         arcs.append("svg:text")                                     
//                 .attr("transform", function(d) {                    

//                 return "translate(" + arc.centroid(d) + ")";        
//             })
//             .attr("text-anchor", "middle")                          
//             .text(function(d, i) { return data[i].label; });
            



// chart()