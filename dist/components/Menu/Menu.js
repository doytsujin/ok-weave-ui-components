"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Menu;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MenuWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Menu__MenuWrapper",
  componentId: "sc-f3q817-0"
})(["color:", ";text-align:left;"], function (props) {
  return props.theme.colors.purple400;
});

/**
 * A menu component that can be used for navigation.
 *
 * ```javascript
 * export default function MenuExample({clickHandler}) {
 *   return (
 *     <Menu>
 *       <MenuItem onClick={clickHandler.bind(this, 'onClick')} text="Item 1" />
 *       <MenuItem onClick={clickHandler.bind(this, 'onClick')} text="Item 2" />
 *       <MenuItem
 *         onClick={clickHandler.bind(this, 'onClick')}
 *         isSubItem text="Sub Item 1"
 *       />
 *       <MenuItem
 *         onClick={clickHandler.bind(this, 'onClick')}
 *         isSubItem text="Sub Item 2"
 *       />
 *     </Menu>
 *   );
 * }
 * ```
 */
function Menu(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(MenuWrapper, {
    className: "weave-menu"
  }, children);
}
//# sourceMappingURL=Menu.js.map