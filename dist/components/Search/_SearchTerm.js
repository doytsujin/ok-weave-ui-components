"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _compose = require("../../utils/compose");
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
var Styled = function Styled(component) {
  return (0, _styledComponents["default"])(component).withConfig({
    displayName: "_SearchTerm",
    componentId: "sc-1nm9wz9-0"
  })(["background-color:", ";border-radius:", ";margin:4px 0 4px 2px;padding:6px;margin-left:4px;display:flex;align-items:center;i{padding-left:4px;cursor:pointer;}"], function (props) {
    return props.theme.colors.blue200;
  }, function (props) {
    return props.theme.borderRadius.soft;
  });
};
var SearchTerm = /*#__PURE__*/function (_React$PureComponent) {
  function SearchTerm() {
    var _this;
    _classCallCheck(this, SearchTerm);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, SearchTerm, [].concat(args));
    _defineProperty(_this, "handleRemove", function () {
      _this.props.onRemove(_this.props.term, _this.props.label);
    });
    return _this;
  }
  _inherits(SearchTerm, _React$PureComponent);
  return _createClass(SearchTerm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        term = _this$props.term,
        label = _this$props.label;
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: "".concat(className, " search-term")
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "search-term-text"
      }, label || term), /*#__PURE__*/_react["default"].createElement("i", {
        onClick: this.handleRemove,
        className: "fa fa-times remove-term"
      }));
    }
  }]);
}(_react["default"].PureComponent);
SearchTerm.propTypes = {
  /**
   * Display value that will be rendered.
   */
  label: _propTypes["default"].string,
  /**
   * Handler that will run when a term is removed.
   * The `term` prop will be passed to the `onRemove` handler.
   */
  onRemove: _propTypes["default"].func,
  /**
   * The internal identifier for a term.
   * If no `label` is supplied, `term` will be rendered.
   */
  term: _propTypes["default"].string.isRequired
};
SearchTerm.defaultProps = {
  label: '',
  onRemove: _noop2["default"]
};
var _default = exports["default"] = (0, _compose.copyPropTypes)(SearchTerm, Styled(SearchTerm));
//# sourceMappingURL=_SearchTerm.js.map