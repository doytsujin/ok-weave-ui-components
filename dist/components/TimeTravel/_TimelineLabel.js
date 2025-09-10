"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
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
var TimelineLabelWrapper = _styledComponents["default"].span.attrs(function (_ref) {
  var x = _ref.x;
  return {
    style: {
      transform: "translateX(".concat(x, "px)")
    }
  };
}).withConfig({
  displayName: "_TimelineLabel__TimelineLabelWrapper",
  componentId: "sc-17i94q7-0"
})(["position:absolute;"]);
var TimelineLabelLine = _styledComponents["default"].span.withConfig({
  displayName: "_TimelineLabel__TimelineLabelLine",
  componentId: "sc-17i94q7-1"
})(["border-left:1px solid ", ";height:75px;"], function (props) {
  return props.theme.colors.gray200;
});
var TimelineLabelContainer = _styledComponents["default"].button.withConfig({
  displayName: "_TimelineLabel__TimelineLabelContainer",
  componentId: "sc-17i94q7-2"
})(["background-color:transparent;color:", ";font-size:", ";cursor:pointer;pointer-events:all;margin-left:2px;padding:0 1px;outline:0;border:0;&::-moz-focus-inner{border:0;}&:focus{outline:none;}&[disabled]{color:", ";cursor:inherit;}&:not([disabled]):hover{color:", ";}"], function (props) {
  return props.theme.colors.purple400;
}, function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.colors.purple900;
});
var TimelineLabel = /*#__PURE__*/function (_React$Component) {
  function TimelineLabel() {
    var _this;
    _classCallCheck(this, TimelineLabel);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TimelineLabel, [].concat(args));
    _defineProperty(_this, "handleClick", function () {
      if (!_this.props.disabled) {
        _this.props.onClick(_this.props.timestamp);
      }
    });
    return _this;
  }
  _inherits(TimelineLabel, _React$Component);
  return _createClass(TimelineLabel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        periodFormat = _this$props.periodFormat,
        timestamp = _this$props.timestamp,
        position = _this$props.position,
        isBehind = _this$props.isBehind,
        disabled = _this$props.disabled;
      return /*#__PURE__*/_react["default"].createElement(TimelineLabelWrapper, {
        x: position
      }, !isBehind && /*#__PURE__*/_react["default"].createElement(TimelineLabelLine, null), /*#__PURE__*/_react["default"].createElement(TimelineLabelContainer, {
        onClick: this.handleClick,
        title: disabled ? '' : "Jump to ".concat(timestamp),
        disabled: disabled
      }, (0, _moment["default"])(timestamp).utc().format(periodFormat)));
    }
  }]);
}(_react["default"].Component);
TimelineLabel.propTypes = {
  disabled: _propTypes["default"].bool,
  isBehind: _propTypes["default"].bool,
  onClick: _propTypes["default"].func.isRequired,
  periodFormat: _propTypes["default"].string.isRequired,
  position: _propTypes["default"].number.isRequired,
  timestamp: _propTypes["default"].string.isRequired
};
TimelineLabel.defaultProps = {
  disabled: false,
  isBehind: false
};
var _default = exports["default"] = TimelineLabel;
//# sourceMappingURL=_TimelineLabel.js.map