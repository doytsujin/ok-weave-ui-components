"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _isNumber2 = _interopRequireDefault(require("lodash/isNumber"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _dom = require("../../../utils/dom");
var _HighlightBorder = _interopRequireDefault(require("./elements/_HighlightBorder"));
var _HighlightShadow = _interopRequireDefault(require("./elements/_HighlightShadow"));
var _NodeBackground = _interopRequireDefault(require("./elements/_NodeBackground"));
var _NodeMetricFill = _interopRequireDefault(require("./elements/_NodeMetricFill"));
var _NodeShadow = _interopRequireDefault(require("./elements/_NodeShadow"));
var _NodeBorder = _interopRequireDefault(require("./elements/_NodeBorder"));
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
function getClipPathDefinition(clipId, height, radius) {
  var barHeight = 1 - 2 * height; // in the interval [-1, 1]
  return /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: clipId,
    transform: "scale(".concat(2 * radius, ")")
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: 2,
    height: 2,
    x: -1,
    y: barHeight
  })));
}
var NodeAnchor = _styledComponents["default"].circle.attrs({
  r: 0.1,
  strokeWidth: 0.005
}).withConfig({
  displayName: "_BaseShape__NodeAnchor",
  componentId: "sc-1l8ddg7-0"
})(["fill:", ";stroke:", ";"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
}, function (props) {
  return props.theme.colors.white;
});
var MetricText = _styledComponents["default"].text.attrs({
  dominantBaseline: 'middle',
  textAnchor: 'middle',
  transform: 'scale(0.015)'
}).withConfig({
  displayName: "_BaseShape__MetricText",
  componentId: "sc-1l8ddg7-1"
})(["fill:", ";"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
});
var BaseShape = /*#__PURE__*/function (_React$Component) {
  function BaseShape() {
    _classCallCheck(this, BaseShape);
    return _callSuper(this, BaseShape, arguments);
  }
  _inherits(BaseShape, _React$Component);
  return _createClass(BaseShape, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        renderTemplate = _this$props.renderTemplate,
        id = _this$props.id,
        highlighted = _this$props.highlighted,
        color = _this$props.color,
        metricColor = _this$props.metricColor,
        metricFormattedValue = _this$props.metricFormattedValue,
        metricNumericValue = _this$props.metricNumericValue,
        contrastMode = _this$props.contrastMode,
        size = _this$props.size;
      var clipId = (0, _dom.encodeIdAttribute)("metric-clip-".concat(id));
      var hasMetric = !(0, _isEmpty2["default"])(metricFormattedValue) && (0, _isNumber2["default"])(metricNumericValue);
      return /*#__PURE__*/_react["default"].createElement("g", {
        transform: "scale(".concat(size, ")")
      }, highlighted && (0, _HighlightBorder["default"])(renderTemplate, contrastMode), highlighted && (0, _HighlightShadow["default"])(renderTemplate, contrastMode), (0, _NodeBackground["default"])(renderTemplate, contrastMode), hasMetric && getClipPathDefinition(clipId, metricNumericValue, 0.48), hasMetric && (0, _NodeMetricFill["default"])(renderTemplate, {
        clipId: clipId,
        metricColor: metricColor
      }), (0, _NodeShadow["default"])(renderTemplate, contrastMode), (0, _NodeBorder["default"])(renderTemplate, contrastMode, {
        color: color,
        hasMetric: hasMetric
      }), hasMetric && highlighted ? /*#__PURE__*/_react["default"].createElement(MetricText, {
        contrastMode: contrastMode
      }, metricFormattedValue) : /*#__PURE__*/_react["default"].createElement(NodeAnchor, {
        contrastMode: contrastMode
      }));
    }
  }]);
}(_react["default"].Component);
BaseShape.propTypes = {
  color: _propTypes["default"].string.isRequired,
  highlighted: _propTypes["default"].bool.isRequired,
  id: _propTypes["default"].string.isRequired,
  metricColor: _propTypes["default"].string.isRequired,
  metricFormattedValue: _propTypes["default"].string.isRequired,
  metricNumericValue: _propTypes["default"].number,
  renderTemplate: _propTypes["default"].func.isRequired,
  size: _propTypes["default"].number.isRequired
};
BaseShape.defaultProps = {
  metricNumericValue: null
};
var _default = exports["default"] = BaseShape;
//# sourceMappingURL=_BaseShape.js.map