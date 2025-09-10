"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layers = void 0;
exports.themeLayersAsScss = themeLayersAsScss;
var _forEach2 = _interopRequireDefault(require("lodash/forEach"));
var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var layers = exports.layers = {
  alert: 3,
  dropdown: 5,
  front: 1,
  modal: 7,
  notification: 4,
  toolbar: 2,
  tooltip: 6
};

// Collects all theme z-index layers as SCSS vars
function themeLayersAsScss() {
  var themeLayers = [];
  (0, _forEach2["default"])(layers, function (value, name) {
    themeLayers.push("$layer-".concat((0, _kebabCase2["default"])(name), ": ").concat(value));
  });
  return themeLayers;
}
//# sourceMappingURL=layers.js.map