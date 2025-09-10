"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactInputAutosize = _interopRequireDefault(require("react-input-autosize"));
var _selectors = require("../../theme/selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var TimestampInputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "_TimestampInput__TimestampInputWrapper",
  componentId: "sc-hn05hk-0"
})(["font-size:", ";align-items:baseline;padding:", " ", ";pointer-events:all;opacity:0.8;display:flex;"], function (props) {
  return props.theme.fontSizes.small;
}, (0, _selectors.spacing)('xxs'), (0, _selectors.spacing)('xs'));
var TimestampInputContainer = (0, _styledComponents["default"])(_reactInputAutosize["default"]).withConfig({
  displayName: "_TimestampInput__TimestampInputContainer",
  componentId: "sc-hn05hk-1"
})(["input{font-size:", ";font-family:", ";background-color:transparent;margin-right:", ";text-align:left;min-width:195px;max-width:300px;border:0;outline:0;}div{overflow:hidden !important;}"], function (props) {
  return props.theme.fontSizes.normal;
}, function (props) {
  return props.theme.fontFamilies.monospace;
}, (0, _selectors.spacing)('xxs'));
var TimestampInput = /*#__PURE__*/function (_React$PureComponent) {
  function TimestampInput(props, context) {
    var _this;
    _classCallCheck(this, TimestampInput);
    _this = _callSuper(this, TimestampInput, [props, context]);
    _this.state = {
      timestamp: props.timestamp
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.submit = _this.submit.bind(_this);
    return _this;
  }
  _inherits(TimestampInput, _React$PureComponent);
  return _createClass(TimestampInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var timestamp = nextProps.timestamp;
      if (timestamp !== this.props.timestamp) {
        this.setState({
          timestamp: timestamp
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(ev) {
      var timestamp = ev.target.value;
      this.setState({
        timestamp: timestamp
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(ev) {
      if (ev.keyCode === 13) {
        this.submit();
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      var timestamp = this.state.timestamp;
      if ((0, _moment["default"])(timestamp).isValid()) {
        this.props.onChangeTimestamp(timestamp);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(TimestampInputWrapper, null, /*#__PURE__*/_react["default"].createElement(TimestampInputContainer, {
        value: this.state.timestamp,
        onChange: this.handleChange,
        onBlur: this.submit,
        onKeyDown: this.handleKeyDown,
        disabled: this.props.disabled
      }), ' ', "UTC");
    }
  }]);
}(_react["default"].PureComponent);
TimestampInput.propTypes = {
  disabled: _propTypes["default"].bool,
  onChangeTimestamp: _propTypes["default"].func.isRequired,
  timestamp: _propTypes["default"].string.isRequired
};
TimestampInput.defaultProps = {
  disabled: false
};
var _default = exports["default"] = TimestampInput;
//# sourceMappingURL=_TimestampInput.js.map