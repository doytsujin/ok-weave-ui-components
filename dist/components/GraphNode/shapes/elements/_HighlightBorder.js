"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _theme = _interopRequireDefault(require("../../../../theme"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HighlightBorder = function HighlightBorder(renderTemplate, contrastMode) {
  return renderTemplate({
    style: {
      fill: 'none',
      stroke: _theme["default"].colors.blue400,
      strokeOpacity: contrastMode ? 0.5 : 0.4,
      strokeWidth: contrastMode ? 1 : 0.8
    },
    transform: "scale(".concat(0.5, ")")
  }, {
    allowStroke: false
  });
};
var _default = exports["default"] = HighlightBorder;
//# sourceMappingURL=_HighlightBorder.js.map