"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Text = _interopRequireDefault(require("../Text"));
var _selectors = require("../../theme/selectors");
var _theme = require("../../utils/theme");
var _excluded = ["onClose"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
var StyledAlert = _styledComponents["default"].div.withConfig({
  displayName: "Alert__StyledAlert",
  componentId: "sc-1emg848-0"
})(["display:flex;background:", ";border-radius:", ";color:", ";margin:", " 0 ", " 0;min-height:1em;opacity:", ";padding:", ";transition:opacity 0.2s linear;a{color:", ";text-decoration:underline;&:hover{text-decoration:none;}}"], (0, _theme.fromAtoms)('Alert', 'type', 'background'), function (props) {
  return props.theme.borderRadius.soft;
}, (0, _theme.fromAtoms)('Alert', 'type', 'color'), (0, _selectors.spacing)('xs'), (0, _selectors.spacing)('xs'), function (props) {
  return props.visible ? '1' : '0';
}, (0, _selectors.spacing)('base'), (0, _theme.fromAtoms)('Alert', 'type', 'color'));
var Content = _styledComponents["default"].div.withConfig({
  displayName: "Alert__Content",
  componentId: "sc-1emg848-1"
})(["flex-grow:1;"]);
var Title = _styledComponents["default"].div.withConfig({
  displayName: "Alert__Title",
  componentId: "sc-1emg848-2"
})(["margin-bottom:", ";"], (0, _selectors.spacing)('xs'));
var StyledText = (0, _styledComponents["default"])(_Text["default"]).withConfig({
  displayName: "Alert__StyledText",
  componentId: "sc-1emg848-3"
})(["color:", ";font-weight:bold;"], function (props) {
  return props.theme.colors.white;
});
var Icon = _styledComponents["default"].i.withConfig({
  displayName: "Alert__Icon",
  componentId: "sc-1emg848-4"
})(["margin-right:", ";"], (0, _selectors.spacing)('xs'));
var CloseIcon = _styledComponents["default"].i.withConfig({
  displayName: "Alert__CloseIcon",
  componentId: "sc-1emg848-5"
})(["cursor:pointer;display:", ";margin-left:", ";"], function (props) {
  return props.visible ? 'block' : 'none';
}, (0, _selectors.spacing)('base'));
var normaliseIconName = function normaliseIconName(name) {
  return name.indexOf('fa-') === -1 ? "fa-".concat(name) : name;
};

/**
 * An alert to let the user know about an action or state.
 * ```javascript
 * import { Alert } from 'weaveworks-ui-components';
 *
 * export default function() {
 *  return (
 *    <div>
 *     <Alert type="warning" visible={true}>
 *       Warning: Hmm, this is not good, but it is not terrible.
 *     </Alert>
 *    </div>
 *   )
 * }
 * ```
 */
function Alert(props) {
  var children = props.children,
    icon = props.icon,
    title = props.title,
    visible = props.visible;
  var onClose = props.onClose,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(StyledAlert, otherProps, /*#__PURE__*/_react["default"].createElement(Content, null, title && /*#__PURE__*/_react["default"].createElement(Title, null, icon && /*#__PURE__*/_react["default"].createElement(Icon, {
    className: "fa ".concat(normaliseIconName(icon))
  }), /*#__PURE__*/_react["default"].createElement(StyledText, null, title)), children), onClose && /*#__PURE__*/_react["default"].createElement(CloseIcon, {
    visible: visible,
    onClick: onClose,
    className: "fa fa-times"
  }));
}
Alert.propTypes = {
  /**
   * Show an icon for the title
   */
  icon: _propTypes["default"].string,
  /**
   * Callback that runs with the alert is dismissed by clicking the 'X'
   */
  onClose: _propTypes["default"].func,
  /**
   * Show a title for the alert
   */
  title: _propTypes["default"].string,
  /**
   * Set the color scheme to indicate the nature of the alert.
   */
  type: _propTypes["default"].oneOf(['info', 'success', 'warning', 'error']),
  /**
   * Toggle whether the alert is shown
   */
  visible: _propTypes["default"].bool
};
Alert.defaultProps = {
  icon: '',
  onClose: null,
  title: '',
  type: 'info',
  visible: true
};
var _default = exports["default"] = Alert;
//# sourceMappingURL=Alert.js.map