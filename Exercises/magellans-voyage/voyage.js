var express = require('express')
var app = express()
var fs = require('fs')
var path = require('path')
// var each = require('async-each');
var cityArr = ['seville', 'canary-islands', 'cape-verde', 'strait-of-magellan', 'guam', 'philippines']

cityArr.forEach(function cityLoop(e,i){
  if (i == (cityArr.length - 1)) {
    var htmltxt = "<h1>" + e + "</h1><a href=" + cityArr[i+1] + "></a>"
  }else{
    var htmltxt = "<h1>" + e + "</h1><a href=" + cityArr[i+1] + "><button>NEXT ==> TO " + cityArr[i+1] + "</button></a>"
    console.log(htmltxt)
  }
  fs.writeFile('./' + e + '.html', htmltxt, function (err) {
    if (err) {
      console.log(err)
    }
    else {
      console.log(e + '.html yo!')
    }
  })
})

app.get('/:name', function(req, res) {
  var isCity = cityArr.indexOf(req.params.name)
  if (isCity >= 0) {
    res.sendFile(path.join(__dirname + '/' + req.params.name + '.html'))
    console.log('app.get working for ' + req.params.name)
  } else {
    res.status(404).send('You\'re lost')
    console.log('fail')
  }
})

app.listen(8080)
