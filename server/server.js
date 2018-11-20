const express = require('express');

var app = express();
var port = 3000;

app.get('/', function(req, res) {
  //res.status(200).send('Hello world!');
  //res.send('Hello world!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
}); // End of app.get('/', function(req, res) {



app.listen(port, function() {
  console.log(`Listening on port ${port}`)
});

module.exports.app = app;