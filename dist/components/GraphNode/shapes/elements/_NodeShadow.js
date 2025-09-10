"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _theme = _interopRequireDefault(require("../../../../theme"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var NodeShadow = function NodeShadow(renderTemplate, contrastMode) {
  return renderTemplate({
    style: {
      fill: 'none',
      stroke: contrastMode ? _theme["default"].colors.white : _theme["default"].colors.gray50,
      strokeWidth: contrastMode ? 0.25 : 0.18
    },
    transform: "scale(".concat(0.49, ")")
  });
};
var _default = exports["default"] = NodeShadow;
//# sourceMappingURL=_NodeShadow.js.map