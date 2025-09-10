"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderRadius = void 0;
exports.themeBorderRadiiAsScss = themeBorderRadiiAsScss;
var _forEach2 = _interopRequireDefault(require("lodash/forEach"));
var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var borderRadius = exports.borderRadius = {
  circle: '50%',
  none: '0',
  soft: '2px'
};

// Collects all theme border radii as SCSS vars.
function themeBorderRadiiAsScss() {
  var themeBorderRadii = [];
  (0, _forEach2["default"])(borderRadius, function (value, name) {
    themeBorderRadii.push("$border-radius-".concat((0, _kebabCase2["default"])(name), ": ").concat(value));
  });
  return themeBorderRadii;
}
//# sourceMappingURL=borders.js.map