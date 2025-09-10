"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _omit2 = _interopRequireDefault(require("lodash/omit"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _selectors = require("../../theme/selectors");
var _theme = require("../../utils/theme");
var _excluded = ["children", "text", "primary", "danger", "selected", "disabled"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var StyledButton = (0, _styledComponents["default"])('button').withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-13fdicr-0"
})(["height:36px;min-width:80px;padding:0 ", ";border:0;outline:none;box-shadow:", ";background:", ";color:", ";font-size:", ";cursor:", ";border-radius:", ";&:hover{transition:color 0.3s ease;background:", ";color:", ";}"], (0, _selectors.spacing)('small'), function (props) {
  return props.styled.selected ? (0, _selectors.boxShadow)('selected') : (0, _selectors.boxShadow)('light');
}, (0, _theme.fromAtoms)('Button', 'styled.type', 'background'), (0, _theme.fromAtoms)('Button', 'styled.type', 'color'), (0, _selectors.fontSize)('small'), function (props) {
  return props.disabled ? 'not-allowed' : 'pointer';
}, (0, _selectors.borderRadius)('soft'), (0, _theme.fromAtoms)('Button', 'styled.type', 'hoverBackground'), (0, _theme.fromAtoms)('Button', 'styled.type', 'hoverColor'));

/**
 * A button that will run a callback on click
 * ```javascript
 *  <Button onClick={alert} text="Submit" />
 * ```
 */
var Button = /*#__PURE__*/function (_React$PureComponent) {
  function Button() {
    var _this;
    _classCallCheck(this, Button);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Button, [].concat(args));
    _defineProperty(_this, "handleClick", function (e) {
      var _this$props = _this.props,
        onClick = _this$props.onClick,
        disabled = _this$props.disabled,
        text = _this$props.text;
      if (onClick && !disabled) {
        onClick(e, text);
      }
    });
    return _this;
  }
  _inherits(Button, _React$PureComponent);
  return _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        children = _this$props2.children,
        text = _this$props2.text,
        primary = _this$props2.primary,
        danger = _this$props2.danger,
        selected = _this$props2.selected,
        disabled = _this$props2.disabled,
        otherProps = _objectWithoutProperties(_this$props2, _excluded);
      var buttonProps = (0, _omit2["default"])(otherProps, ['onClick']);
      return /*#__PURE__*/_react["default"].createElement(StyledButton, _extends({
        disabled: disabled,
        onClick: this.handleClick,
        styled: {
          selected: selected,
          type: disabled && 'disabled' || primary && 'primary' || danger && 'danger' || 'default'
        }
      }, buttonProps), children || text);
    }
  }]);
}(_react["default"].PureComponent);
Button.propTypes = {
  /**
   * Turn the button red to indicate something bad might happen
   */
  danger: _propTypes["default"].bool,
  /**
   * Disable the button.
   */
  disabled: _propTypes["default"].bool,
  /**
   * Callback that will be run when the button is clicked.
   */
  onClick: _propTypes["default"].func,
  /**
   * Render the button in blue700 (useful for CTAs)
   */
  primary: _propTypes["default"].bool,
  /**
   * Add styling to show the button as selected
   */
  selected: _propTypes["default"].bool,
  /**
   * Text that will be used as the button label.
   * If this props is provided, it will be passed back to the `onClick` handler
   */
  text: _propTypes["default"].string,
  /**
   * The type of button, as it relates to <form> components
   */
  type: _propTypes["default"].string
};
Button.defaultProps = {
  danger: false,
  disabled: false,
  onClick: _noop2["default"],
  primary: false,
  selected: false,
  text: 'Submit',
  type: 'submit'
};
var _default = exports["default"] = Button;
//# sourceMappingURL=Button.js.map