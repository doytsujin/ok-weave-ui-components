"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = exports.Example = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _selectors = require("../theme/selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Example = exports.Example = _styledComponents["default"].div.withConfig({
  displayName: "example__Example",
  componentId: "sc-cuwuc9-0"
})(["margin-bottom:", ";"], (0, _selectors.spacing)('large'));
var Info = exports.Info = _styledComponents["default"].h4.withConfig({
  displayName: "example__Info",
  componentId: "sc-cuwuc9-1"
})(["color:", ";font-size:", ";margin-bottom:", ";"], function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.fontSizes.normal;
}, (0, _selectors.spacing)('small'));
//# sourceMappingURL=example.js.map