var add = (a, b) => a + b;

var asyncAdd = (a, b, callback) => {
  setTimeout(function() {
    callback(a + b);
  }, 1000); // End of setTimeout(function() {
}; // End of var asyncAdd = (a, b, callback) => {

var square = (a) => a * a;

var asyncSquare = (a, callback) => {
  setTimeout(function() {
    callback(a * a);
  }, 1000); // End of setTimeout(function() {
}; // End of var asyncSquare = (a, b, callback) => {

var setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};

module.exports = {
  add,
  asyncAdd,
  square,
  asyncSquare,
  setName
};