"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spacing = exports.selector = exports.fontSize = exports.color = exports.boxShadow = exports.borderRadius = void 0;
var _isObject2 = _interopRequireDefault(require("lodash/isObject"));
var _get2 = _interopRequireDefault(require("lodash/get"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// `selector()` allows you to create closures over as
// many levels as you wish, each time returning another function.
// This lets you compose selectors and when they are passed an object
// finally select that value
var _selector = exports.selector = function selector(propsOrSelector) {
  var prevArgs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if ((0, _isObject2["default"])(propsOrSelector)) {
    return (0, _get2["default"])(propsOrSelector, prevArgs);
  }
  return function (value) {
    return _selector(value, [].concat(_toConsumableArray(prevArgs), [propsOrSelector]));
  };
};
var themeSelector = _selector('theme');

// these are pre-composed selectors for our theme
// Usage:
//   const Success = styled.i`
//     color: ${color('green500')};
//   `;
var boxShadow = exports.boxShadow = themeSelector('boxShadow');
var borderRadius = exports.borderRadius = themeSelector('borderRadius');
var color = exports.color = themeSelector('colors');
var fontSize = exports.fontSize = themeSelector('fontSizes');
var spacing = exports.spacing = themeSelector('spacing');
//# sourceMappingURL=selectors.js.map