// -- Temp/Humidity graph starts here -- //

// Array of data
var lineData = [
  {
  x: 1,
  y: 142,
  z: 75,
  a: 140,
  b: 160
}, {
  x: 2,
  y: 146,
  z: 76,
  a: 140,
  b: 160
}, {
  x: 3,
  y: 147,
  z: 76,
  a: 140,
  b: 160
}, {
  x: 4,
  y: 145,
  z: 75,
  a: 140,
  b: 160
}, {
  x: 5,
  y: 143,
  z: 73,
  a: 140,
  b: 160
}, {
  x: 6,
  y: 140,
  z: 73,
  a: 140,
  b: 160
}, {
  x: 7,
  y: 141,
  z: 71,
  a: 140,
  b: 160
}, {
  x: 8,
  y: 143,
  z: 72,
  a: 140,
  b: 160
}, {
  x: 9,
  y: 144,
  z: 72,
  a: 140,
  b: 160
},
  {
  x: 10,
  y: 142,
  z: 78,
  a: 140,
  b: 160
}, {
  x: 11,
  y: 142,
  z: 78,
  a: 140,
  b: 160
},
{
  x: 12,
  y: 146,
  z: 77,
  a: 140,
  b: 160
}, {
  x: 13,
  y: 147,
  z: 77,
  a: 140,
  b: 160
}, {
  x: 14,
  y: 145,
  z: 76,
  a: 140,
  b: 160
}, {
  x: 15,
  y: 143,
  z: 77,
  a: 140,
  b: 160
}, {
  x: 16,
  y: 140,
  z: 75,
  a: 140,
  b: 160
}, {
  x: 17,
  y: 141,
  z: 75,
  a: 140,
  b: 160
}, {
  x: 18,
  y: 143,
  z: 74,
  a: 140,
  b: 160
}, {
  x: 19,
  y: 144,
  z: 74,
  a: 140,
  b: 160
}, {
  x: 20,
  y: 142,
  z: 73,
  a: 140,
  b: 160
}, {
  x: 21,
  y: 142,
  z: 73,
  a: 140,
  b: 160
}, {
  x: 22,
  y: 146,
  z: 71,
  a: 140,
  b: 160
}, {
  x: 23,
  y: 147,
  z: 68,
  a: 140,
  b: 160
}, {
  x: 24,
  y: 145,
  z: 75,
  a: 140,
  b: 160
}, {
  x: 25,
  y: 143,
  z: 75,
  a: 140,
  b: 160
}, {
  x: 26,
  y: 140,
  z: 76,
  a: 140,
  b: 160
}, {
  x: 27,
  y: 141,
  z: 76,
  a: 140,
  b: 160
}, {
  x: 28,
  y: 143,
  z: 77,
  a: 140,
  b: 160
}, {
  x: 29,
  y: 144,
  z: 75,
  a: 140,
  b: 160
}, {
  x: 30,
  y: 144,
  z: 76,
  a: 140,
  b: 160
}
];

var vis = d3.select('#visualisation'),
    WIDTH = 500,
    HEIGHT = 250,
    MARGINS = {
      top: 20,
      right: 20,
      bottom: 20,
      left: 50
    },
    // Set the x-range based on margins and data
    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([d3.min(lineData, function(d) {
      return (d.x);
    }), d3.max(lineData, function(d) {
      return (d.x);
    })]),
    // Set the y-range based on margins and data
    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function(d) {
      return Math.min(d.y - 20, d.z - 20, d.a - 20, d.b - 20);
    }), d3.max(lineData, function(d) {
      return Math.max(d.y + 20, d.z + 20, d.a + 20, d.b + 20);
    })]),
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
  .call(xAxis);

vis.append('svg:g')
  .attr('class', 'y axis')
  .attr('transform', 'translate(' + (MARGINS.left) + ',0)')
  .call(yAxis);
  
// Plot the temp line & append it
var lineFunc = d3.svg.line()
  .x(function(d) {
    return xRange(d.x);
  })
  .y(function(d) {
    return yRange(d.y);
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
    return xRange(d.x);
  })
  .y(function(d) {
    return yRange(d.z);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc2(lineData))
  .attr('stroke', 'purple')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
  
// Plot the ideal-temp-min line & append it
var lineFunc3 = d3.svg.line()
  .x(function(d) {
    return xRange(d.x);
  })
  .y(function(d) {
    return yRange(d.a);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc3(lineData))
  .attr('stroke', 'green')
  .attr('stroke-width', 0)
  .attr('opacity', 0.5)
  .attr('fill', 'none');
  
// Plot the ideal-temp-max line & append it
var lineFunc4 = d3.svg.line()
  .x(function(d) {
    return xRange(d.x);
  })
  .y(function(d) {
    return yRange(d.b);
  })
  .interpolate('linear');
  
  vis.append('svg:path')
  .attr('d', lineFunc4(lineData))
  .attr('stroke', 'green')
  .attr('stroke-width', 0)
  .attr('opacity', 0.5)
  .attr('fill', 'none');
  
// Plot the area between the ideal max and min & append it
var area = d3.svg.area()
  .x(function(d) { 
    return xRange(d.x); 
  })
  .y0(function(d) { 
    return yRange(d.a); 
  })
  .y1(function(d) { 
    return yRange(d.b); 
  });
  
  vis.append('svg:path')
  .datum(lineData)
  .attr('class', 'area')
  .attr('d', area)
  .attr('opacity', 0.5);
  
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