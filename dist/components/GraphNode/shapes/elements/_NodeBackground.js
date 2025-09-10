"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _theme = _interopRequireDefault(require("../../../../theme"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var NodeBackground = function NodeBackground(renderTemplate) {
  return renderTemplate({
    style: {
      fill: _theme["default"].colors.white,
      stroke: 'none'
    },
    transform: "scale(".concat(0.48, ")")
  });
};
var _default = exports["default"] = NodeBackground;
//# sourceMappingURL=_NodeBackground.js.map