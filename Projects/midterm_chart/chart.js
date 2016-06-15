// -- Temp/Humidity graph starts here -- //
var lineData = 
{
  day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  temp : [140, 143, 145, 131, 141, 140, 144, 147, 148, 150, 151, 151, 148, 147],
  humidity : [72, 74, 75, 77, 78, 85, 81, 81, 80, 79, 77, 75, 73, 72],
  idealTempMin : [140],
  idealTempMax : [160]
};

var vis = d3.select('#visualisation'),
    WIDTH = 500,
    HEIGHT = 250,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 30
    },
    
    // Set the x-range based on margins and data
    xRange = d3.scale.linear().domain([d3.min(lineData.day), d3.max(lineData.day)]).range([MARGINS.left, WIDTH - MARGINS.right])
    yRange = d3.scale.linear().domain([d3.min([d3.min(lineData.temp), d3.min(lineData.humidity), d3.min(lineData.idealTempMin)]) - 20, d3.max([d3.max(lineData.temp), d3.max(lineData.humidity), d3.max(lineData.idealTempMax)]) + 20]).range([HEIGHT - MARGINS.top, MARGINS.bottom])
    
    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(2)
      .tickSubdivide(true),
    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(2)
      .orient('left')
      .tickSubdivide(true);

vis.append('svg:g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0,' + (HEIGHT - MARGINS.bottom) + ')')
  .call(xAxis)
  .append("text")
    .attr("x", WIDTH / 2 )
    .attr("y",  MARGINS.bottom)
    .style("text-anchor", "middle")
    .text("Date")

vis.append('svg:g')
  .attr('class', 'y axis')
  .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
  .call(yAxis)
  
// Add the ideal temp area rectangle
vis.append('svg:rect')
  .attr('x', xRange(lineData.day[0]))
  .attr('y', yRange(lineData.idealTempMax[0]))
  .attr('width', xRange(d3.max(lineData.day)))
  .attr('height', (yRange(lineData.idealTempMin[0]) - yRange(lineData.idealTempMax[0])))
  .attr('class', 'area')
  .attr('opacity', 0.5)
  
// Plot the temp line & append it
var lineFunc = d3.svg.line()
  .x(function(d,i) {
    return xRange(lineData.day[i]);
  })
  .y(function(d,i) {
    return yRange(lineData.temp[i]);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc(lineData.day))
  .attr('stroke', 'blue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
  
// Plot the humidity line & append it
var lineFunc2 = d3.svg.line()
  .x(function(d,i) {
    return xRange(lineData.day[i]);
  })
  .y(function(d,i) {
    return yRange(lineData.humidity[i]);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc2(lineData.day))
  .attr('stroke', 'purple')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
  
// // Add a legend
// var colors = {  
//   0 : ["Temperature", "blue"],
//   1 : ["Humidity", "purple"],
//   2 : ["Ideal Temperature Range", "green"]
// };

// var legend = vis.append('svg:g')
//   .attr("class", "legend")
//   .attr("x", 300)
//   .attr("y", 300)
//   .attr("height", 100)
//   .attr("width", 100);
  
//   legend.selectAll('rect')
//       .data(lineData)
//       .enter()
//       .append("rect")
//       .attr("x", 300)
//       .attr("y", function(d, i){ return i * 15;})
//       .attr("width", 10)
//       .attr("height", 10)
//       .style("fill", 'green');
    
// ANGULAR CODE HERE  
angular.module('myCtrl', [])
  .controller('chart', chart)
  
function chart() {
  var c = this;

  c.tempInput = function() {
    if (c.temp === null || c.temp === '' || c.date === null || c.date === '') {
        alert('Please enter the day of the month as a single number and a valid temperature.')
    } else {
        c.lineData.push({
        x: c.date,
        y: c.temp
        })
        c.date = ''
        c.temp = ''
    }
  }
}