"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
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
var LiveModeToggleWrapper = _styledComponents["default"].div.withConfig({
  displayName: "_LiveModeToggle__LiveModeToggleWrapper",
  componentId: "sc-1kih1yb-0"
})(["display:flex;"]);
var ToggleButton = _styledComponents["default"].button.withConfig({
  displayName: "_LiveModeToggle__ToggleButton",
  componentId: "sc-1kih1yb-1"
})(["border:0;background-color:transparent;border-right:1px solid ", ";color:", ";pointer-events:all;outline:0;cursor:pointer;&::-moz-focus-inner{border:0;}&:focus{outline:none;}", ";"], function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.purple900;
}, function (props) {
  return props.pressed && "\n    box-shadow: inset 1px 1px 6px ".concat(props.theme.colors.gray200, ";\n    color: ").concat(props.theme.colors.gray600, ";\n    opacity: 0.75;\n  ");
});
var LiveModeToggle = /*#__PURE__*/function (_React$PureComponent) {
  function LiveModeToggle(props, context) {
    var _this;
    _classCallCheck(this, LiveModeToggle);
    _this = _callSuper(this, LiveModeToggle, [props, context]);
    _this.state = {
      showingLive: props.showingLive
    };
    _this.handleToggle = _this.handleToggle.bind(_this);
    return _this;
  }
  _inherits(LiveModeToggle, _React$PureComponent);
  return _createClass(LiveModeToggle, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var showingLive = nextProps.showingLive;
      if (showingLive !== this.props.showingLive) {
        this.setState({
          showingLive: showingLive
        });
      }
    }
  }, {
    key: "handleToggle",
    value: function handleToggle() {
      var showingLive = !this.state.showingLive;
      this.setState({
        showingLive: showingLive
      });
      this.props.onToggle(showingLive);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(LiveModeToggleWrapper, null, /*#__PURE__*/_react["default"].createElement(ToggleButton, {
        onClick: this.handleToggle,
        pressed: this.state.showingLive
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-sm fa-fw fa-play"
      })), /*#__PURE__*/_react["default"].createElement(ToggleButton, {
        onClick: this.handleToggle,
        pressed: !this.state.showingLive
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-sm fa-fw fa-pause"
      })));
    }
  }]);
}(_react["default"].PureComponent);
LiveModeToggle.propTypes = {
  onToggle: _propTypes["default"].func.isRequired,
  showingLive: _propTypes["default"].bool.isRequired
};
var _default = exports["default"] = LiveModeToggle;
//# sourceMappingURL=_LiveModeToggle.js.map