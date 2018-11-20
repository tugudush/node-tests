const express = require('express');

var app = express();
var port = 3000;

app.get('/', (req, res) => {
  //res.status(200).send('Hello world!');
  //res.send('Hello world!');
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  }); // End of res.status(404).send({
}); // End of app.get('/', (req, res) => {

// GET /users
// Give users a name prop and age prop
app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Mike',
      age: 27
    },
    {
      name: 'Andrew',
      age: 25
    },
    {
      name: 'Jen',
      age: 26
    }
  ]); // End of res.status(200).send({
}); // End of app.get('/users', (req, res) => {

app.listen(port, function() {
  console.log(`Listening on port ${port}`)
});

module.exports.app = app;