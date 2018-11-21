var db = require('./db');

var handleSignup = (email, password) => {
  // Check if email already exists
  // Save the user to the database
  db.saveUser({email, password});
  // Send the welcome email
}; // End of module.exports.handleSignup = (email, password) => {

module.exports = {
  handleSignup
};