"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _theme = _interopRequireDefault(require("../../../../theme"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HighlightShadow = function HighlightShadow(renderTemplate, contrastMode) {
  return renderTemplate({
    style: {
      fill: 'none',
      stroke: _theme["default"].colors.white,
      strokeOpacity: contrastMode ? 0.4 : 0.5,
      strokeWidth: 0.7
    },
    transform: "scale(".concat(0.5, ")")
  }, {
    allowStroke: false
  });
};
var _default = exports["default"] = HighlightShadow;
//# sourceMappingURL=_HighlightShadow.js.map