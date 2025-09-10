"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
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
var StyledHeader = function StyledHeader(component) {
  return (0, _styledComponents["default"])(component).withConfig({
    displayName: "_Header",
    componentId: "sc-1wobgxm-0"
  })(["text-align:left;cursor:", ";user-select:none;width:", ";&:hover{color:", ";}"], function (props) {
    return props.sortable ? 'pointer' : 'inherit';
  }, function (props) {
    return props.width;
  }, function (props) {
    return props.sortable ? props.theme.colors.blue700 : 'inherit';
  });
};
var Header = /*#__PURE__*/function (_React$Component) {
  function Header() {
    var _this;
    _classCallCheck(this, Header);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Header, [].concat(args));
    _defineProperty(_this, "handleClick", function (ev) {
      var _this$props = _this.props,
        onClick = _this$props.onClick,
        value = _this$props.value,
        sortable = _this$props.sortable;
      if (onClick && sortable) {
        onClick(ev, value);
      }
    });
    return _this;
  }
  _inherits(Header, _React$Component);
  return _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        className = _this$props2.className,
        children = _this$props2.children,
        order = _this$props2.order,
        sortable = _this$props2.sortable,
        title = _this$props2.title;
      return /*#__PURE__*/_react["default"].createElement("td", {
        onClick: this.handleClick,
        className: className,
        title: title
      }, children, ' ', order && sortable && /*#__PURE__*/_react["default"].createElement("i", {
        className: order === 'desc' ? 'fa fa-caret-down' : 'fa fa-caret-up'
      }));
    }
  }]);
}(_react["default"].Component); // Only way to declare default props :(
var Styled = StyledHeader(Header);
Styled.propTypes = {
  /**
   * Sort order. Should be either `asc` or `desc`
   */
  order: _propTypes["default"].oneOf(['asc', 'desc']),
  /**
   * Whether or not the column will be sortable
   */
  sortable: _propTypes["default"].bool,
  /**
   * The width that will be applied to the column
   */
  width: _propTypes["default"].string
};
Styled.defaultProps = {
  sortable: true
};
var _default = exports["default"] = Styled;
//# sourceMappingURL=_Header.js.map