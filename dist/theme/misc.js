"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textColor = exports.overlayIconSize = void 0;
exports.themeMiscVarsAsScss = themeMiscVarsAsScss;
var _colors = require("./colors");
var overlayIconSize = exports.overlayIconSize = '300px';
var textColor = exports.textColor = _colors.colors.black;

// Collects all theme misc vars as SCSS vars.
function themeMiscVarsAsScss() {
  return ["$overlay-icon-size: ".concat(overlayIconSize)];
}
//# sourceMappingURL=misc.js.map