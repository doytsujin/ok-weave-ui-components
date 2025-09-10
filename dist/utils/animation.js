"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strongSpring = strongSpring;
exports.weakSpring = weakSpring;
var _reactMotion = require("react-motion");
function weakSpring(value) {
  return (0, _reactMotion.spring)(value, {
    damping: 18,
    precision: 1,
    stiffness: 100
  });
}
function strongSpring(value) {
  return (0, _reactMotion.spring)(value, {
    damping: 50,
    precision: 1,
    stiffness: 800
  });
}
//# sourceMappingURL=animation.js.map