"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
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
var Item = _styledComponents["default"].div.withConfig({
  displayName: "MenuItem__Item",
  componentId: "sc-198zqm8-0"
})(["border-radius:", ";display:block;min-height:40px;line-height:40px;padding-left:", ";&:hover{transition:color,0.3s,ease;color:", ";cursor:pointer;}", ";", ";"], function (props) {
  return props.theme.borderRadius.soft;
}, (0, _selectors.spacing)('medium'), function (props) {
  return !props.active && props.theme.colors.purple800;
}, function (props) {
  return props.isSubItem && "\n    font-size: 14px;\n    padding-left: ".concat(props.theme.spacing.xl, ";\n    line-height: 30px;\n    min-height: 30px;\n  ");
}, function (props) {
  return props.active && "\n    color: ".concat(props.theme.colors.gray50, ";\n    background-color: ").concat(props.theme.colors.purple400, ";\n  ");
});

/**
 * A child of the `<Menu />` component.
 *
 * See also [Menu](/components/menu)
 */
var MenuItem = /*#__PURE__*/function (_React$Component) {
  function MenuItem() {
    var _this;
    _classCallCheck(this, MenuItem);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MenuItem, [].concat(args));
    _defineProperty(_this, "handleClick", function () {
      if (_this.props.onClick) {
        _this.props.onClick(_this.props.text);
      }
    });
    return _this;
  }
  _inherits(MenuItem, _React$Component);
  return _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        text = _this$props.text,
        children = _this$props.children,
        className = _this$props.className,
        active = _this$props.active,
        isSubItem = _this$props.isSubItem;
      // Use the className the users gives, or fall back to 'weave-menu-item'.
      var cl = (0, _classnames["default"])(className || 'weave-menu-item', {
        'menu-item-active': active
      });
      return /*#__PURE__*/_react["default"].createElement(Item, {
        onClick: this.handleClick,
        className: cl,
        active: active,
        isSubItem: isSubItem
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "menu-text"
      }, text), children);
    }
  }]);
}(_react["default"].Component);
MenuItem.propTypes = {
  /**
   * Renders small text if true.
   */
  isSubItem: _propTypes["default"].bool,
  /**
   * Handler that will be run on click. The `text` prop is passed to the handler function.
   */
  onClick: _propTypes["default"].func,
  /**
   * Text that will be displayed as the menu item.
   */
  text: _propTypes["default"].string
};
MenuItem.defaultProps = {
  isSubItem: false,
  onClick: _noop2["default"],
  text: ''
};
var _default = exports["default"] = MenuItem;
//# sourceMappingURL=MenuItem.js.map