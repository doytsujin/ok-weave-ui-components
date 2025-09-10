"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _last2 = _interopRequireDefault(require("lodash/last"));
var _flatMap2 = _interopRequireDefault(require("lodash/flatMap"));
var _round2 = _interopRequireDefault(require("lodash/round"));
var _range2 = _interopRequireDefault(require("lodash/range"));
var _find2 = _interopRequireDefault(require("lodash/find"));
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var AxesGridContainer = _styledComponents["default"].div.withConfig({
  displayName: "_AxesGrid__AxesGridContainer",
  componentId: "sc-edfa0h-0"
})([""]);
var AxisLine = _styledComponents["default"].div.attrs(function (_ref) {
  var _ref$width = _ref.width,
    width = _ref$width === void 0 ? 0 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 0 : _ref$height;
  return {
    style: {
      height: height,
      width: width
    }
  };
}).withConfig({
  displayName: "_AxesGrid__AxisLine",
  componentId: "sc-edfa0h-1"
})(["border-style:dashed;border-color:", ";position:absolute;left:0;top:0;"], function (props) {
  return props.theme.colors.gray200;
});
var HorizontalLine = (0, _styledComponents["default"])(AxisLine).withConfig({
  displayName: "_AxesGrid__HorizontalLine",
  componentId: "sc-edfa0h-2"
})(["border-width:1px 0 0 0;"]);
var VerticalLine = (0, _styledComponents["default"])(AxisLine).withConfig({
  displayName: "_AxesGrid__VerticalLine",
  componentId: "sc-edfa0h-3"
})(["border-width:0 0 0 1px;"]);
var TickContainer = _styledComponents["default"].div.attrs(function (_ref2) {
  var _ref2$left = _ref2.left,
    left = _ref2$left === void 0 ? 0 : _ref2$left,
    _ref2$top = _ref2.top,
    top = _ref2$top === void 0 ? 0 : _ref2$top;
  return {
    style: {
      left: left,
      top: top
    }
  };
}).withConfig({
  displayName: "_AxesGrid__TickContainer",
  componentId: "sc-edfa0h-4"
})(["position:absolute;"]);
var TickLabel = _styledComponents["default"].span.withConfig({
  displayName: "_AxesGrid__TickLabel",
  componentId: "sc-edfa0h-5"
})(["color:", ";font-size:", ";display:block;position:absolute;white-space:nowrap;"], function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.fontSizes.tiny;
});
var ValueTickLabel = (0, _styledComponents["default"])(TickLabel).withConfig({
  displayName: "_AxesGrid__ValueTickLabel",
  componentId: "sc-edfa0h-6"
})(["top:-8px;right:5px;"]);
var TimeTickLabel = (0, _styledComponents["default"])(TickLabel).withConfig({
  displayName: "_AxesGrid__TimeTickLabel",
  componentId: "sc-edfa0h-7"
})(["top:", "px;left:0;"], function (props) {
  return props.height + 5;
});
function formatTimeTick(timeSec) {
  var timestamp = (0, _moment["default"])(timeSec * 1000).utc();

  // Show month and day at every full day.
  var startOfDay = timestamp.clone().startOf('day');
  if (timestamp.diff(startOfDay) === 0) {
    return timestamp.format('MMM DD');
  }

  // Show hour and minute at every full minute.
  var startOfMinute = timestamp.clone().startOf('minute');
  if (timestamp.diff(startOfMinute) === 0) {
    return timestamp.format('HH:mm');
  }

  // Otherwise show only the seconds context.
  return timestamp.format("ss'");
}
function getTimeTicksBetween(startTimeSec, endTimeSec) {
  // 1s, 2s, 5s, 15s, 30s, 1min, 2min, 5min, 15min, 30min, 1h, 2h, 4h, 8h, 24h intervals
  var stepsSec = [1, 2, 5, 15, 30, 60, 120, 300, 900, 1800, 3600, 7200, 14400, 28800, 86400];

  // Tweak the step to show a reasonable number of
  // ticks, otherwise use the biggest unit possible.
  var stepSec = (0, _find2["default"])(stepsSec, function (s) {
    return (endTimeSec - startTimeSec) / s < 8;
  }) || (0, _last2["default"])(stepsSec);

  // Round up the time ticks to the time ticks step precision.
  var initialTickSec = Math.ceil(startTimeSec / stepSec) * stepSec;
  return (0, _range2["default"])(initialTickSec, endTimeSec, stepSec);
}
function getValueTicks(metricUnits, minValue, maxValue) {
  /* eslint-disable no-restricted-properties */
  var powersOf10 = (0, _range2["default"])(-6, 15).map(function (p) {
    return Math.pow(10, p);
  });
  var steps = metricUnits !== 'bytes' ? (0, _flatMap2["default"])(powersOf10, function (p) {
    return [p, 2 * p, 5 * p];
  }) : (0, _range2["default"])(50).map(function (p) {
    return Math.pow(2, p);
  });
  /* eslint-enable no-restricted-properties */

  var step = (0, _find2["default"])(steps, function (s) {
    return (maxValue - minValue) / s < 4;
  });

  // lodash `range()` doesn't include the end value in the returned array so we
  // add 1e-6 to move maxValue within the range
  return (0, _range2["default"])((0, _round2["default"])(minValue, 2), (0, _round2["default"])(maxValue, 2) + 1e-6, step);
}
var AxesGrid = /*#__PURE__*/function (_React$PureComponent) {
  function AxesGrid() {
    _classCallCheck(this, AxesGrid);
    return _callSuper(this, AxesGrid, arguments);
  }
  _inherits(AxesGrid, _React$PureComponent);
  return _createClass(AxesGrid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        chartWidth = _this$props.chartWidth,
        chartHeight = _this$props.chartHeight,
        timeScale = _this$props.timeScale,
        valueScale = _this$props.valueScale,
        metricUnits = _this$props.metricUnits,
        hasData = _this$props.hasData;
      if (!chartWidth || !chartHeight || !hasData) return null;
      var _valueScale$domain = valueScale.domain(),
        _valueScale$domain2 = _slicedToArray(_valueScale$domain, 2),
        yAxisMin = _valueScale$domain2[0],
        yAxisMax = _valueScale$domain2[1];
      var _timeScale$domain = timeScale.domain(),
        _timeScale$domain2 = _slicedToArray(_timeScale$domain, 2),
        startTimeSec = _timeScale$domain2[0],
        endTimeSec = _timeScale$domain2[1];
      var timeTicks = getTimeTicksBetween(startTimeSec, endTimeSec);
      var valueTicks = getValueTicks(metricUnits, yAxisMin, yAxisMax);
      var formatValue = this.props.valueFormatter(yAxisMax);
      return /*#__PURE__*/_react["default"].createElement(AxesGridContainer, null, valueTicks.map(function (value) {
        return /*#__PURE__*/_react["default"].createElement(TickContainer, {
          key: value,
          top: valueScale(value)
        }, /*#__PURE__*/_react["default"].createElement(HorizontalLine, {
          width: chartWidth
        }), /*#__PURE__*/_react["default"].createElement(ValueTickLabel, null, formatValue(value)));
      }), timeTicks.map(function (timeSec) {
        return /*#__PURE__*/_react["default"].createElement(TickContainer, {
          key: timeSec,
          left: timeScale(timeSec)
        }, /*#__PURE__*/_react["default"].createElement(VerticalLine, {
          height: chartHeight
        }), /*#__PURE__*/_react["default"].createElement(TimeTickLabel, {
          height: chartHeight
        }, formatTimeTick(timeSec)));
      }));
    }
  }]);
}(_react["default"].PureComponent);
AxesGrid.propTypes = {
  chartHeight: _propTypes["default"].number.isRequired,
  chartWidth: _propTypes["default"].number.isRequired,
  hasData: _propTypes["default"].bool.isRequired,
  metricUnits: _propTypes["default"].string.isRequired,
  timeScale: _propTypes["default"].func.isRequired,
  valueFormatter: _propTypes["default"].func.isRequired,
  valueScale: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = AxesGrid;
//# sourceMappingURL=_AxesGrid.js.map