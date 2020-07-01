'use strict';
var hash = require('hash-string');
function shorterHash(txt) { return hash(txt).toString(36); }
module.exports = shorterHash;

