const express = require('express');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
  res.send('Hello world!');
}); // End of app.get('/', function(req, res) {

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
});