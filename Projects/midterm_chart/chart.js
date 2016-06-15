// -- Temp/Humidity graph starts here -- //

// Array of data
// var lineData = [
//   {
//   x: 1,
//   y: 142,
//   z: 75,
//   a: 140,
//   b: 160
// }, {
//   x: 2,
//   y: 146,
//   z: 76,
//   a: 140,
//   b: 160
// }, {
//   x: 3,
//   y: 147,
//   z: 76,
//   a: 140,
//   b: 160
// }, {
//   x: 4,
//   y: 145,
//   z: 75,
//   a: 140,
//   b: 160
// }, {
//   x: 5,
//   y: 143,
//   z: 73,
//   a: 140,
//   b: 160
// }, {
//   x: 6,
//   y: 140,
//   z: 73,
//   a: 140,
//   b: 160
// }, {
//   x: 7,
//   y: 141,
//   z: 71,
//   a: 140,
//   b: 160
// }, {
//   x: 8,
//   y: 143,
//   z: 72,
//   a: 140,
//   b: 160
// }, {
//   x: 9,
//   y: 144,
//   z: 72,
//   a: 140,
//   b: 160
// },
//   {
//   x: 10,
//   y: 142,
//   z: 78,
//   a: 140,
//   b: 160
// }, {
//   x: 11,
//   y: 142,
//   z: 78,
//   a: 140,
//   b: 160
// },
// {
//   x: 12,
//   y: 146,
//   z: 77,
//   a: 140,
//   b: 160
// }, {
//   x: 13,
//   y: 147,
//   z: 77,
//   a: 140,
//   b: 160
// }, {
//   x: 14,
//   y: 145,
//   z: 76,
//   a: 140,
//   b: 160
// }, {
//   x: 15,
//   y: 143,
//   z: 77,
//   a: 140,
//   b: 160
// }, {
//   x: 16,
//   y: 140,
//   z: 75,
//   a: 140,
//   b: 160
// }, {
//   x: 17,
//   y: 141,
//   z: 75,
//   a: 140,
//   b: 160
// }, {
//   x: 18,
//   y: 143,
//   z: 74,
//   a: 140,
//   b: 160
// }, {
//   x: 19,
//   y: 144,
//   z: 74,
//   a: 140,
//   b: 160
// }, {
//   x: 20,
//   y: 142,
//   z: 73,
//   a: 140,
//   b: 160
// }, {
//   x: 21,
//   y: 142,
//   z: 73,
//   a: 140,
//   b: 160
// }, {
//   x: 22,
//   y: 146,
//   z: 71,
//   a: 140,
//   b: 160
// }, {
//   x: 23,
//   y: 147,
//   z: 68,
//   a: 140,
//   b: 160
// }, {
//   x: 24,
//   y: 145,
//   z: 75,
//   a: 140,
//   b: 160
// }, {
//   x: 25,
//   y: 143,
//   z: 75,
//   a: 140,
//   b: 160
// }, {
//   x: 26,
//   y: 140,
//   z: 76,
//   a: 140,
//   b: 160
// }, {
//   x: 27,
//   y: 141,
//   z: 76,
//   a: 140,
//   b: 160
// }, {
//   x: 28,
//   y: 143,
//   z: 77,
//   a: 140,
//   b: 160
// }, {
//   x: 29,
//   y: 144,
//   z: 75,
//   a: 140,
//   b: 160
// }, {
//   x: 30,
//   y: 144,
//   z: 76,
//   a: 140,
//   b: 160
// }
// ];

var lineData = 
{
  day : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  temp : [140, 143, 145, 131, 141, 140, 144, 147, 148, 150, 151, 151, 148, 147],
  humidity : [72, 74, 75, 77, 78, 85, 81, 81, 80, 79, 77, 75, 73, 72],
  idealTempMin : [140],
  idealTempMax : [160]
}
;

console.log(lineData.day)
console.log(lineData.day[0])
console.log(Math.min.apply(null, lineData.day))
console.log(Math.max.apply(null, lineData.day))
console.log(lineData.day.length)

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
    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([Math.min.apply(null, lineData.day), Math.max.apply(null, lineData.day)]),
    // Set the y-range based on margins and data
    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([Math.min((Math.min.apply(null, lineData.temp) - 20), (Math.min.apply(null, lineData.humidity) - 20), (Math.min.apply(null, lineData.idealTempMin) - 20), (Math.min.apply(null, lineData.idealTempMax) - 20)), Math.max((Math.max.apply(null, lineData.temp) + 20), (Math.min.apply(null, lineData.humidity) + 20), (Math.min.apply(null, lineData.idealTempMin) + 20), (Math.min.apply(null, lineData.idealTempMax) + 20))]),
    // Format the axes
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
  
// Plot the temp line & append it
var lineFunc = d3.svg.line()
  .x(function(d) {
    return xRange(lineData.day);
  })
  .y(function(d) {
    return yRange(lineData.temp);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc(lineData))
  .attr('stroke', 'blue')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
  
// Plot the humidity line & append it
var lineFunc2 = d3.svg.line()
  .x(function(d) {
    return xRange(lineData.day[d]);
  })
  .y(function(d) {
    return yRange(lineData.humidity[d]);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc2(lineData.day))
  .attr('stroke', 'purple')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
  
// Plot the ideal-temp-min line & append it
var lineFunc3 = d3.svg.line()
  .x(function(d) {
    return xRange(lineData.day[d]);
  })
  .y(function(d) {
    return yRange(lineData.idealTempMin[d]);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc3(lineData.day))
  .attr('stroke', 'green')
  .attr('stroke-width', 0)
  .attr('opacity', 0.5)
  .attr('fill', 'none');
  
// Plot the ideal-temp-max line & append it
var lineFunc4 = d3.svg.line()
  .x(function(d) {
    return xRange(lineData.day[d]);
  })
  .y(function(d) {
    return yRange(lineData.idealTempMax[d]);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc4(lineData.day))
  .attr('stroke', 'green')
  .attr('stroke-width', 0)
  .attr('opacity', 0.5)
  .attr('fill', 'none');
  
// Plot the area between the ideal max and min & append it
var area = d3.svg.area()
  .x(function(d) { 
    return xRange(lineData.day[d]); 
  })
  .y0(function(d) { 
    return yRange(lineData.idealTempMin[d]); 
  })
  .y1(function(d) { 
    return yRange(lineData.idealTempMax[d]); 
  });
  
  vis.append('svg:path')
  .datum(lineData.day)
  .attr('class', 'area')
  .attr('d', area)
  .attr('opacity', 0.5);
  
// Add a legend
var colors = {  
  0 : ["Temperature", "blue"],
  1 : ["Humidity", "purple"],
  2 : ["Ideal Temperature Range", "green"]
};

var legend = vis.append('svg:g')
  .attr("class", "legend")
  .attr("x", 300)
  .attr("y", 300)
  .attr("height", 100)
  .attr("width", 100);
  
  legend.selectAll('rect')
      .data(lineData)
      .enter()
      .append("rect")
      .attr("x", 300)
      .attr("y", function(d, i){ return i * 15;})
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", 'green');
    
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