"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _minBy2 = _interopRequireDefault(require("lodash/minBy"));
var _sortedIndex2 = _interopRequireDefault(require("lodash/sortedIndex"));
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _d3Shape = require("d3-shape");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
function getDatapointAtTimestamp(series, timestampSec) {
  var timestamps = series.datapoints.map(function (d) {
    return d.timestampSec;
  });
  var index = (0, _sortedIndex2["default"])(timestamps, timestampSec);
  return series.datapoints[index];
}
var Canvas = _styledComponents["default"].svg.withConfig({
  displayName: "_Chart__Canvas",
  componentId: "sc-1ckw1eu-0"
})(["cursor:crosshair;position:absolute;"]);
var SeriesLineChart = _styledComponents["default"].path.attrs({
  fill: 'none',
  strokeWidth: 2
}).withConfig({
  displayName: "_Chart__SeriesLineChart",
  componentId: "sc-1ckw1eu-1"
})(["opacity:", ";pointer-events:none;"], function (props) {
  return props.faded ? 0.1 : 1;
});
var SeriesAreaChart = _styledComponents["default"].path.attrs(function (_ref) {
  var fill = _ref.fill,
    focused = _ref.focused;
  return {
    stroke: fill,
    // Use strokeWidth only on focused area graphs to make sure ultra-thin ones
    // still get visible, but don't use it when multiple series are visible so
    // that it doesn't look like it's other series' border.
    strokeWidth: focused ? 1 : 0
  };
}).withConfig({
  displayName: "_Chart__SeriesAreaChart",
  componentId: "sc-1ckw1eu-2"
})(["opacity:", ";pointer-events:none;"], function (props) {
  return props.faded ? 0.05 : 0.75;
});
var Chart = /*#__PURE__*/function (_React$PureComponent) {
  function Chart() {
    var _this;
    _classCallCheck(this, Chart);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Chart, [].concat(args));
    _defineProperty(_this, "handleResize", (0, _debounce2["default"])(function () {
      var _this$getSvgBoundingR = _this.getSvgBoundingRect(),
        width = _this$getSvgBoundingR.width,
        height = _this$getSvgBoundingR.height;
      _this.props.onChartResize({
        chartHeight: height,
        chartWidth: width
      });
    }, 50));
    _defineProperty(_this, "handleGraphMouseMove", function (ev) {
      var _this$props = _this.props,
        timeScale = _this$props.timeScale,
        valueScale = _this$props.valueScale,
        timestampQuantizer = _this$props.timestampQuantizer;
      var _this$getSvgBoundingR2 = _this.getSvgBoundingRect(),
        left = _this$getSvgBoundingR2.left,
        top = _this$getSvgBoundingR2.top;
      var cursorXOffset = ev.clientX - left;
      var cursorYOffset = ev.clientY - top;
      var cursorValue = valueScale.invert(cursorYOffset);
      var cursorTimestampSec = timeScale.invert(cursorXOffset);
      var hoverTimestampSec = timestampQuantizer(cursorTimestampSec);

      // Build an array of hover points by evaluating the multiseries at the cursor x-coord.
      var hoverPoints = _this.props.multiSeries.map(function (series) {
        var datapoint = getDatapointAtTimestamp(series, hoverTimestampSec);
        return {
          color: series.color,
          graphValue: datapoint.offset + datapoint.value,
          hoverName: series.hoverName,
          key: series.key,
          value: datapoint.value
        };
      });
      var focusedSeries = {};
      if (_this.props.showStacked) {
        // If the graph is stacked, focus the closest series above the,
        // cursor, as that one's area is hovered by the mouse cursor.
        var isSeriesAbove = function isSeriesAbove(s) {
          return s.graphValue >= cursorValue;
        };
        var hoverPointsAboveCursor = hoverPoints.filter(isSeriesAbove);
        focusedSeries = (0, _minBy2["default"])(hoverPointsAboveCursor, 'graphValue') || {};
      } else {
        // Otherwise, in a line graph focus the series with the nearest value.
        var distanceFromCursor = function distanceFromCursor(s) {
          return Math.abs(s.graphValue - cursorValue);
        };
        focusedSeries = (0, _minBy2["default"])(hoverPoints, distanceFromCursor) || {};
      }

      // Update the hover points with focus data.
      hoverPoints = hoverPoints.map(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          focused: focusedSeries.key === s.key
        });
      });
      _this.props.onHoverUpdate({
        hoverPoints: hoverPoints,
        hoverTimestampSec: hoverTimestampSec,
        hoverX: timeScale(hoverTimestampSec),
        hoverY: cursorYOffset
      });
    });
    _defineProperty(_this, "handleGraphMouseLeave", function () {
      _this.props.onHoverUpdate({
        hoverPoints: null,
        hoverTimestampSec: null,
        hoverX: null,
        hoverY: null
      });
    });
    _defineProperty(_this, "saveSvgRef", function (ref) {
      _this.svgRef = ref;
    });
    return _this;
  }
  _inherits(Chart, _React$PureComponent);
  return _createClass(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    }
  }, {
    key: "getSvgBoundingRect",
    value: function getSvgBoundingRect() {
      var defaultRect = {
        height: 0,
        left: 0,
        top: 0,
        width: 0
      };
      return this.svgRef ? this.svgRef.getBoundingClientRect() : defaultRect;
    }
  }, {
    key: "isFadedSeries",
    value: function isFadedSeries(series) {
      var _this$props2 = this.props,
        hoveredLegendKey = _this$props2.hoveredLegendKey,
        selectedLegendKeys = _this$props2.selectedLegendKeys;
      // Show series as faded if no series is selected and some other series is hovered.
      return selectedLegendKeys.length === 0 && hoveredLegendKey && hoveredLegendKey !== series.key;
    }
  }, {
    key: "isFocusedSeries",
    value: function isFocusedSeries(series) {
      var _this$props3 = this.props,
        hoveredLegendKey = _this$props3.hoveredLegendKey,
        selectedLegendKeys = _this$props3.selectedLegendKeys;
      // Show series as focused if it's selected or hovered.
      return hoveredLegendKey === series.key || selectedLegendKeys.includes(series.key);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props4 = this.props,
        multiSeries = _this$props4.multiSeries,
        timeScale = _this$props4.timeScale,
        valueScale = _this$props4.valueScale;
      var lineFunction = (0, _d3Shape.line)().defined(function (d) {
        return d.value !== null;
      }).x(function (d) {
        return timeScale(d.timestampSec);
      }).y(function (d) {
        return valueScale(d.value);
      });
      var areaFunction = (0, _d3Shape.area)().defined(function (d) {
        return d.value !== null;
      }).x(function (d) {
        return timeScale(d.timestampSec);
      }).y1(function (d) {
        return valueScale(d.offset + d.value);
      }).y0(function (d) {
        return valueScale(d.offset);
      });
      return /*#__PURE__*/_react["default"].createElement(Canvas, {
        width: "100%",
        height: "100%",
        ref: this.saveSvgRef,
        onMouseMove: this.handleGraphMouseMove,
        onMouseLeave: this.handleGraphMouseLeave
      }, multiSeries.map(function (series) {
        return _this2.props.showStacked ? /*#__PURE__*/_react["default"].createElement(SeriesAreaChart, {
          key: series.key,
          faded: _this2.isFadedSeries(series),
          focused: _this2.isFocusedSeries(series),
          d: areaFunction(series.datapoints),
          fill: series.color
        }) : /*#__PURE__*/_react["default"].createElement(SeriesLineChart, {
          key: series.key,
          faded: _this2.isFadedSeries(series),
          d: lineFunction(series.datapoints),
          stroke: series.color
        });
      }));
    }
  }]);
}(_react["default"].PureComponent);
Chart.propTypes = {
  hoveredLegendKey: _propTypes["default"].string,
  multiSeries: _propTypes["default"].array.isRequired,
  onChartResize: _propTypes["default"].func.isRequired,
  onHoverUpdate: _propTypes["default"].func.isRequired,
  selectedLegendKeys: _propTypes["default"].array.isRequired,
  showStacked: _propTypes["default"].bool.isRequired,
  timeScale: _propTypes["default"].func.isRequired,
  timestampQuantizer: _propTypes["default"].func.isRequired,
  valueScale: _propTypes["default"].func.isRequired
};
Chart.defaultProps = {
  hoveredLegendKey: ''
};
var _default = exports["default"] = Chart;
//# sourceMappingURL=_Chart.js.map