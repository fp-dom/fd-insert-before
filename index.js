"use strict";

var curry3 = require("fj-curry").curry3;


var _insertBefore = function (parent, newChild, refChild) {
  return parentElement.insertBefore(newChild, refChild);
};

module.exports = curry3(_insertBefore);