"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _selectors = require("../../theme/selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
var TabName = _styledComponents["default"].span.withConfig({
  displayName: "_TabButton__TabName",
  componentId: "sc-1o9j7wa-0"
})([""]);
var getBgColor = function getBgColor(selected, secondary, theme) {
  if (secondary) {
    return theme.colors.purple25;
  }
  return selected ? theme.colors.white : theme.colors.gray50;
};
var Styled = function Styled(component) {
  return (0, _styledComponents["default"])(component).withConfig({
    displayName: "_TabButton",
    componentId: "sc-1o9j7wa-1"
  })(["cursor:pointer;margin-bottom:-1px;margin-right:", ";padding-top:", ";padding-bottom:", ";padding-left:", ";padding-right:", ";font-size:", ";outline:0;", ";", ";", "{color:", ";opacity:", ";}"], (0, _selectors.spacing)('xxs'), function (props) {
    return props.small ? (0, _selectors.spacing)('xs') : (0, _selectors.spacing)('xs');
  }, function (props) {
    return props.small ? (0, _selectors.spacing)('xs') : (0, _selectors.spacing)('xs');
  }, function (props) {
    return props.small ? (0, _selectors.spacing)('small') : (0, _selectors.spacing)('base');
  }, function (props) {
    return props.small ? (0, _selectors.spacing)('small') : (0, _selectors.spacing)('base');
  }, function (props) {
    return props.small ? props.theme.fontSizes.normal : props.theme.fontSizes.large;
  }, function (_ref) {
    var selected = _ref.selected,
      secondary = _ref.secondary,
      theme = _ref.theme;
    return "\n    background-color: ".concat(getBgColor(selected, secondary, theme), ";\n    border-top-left-radius: ").concat(theme.borderRadius.soft, ";\n    border-top-right-radius: ").concat(theme.borderRadius.soft, ";\n    border: 1px solid ").concat(theme.colors.purple100, ";\n  ");
  }, function (props) {
    return props.selected && 'border-bottom: 1px solid transparent;';
  }, TabName, function (props) {
    return props.theme.colors.purple900;
  }, function (props) {
    return props.selected ? 1 : 0.65;
  });
};
var TabButton = /*#__PURE__*/function (_React$Component) {
  function TabButton() {
    var _this;
    _classCallCheck(this, TabButton);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TabButton, [].concat(args));
    _defineProperty(_this, "handeClick", function (ev) {
      _this.props.onClick(ev, _this.props.name);
    });
    return _this;
  }
  _inherits(TabButton, _React$Component);
  return _createClass(TabButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children;
      return /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.handeClick,
        className: className
      }, /*#__PURE__*/_react["default"].createElement(TabName, null, children));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = Styled(TabButton);
//# sourceMappingURL=_TabButton.js.map