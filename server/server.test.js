const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
  .get('/')
  .expect(404)
  .expect((res) => {
    expect(res.body).toInclude({
      error: 'Page not found.'
    }); // End of expect(res.body).toInclude({
  }) // End of .expect((res) => {
  .end(done);
});

// Make a new test
// assert 200
// Assert that you exist in users array

it('should return users', (done) => {
  request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
    expect(res.body).toInclude({
      name: 'Andrew',
      age: 25
    });
  }) // End of .expect((res) => {
  .end(done);
}); // End of it('should return users', (done) => {