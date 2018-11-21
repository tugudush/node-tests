const expect = require('expect');

describe('App', () => {
  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  }); // End of it('should call the spy correctly', () => {
}); // End of describe('App', () => {