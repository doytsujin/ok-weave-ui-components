"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _selectors = require("../../theme/selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
var Container = _styledComponents["default"].div.withConfig({
  displayName: "ListItem__Container",
  componentId: "sc-4ui9mo-0"
})(["display:flex;position:relative;padding:", " ", ";", ";"], (0, _selectors.spacing)('small'), (0, _selectors.spacing)('base'), function (props) {
  return props.active && "\n    background-color: ".concat(props.theme.colors.gray50, ";\n  ");
});
var Link = Container.withComponent('a');
var Icon = _styledComponents["default"].span.withConfig({
  displayName: "ListItem__Icon",
  componentId: "sc-4ui9mo-1"
})(["margin-right:", ";"], (0, _selectors.spacing)('small'));
var Content = _styledComponents["default"].div.withConfig({
  displayName: "ListItem__Content",
  componentId: "sc-4ui9mo-2"
})(["flex-direction:column;width:100%;"]);
var Subtext = _styledComponents["default"].span.withConfig({
  displayName: "ListItem__Subtext",
  componentId: "sc-4ui9mo-3"
})(["font-size:", ";opacity:0.5;"], function (props) {
  return props.theme.fontSizes.small;
});

/**
 * A list item component that can be used for or showing off summary details about something!
 *
 * ```javascript
 * export default function ListItemExample({ clickHandler }) {
 *   const onClick = () => clickHandler('onClick', 'clicked it');
 *   return (
 *     <div>
 *       <ListItem
 *         onClick={onClick}
 *         text="Item 1"
 *         />
 *       <ListItem
 *         onClick={onClick}
 *         text="Item 2"
 *         subText="Where do you go to?"
 *         />
 *     </div>
 *   );
 * }
 * ```
 */
var ListItem = /*#__PURE__*/function (_React$Component) {
  function ListItem() {
    var _this;
    _classCallCheck(this, ListItem);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ListItem, [].concat(args));
    _defineProperty(_this, "handleClick", function (ev) {
      var _this$props = _this.props,
        onClick = _this$props.onClick,
        value = _this$props.value;
      if (onClick) {
        ev.preventDefault();
        onClick(value);
      }
    });
    return _this;
  }
  _inherits(ListItem, _React$Component);
  return _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        active = _this$props2.active,
        text = _this$props2.text,
        subText = _this$props2.subText,
        onClick = _this$props2.onClick,
        children = _this$props2.children,
        style = _this$props2.style,
        leftIcon = _this$props2.leftIcon;
      var BaseTag = onClick ? Link : Container;
      var props = onClick && {
        href: '#'
      };
      return /*#__PURE__*/_react["default"].createElement(BaseTag, _extends({
        style: style,
        active: active,
        onClick: this.handleClick
      }, props), leftIcon && /*#__PURE__*/_react["default"].createElement(Icon, null, leftIcon), /*#__PURE__*/_react["default"].createElement(Content, null, text && /*#__PURE__*/_react["default"].createElement("div", null, text), children, subText && /*#__PURE__*/_react["default"].createElement(Subtext, null, subText)));
    }
  }]);
}(_react["default"].Component);
ListItem.propTypes = {
  active: _propTypes["default"].bool,
  leftIcon: _propTypes["default"].node,
  onClick: _propTypes["default"].func,
  style: _propTypes["default"].object,
  subText: _propTypes["default"].node,
  text: _propTypes["default"].node,
  value: _propTypes["default"].node
};
ListItem.defaultProps = {
  active: false,
  leftIcon: null,
  onClick: null,
  style: {},
  subText: '',
  text: '',
  value: ''
};
var _default = exports["default"] = ListItem;
//# sourceMappingURL=ListItem.js.map