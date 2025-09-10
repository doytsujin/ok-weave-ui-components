"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MAX_TICK_SPACING_PX = void 0;
var _clamp2 = _interopRequireDefault(require("lodash/clamp"));
var _last2 = _interopRequireDefault(require("lodash/last"));
var _map2 = _interopRequireDefault(require("lodash/map"));
var _find2 = _interopRequireDefault(require("lodash/find"));
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _timeline = require("../../utils/timeline");
var _TimelineLabel = _interopRequireDefault(require("./_TimelineLabel"));
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
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MAX_TICK_SPACING_PX = exports.MAX_TICK_SPACING_PX = 415;
var MAX_TICK_ROWS = 3;
var MIN_TICK_SPACING_PX = 70;
var TICKS_ROW_SPACING = 16;
var FADE_OUT_FACTOR = 1.4;
var TICK_SETTINGS_PER_PERIOD = {
  day: {
    childPeriod: 'minute',
    format: 'Do',
    parentPeriod: 'month',
    periodIntervals: [1, 7] // 1 day, 1 week
  },
  minute: {
    format: 'HH:mm',
    parentPeriod: 'day',
    periodIntervals: [1, 5, 15, 60, 180, 360] // 1min, 5min, 15min, 1h, 3h, 6h
  },
  month: {
    childPeriod: 'day',
    format: 'MMMM',
    parentPeriod: 'year',
    periodIntervals: [1, 3] // 1 month, 1 quarter
  },
  year: {
    childPeriod: 'month',
    format: 'YYYY',
    periodIntervals: [1] // 1 year
  }
};

// A linear mapping [a, b] -> [0, 1] (maps value x=a into 0 and x=b into 1).
function linearGradientValue(x, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
    a = _ref2[0],
    b = _ref2[1];
  return (x - a) / (b - a);
}
var TimelineLabels = _styledComponents["default"].div.attrs(function (_ref3) {
  var y = _ref3.y,
    opacity = _ref3.opacity;
  return {
    style: {
      opacity: opacity,
      transform: "translateY(".concat(y, "px)")
    }
  };
}).withConfig({
  displayName: "_TimelinePeriodLabels__TimelineLabels",
  componentId: "sc-ezkbh-0"
})([""]);

// TODO: Tidy up this component.
var TimelinePeriodLabels = /*#__PURE__*/function (_React$PureComponent) {
  function TimelinePeriodLabels() {
    _classCallCheck(this, TimelinePeriodLabels);
    return _callSuper(this, TimelinePeriodLabels, arguments);
  }
  _inherits(TimelinePeriodLabels, _React$PureComponent);
  return _createClass(TimelinePeriodLabels, [{
    key: "findOptimalDurationFit",
    value: function findOptimalDurationFit(period, _ref4) {
      var durationMsPerPixel = _ref4.durationMsPerPixel;
      var minimalDurationMs = durationMsPerPixel * 1.1 * MIN_TICK_SPACING_PX;
      return (0, _find2["default"])(TICK_SETTINGS_PER_PERIOD[period].periodIntervals, function (p) {
        return _moment["default"].duration(p, period).asMilliseconds() >= minimalDurationMs;
      });
    }
  }, {
    key: "getTicksForPeriod",
    value: function getTicksForPeriod(period, timelineTransform) {
      // First find the optimal duration between the ticks - if no satisfactory
      // duration could be found, don't render any ticks for the given period.
      var parentPeriod = TICK_SETTINGS_PER_PERIOD[period].parentPeriod;
      var periodInterval = this.findOptimalDurationFit(period, timelineTransform);
      if (!periodInterval) return [];

      // Get the boundary values for the displayed part of the timeline.
      var halfWidth = this.props.width / 2;
      var timeScale = (0, _timeline.getTimeScale)(timelineTransform);
      var momentStart = (0, _moment["default"])(timeScale.invert(-halfWidth)).utc();
      var momentEnd = (0, _moment["default"])(timeScale.invert(halfWidth)).utc();

      // Start counting the timestamps from the most recent timestamp that is not shown
      // on screen. The values are always rounded up to the timestamps of the next bigger
      // period (e.g. for days it would be months, for months it would be years).
      var momentTimestamp = (0, _moment["default"])(momentStart).utc().startOf(parentPeriod || period);
      while (momentTimestamp.isBefore(momentStart)) {
        momentTimestamp = (0, _moment["default"])(momentTimestamp).add(periodInterval, period);
      }
      momentTimestamp = (0, _moment["default"])(momentTimestamp).subtract(periodInterval, period);

      // Make that hidden timestamp the first one in the list, but position
      // it inside the visible range with a prepended arrow to the past.
      var ticks = [{
        isBehind: true,
        position: -halfWidth,
        timestamp: (0, _timeline.formattedTimestamp)(momentTimestamp)
      }];

      // Continue adding ticks till the end of the visible range.
      do {
        // If the new timestamp enters into a new bigger period, we round it down to the
        // beginning of that period. E.g. instead of going [Jan 22nd, Jan 29th, Feb 5th],
        // we output [Jan 22nd, Jan 29th, Feb 1st]. Right now this case only happens between
        // days and months, but in theory it could happen whenever bigger periods are not
        // divisible by the duration we are using as a step between the ticks.
        var newTimestamp = (0, _moment["default"])(momentTimestamp).add(periodInterval, period);
        if (parentPeriod && newTimestamp.get(parentPeriod) !== momentTimestamp.get(parentPeriod)) {
          newTimestamp = (0, _moment["default"])(newTimestamp).utc().startOf(parentPeriod);
        }
        momentTimestamp = newTimestamp;

        // If the new tick is too close to the previous one, drop that previous tick.
        var position = timeScale(momentTimestamp);
        var previousPosition = (0, _last2["default"])(ticks) && (0, _last2["default"])(ticks).position;
        if (position - previousPosition < MIN_TICK_SPACING_PX) {
          ticks.pop();
        }
        ticks.push({
          position: position,
          timestamp: (0, _timeline.formattedTimestamp)(momentTimestamp)
        });
      } while (momentTimestamp.isBefore(momentEnd));
      return ticks;
    }
  }, {
    key: "getVerticalShiftForPeriod",
    value: function getVerticalShiftForPeriod(period, _ref5) {
      var durationMsPerPixel = _ref5.durationMsPerPixel;
      var _TICK_SETTINGS_PER_PE = TICK_SETTINGS_PER_PERIOD[period],
        childPeriod = _TICK_SETTINGS_PER_PE.childPeriod,
        parentPeriod = _TICK_SETTINGS_PER_PE.parentPeriod;
      var shift = 1;
      if (parentPeriod) {
        var durationMultiplier = 1 / MAX_TICK_SPACING_PX;
        var parentInterval = TICK_SETTINGS_PER_PERIOD[parentPeriod].periodIntervals[0];
        var parentIntervalMs = _moment["default"].duration(parentInterval, parentPeriod).asMilliseconds();
        var fadedInDurationMs = parentIntervalMs * durationMultiplier;
        var fadedOutDurationMs = fadedInDurationMs * FADE_OUT_FACTOR;
        var transitionFactor = Math.log(fadedOutDurationMs) - Math.log(durationMsPerPixel);
        var transitionLength = Math.log(fadedOutDurationMs) - Math.log(fadedInDurationMs);
        shift = (0, _clamp2["default"])(transitionFactor / transitionLength, 0, 1);
      }
      if (childPeriod) {
        shift += this.getVerticalShiftForPeriod(childPeriod, {
          durationMsPerPixel: durationMsPerPixel
        });
      }
      return shift;
    }
  }, {
    key: "isOutsideOfClickableRange",
    value: function isOutsideOfClickableRange(timestamp) {
      var _this$props = this.props,
        clickableStartAt = _this$props.clickableStartAt,
        clickableEndAt = _this$props.clickableEndAt;
      var beforeClickableStartAt = clickableStartAt && clickableStartAt > timestamp;
      var afterClickableEndtAt = clickableEndAt && clickableEndAt < timestamp;
      return beforeClickableStartAt || afterClickableEndtAt;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var period = this.props.period;
      var periodFormat = TICK_SETTINGS_PER_PERIOD[period].format;
      var ticks = this.getTicksForPeriod(period, this.props);
      var ticksRow = MAX_TICK_ROWS - this.getVerticalShiftForPeriod(period, this.props);

      // Ticks quickly fade in from the bottom and then slowly start
      // fading out towards the top until they are pushed out of canvas.
      var focusedRow = MAX_TICK_ROWS - 1;
      var opacity = ticksRow > focusedRow ? linearGradientValue(ticksRow, [MAX_TICK_ROWS, focusedRow]) : linearGradientValue(ticksRow, [-2, focusedRow]);
      var isBarelyVisible = opacity < 0.4;
      return /*#__PURE__*/_react["default"].createElement(TimelineLabels, {
        className: period,
        opacity: opacity,
        y: ticksRow * TICKS_ROW_SPACING
      }, (0, _map2["default"])(ticks, function (_ref6) {
        var timestamp = _ref6.timestamp,
          position = _ref6.position,
          isBehind = _ref6.isBehind;
        return /*#__PURE__*/_react["default"].createElement(_TimelineLabel["default"], {
          key: timestamp,
          timestamp: timestamp,
          position: position,
          isBehind: isBehind,
          periodFormat: periodFormat,
          disabled: isBarelyVisible || _this.isOutsideOfClickableRange(timestamp),
          onClick: _this.props.onClick
        });
      }));
    }
  }]);
}(_react["default"].PureComponent);
TimelinePeriodLabels.propTypes = {
  clickableEndAt: _propTypes["default"].string.isRequired,
  clickableStartAt: _propTypes["default"].string.isRequired,
  durationMsPerPixel: _propTypes["default"].number.isRequired,
  focusedTimestamp: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  period: _propTypes["default"].string.isRequired,
  width: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = TimelinePeriodLabels;
//# sourceMappingURL=_TimelinePeriodLabels.js.map