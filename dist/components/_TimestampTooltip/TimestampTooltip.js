"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _TimestampTag = _interopRequireDefault(require("../TimestampTag"));
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
var TooltipContainer = _styledComponents["default"].div.attrs(function (_ref) {
  var offsetX = _ref.offsetX,
    offsetY = _ref.offsetY;
  return {
    // Using attrs prevents extensive styled components
    // generation every time the tooltip is repositioned.
    style: {
      left: offsetX,
      top: offsetY
    }
  };
}).withConfig({
  displayName: "TimestampTooltip__TooltipContainer",
  componentId: "sc-d66ad0-0"
})(["color:", ";background-color:", ";border:1px solid ", ";border-radius:", ";z-index:", ";padding:10px 15px;position:absolute;margin-top:20px;margin-left:10px;pointer-events:none;min-width:250px;max-width:500px;opacity:0.95;", ";"], function (props) {
  return props.theme.colors.purple900;
}, function (props) {
  return props.theme.colors.gray50;
}, function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.layers.tooltip;
}, function (props) {
  return !props.visible && 'opacity: 0;';
});
var TimestampWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TimestampTooltip__TimestampWrapper",
  componentId: "sc-d66ad0-1"
})(["margin-bottom:8px;"]);
var TimestampTooltip = /*#__PURE__*/function (_React$PureComponent) {
  function TimestampTooltip(props) {
    var _this;
    _classCallCheck(this, TimestampTooltip);
    _this = _callSuper(this, TimestampTooltip, [props]);
    _defineProperty(_this, "saveTooltipRef", function (ref) {
      _this.tooltipRef = ref;
    });
    _this.state = {
      prerendered: false
    };
    return _this;
  }
  _inherits(TimestampTooltip, _React$PureComponent);
  return _createClass(TimestampTooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      // HACK: We wait for the first render to finish to get the accurate width
      // of the tooltip for calculating its position, keeping the tooltip invisible
      // through the first render cycle. After the first render has finished,
      // we set a 'prerender' flag to true force second render which actually
      // displays the tooltip. This is to prevent tooltip flickering before
      // we get its proper size.
      setTimeout(function () {
        _this2.setState({
          prerendered: true
        });
      }, 0);
    }
  }, {
    key: "getTooltipBoundingRect",
    value: function getTooltipBoundingRect() {
      return this.tooltipRef ? this.tooltipRef.getBoundingClientRect() : {
        height: 0,
        left: 0,
        top: 0,
        width: 0
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getTooltipBound = this.getTooltipBoundingRect(),
        width = _this$getTooltipBound.width;
      var _this$props = this.props,
        offsetX = _this$props.offsetX,
        offsetY = _this$props.offsetY,
        timestamp = _this$props.timestamp,
        containerWidth = _this$props.containerWidth;
      var clampedX = Math.min(offsetX, containerWidth - width - 10);
      return /*#__PURE__*/_react["default"].createElement(TooltipContainer, {
        offsetX: clampedX,
        offsetY: offsetY,
        visible: this.state.prerendered,
        ref: this.saveTooltipRef
      }, /*#__PURE__*/_react["default"].createElement(TimestampWrapper, null, /*#__PURE__*/_react["default"].createElement(_TimestampTag["default"], {
        timestamp: timestamp
      })), this.props.children);
    }
  }]);
}(_react["default"].PureComponent);
TimestampTooltip.propTypes = {
  containerWidth: _propTypes["default"].number.isRequired,
  offsetX: _propTypes["default"].number,
  offsetY: _propTypes["default"].number,
  timestamp: _propTypes["default"].string.isRequired
};
TimestampTooltip.defaultProps = {
  offsetX: 0,
  offsetY: 0
};
var _default = exports["default"] = TimestampTooltip;
//# sourceMappingURL=TimestampTooltip.js.map