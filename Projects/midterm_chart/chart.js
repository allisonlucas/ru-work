// var data = [4, 8, 15, 16, 23, 42];

// var x = d3.scale.linear()
//     .domain([0, d3.max(data)])
//     .range([0, 420]);

// d3.select(".chart")
//   .selectAll("div")
//     .data(data)
//   .enter().append("div")
//     .style("width", function(d) { return x(d) + "px"; })
//     .text(function(d) { return d; });

// d3.selectAll("p").style("color", function() {
//   return "hsl(" + Math.random() * 360 + ",100%,50%)";
// });


// var ctx = document.getElementById("myChart");
// var Chart = require('src/chart.js')
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

// var data = {
//     labels: [
//         "Red",
//         "Blue",
//         "Yellow"
//     ],
//     datasets: [
//         {
//             data: [300, 50, 100],
//             backgroundColor: [
//                 "#FF6384",
//                 "#36A2EB",
//                 "#FFCE56"
//             ],
//             hoverBackgroundColor: [
//                 "#FF6384",
//                 "#36A2EB",
//                 "#FFCE56"
//             ]
//         }]
// };

// var myPieChart = new Chart(ctx,{
//     type: 'pie',
//     data: data,
//     // options: options
// });

// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: data,
//     // options: options
// });

// var chartInstance = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     max: 5,
//                     min: 0,
//                     stepSize: 0.5
//                 }
//             }]
//         }
//     }
// });

var lineData = [
  {
  x: 1,
  y: 142
}, {
  x: 2,
  y: 146
}, {
  x: 3,
  y: 147
}, {
  x: 4,
  y: 145
}, {
  x: 5,
  y: 143
}, {
  x: 6,
  y: 140
}, {
  x: 7,
  y: 141
}, {
  x: 8,
  y: 143
}, {
  x: 9,
  y: 144
},
  {
  x: 10,
  y: 142
}, {
  x: 11,
  y: 142
},
{
  x: 12,
  y: 146
}, {
  x: 13,
  y: 147
}, {
  x: 14,
  y: 145
}, {
  x: 15,
  y: 143
}, {
  x: 16,
  y: 140
}, {
  x: 17,
  y: 141
}, {
  x: 18,
  y: 143
}, {
  x: 19,
  y: 144
}, {
  x: 20,
  y: 142
}, {
  x: 21,
  y: 142
}, {
  x: 22,
  y: 146
}, {
  x: 23,
  y: 147
}, {
  x: 24,
  y: 145
}, {
  x: 25,
  y: 143
}, {
  x: 26,
  y: 140
}, {
  x: 27,
  y: 141
}, {
  x: 28,
  y: 143
}, {
  x: 29,
  y: 144
}, {
  x: 30,
  y: 144
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
    xRange = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([1, 31]),
    yRange = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([d3.min(lineData, function(d) {
      return d.y -20;
    }), d3.max(lineData, function(d) {
      return d.y + 20;
    })]),
    xAxis = d3.svg.axis()
      .scale(xRange)
      .tickSize(3)
      .tickSubdivide(true),
    yAxis = d3.svg.axis()
      .scale(yRange)
      .tickSize(3)
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
  .attr('fill', 'none')
  
  // var idealTemp = d3.svg.line()
  // .x(function(d) {
  //   return xRange(d.x);
  // })
  // .y(function(d) {
  //   return yRange(140, 160);
  // })
  // .interpolate('linear');
  
// var idealTemp = [
//   {
//     y: 140
//   },
//   {
//     y: 160
//   }
//   ]
  
//   var yRangeIdealTemp = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([140, 160])
  
  vis.append('rect')
  .attr('x', 50)
  .attr('y', 50)
  .attr('width', 430) // sets the width of bar
  .attr('height', 92)
  .attr('fill', 'green')   // fills the bar with grey color
  .attr('opacity', 0.5);
  
