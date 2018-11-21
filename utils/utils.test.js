const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
  }); // End of it('should add two numbers', () => {
  
  it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });  
  }); // End of it('should async add two numbers', () => {
  
  it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
  }); // End of it('should square a number', () => {
  
  it('should asycn square a number', (done) => {
    utils.asyncSquare(3, (res) => {
      expect(res).toBe(9).toBeA('number');
      done();
    });
  }); // End of it('should asycn square a number', (done) => {
  
  // should verify first and last names are set
  // assert it includes firstName and lastName with proper values
  it('should set firstName and lastName', () => {
    var user = {location: 'Philadelphia', age: 25};
    var res = utils.setName(user, 'Andrew Mead');
  
    expect(res).toInclude({
      firstName: 'Andrew',
      lastName: 'Mead'
    });
  }); // End of it('should set firstName and lastName', () => {

}); // End of describe('Utils', () => {