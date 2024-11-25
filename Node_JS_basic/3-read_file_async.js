const fs = require('node:fs');
const DebugHolberton = require('./debug.js');

module.exports = function countStudents(path) {
  let d = new DebugHolberton("Checker");
  d.fetch();
};
