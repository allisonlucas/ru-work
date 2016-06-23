var express = require('express')
var app = express()
var html = '<form method="post" action="/formsubmit"> <input name="email" type="email"> <input type="submit"> </form>'
var success = '<h1>Success!</h1>'

app.get('/', function(req, res) {
  if (req) {
    res.send(html)
    console.log('app.get working')
  } else {
    res.status(404).send('You\'re lost')
    console.log('fail')
  }
})

app.get('/success', function(req, res) {
  if (req) {
    res.send(success)
    console.log('app.get success working')
  } else {
    res.status(404).send('You\'re lost')
    console.log('submit fail')
  }
})

app.post('/formsubmit', function(req, res) {
  res.redirect("/success", "/success", "post")
})

app.listen(8080)
