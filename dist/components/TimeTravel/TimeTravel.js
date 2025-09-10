"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _debounce2 = _interopRequireDefault(require("lodash/debounce"));
var _find2 = _interopRequireDefault(require("lodash/find"));
var _clamp2 = _interopRequireDefault(require("lodash/clamp"));
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _selectors = require("../../theme/selectors");
var _timeline = require("../../utils/timeline");
var _TimelinePeriodLabels = require("./_TimelinePeriodLabels");
var _Timeline = _interopRequireDefault(require("./_Timeline"));
var _TimelinePanButton = _interopRequireDefault(require("./_TimelinePanButton"));
var _LiveModeToggle = _interopRequireDefault(require("./_LiveModeToggle"));
var _TimestampInput = _interopRequireDefault(require("./_TimestampInput"));
var _RangeSelector = _interopRequireDefault(require("./_RangeSelector"));
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
// Initial selected range size.
var INITIAL_RANGE_WIDTH_PX = 200;
var TimeTravelContainer = _styledComponents["default"].div.withConfig({
  displayName: "TimeTravel__TimeTravelContainer",
  componentId: "sc-fc43ye-0"
})(["position:relative;"]);
var TimelineBar = _styledComponents["default"].div.withConfig({
  displayName: "TimeTravel__TimelineBar",
  componentId: "sc-fc43ye-1"
})(["align-items:center;display:flex;"]);
var TimeControlsWrapper = _styledComponents["default"].div.withConfig({
  displayName: "TimeTravel__TimeControlsWrapper",
  componentId: "sc-fc43ye-2"
})(["display:flex;justify-content:center;margin:", " 0 ", ";"], (0, _selectors.spacing)('xs'), (0, _selectors.spacing)('medium'));
var TimeControlsContainer = _styledComponents["default"].div.withConfig({
  displayName: "TimeTravel__TimeControlsContainer",
  componentId: "sc-fc43ye-3"
})(["border:1px solid ", ";box-shadow:0 0 2px ", ";background-color:", ";border-radius:", ";display:flex;"], function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.borderRadius.soft;
});
function availableTimelineDurationMs(earliestTimestamp) {
  var earliestMomentTimestamp = (0, _moment["default"])(earliestTimestamp);
  var currentMomentTimestamp = (0, _moment["default"])((0, _timeline.formattedTimestamp)());
  return currentMomentTimestamp.diff(earliestMomentTimestamp);
}

// The most granular zoom is 2px per second, probably we don't want any more granular than that.
function minDurationMsPerTimelinePx() {
  return _moment["default"].duration(500, 'milliseconds').asMilliseconds();
}

// Maximum level we can zoom out is such that the available range takes 400px. The 3 days
// per pixel upper bound on that scale is to prevent ugly rendering in extreme cases.
function maxDurationMsPerTimelinePx(earliestTimestamp) {
  var durationMsLowerBound = minDurationMsPerTimelinePx();
  var durationMsUpperBound = _moment["default"].duration(3, 'days').asMilliseconds();
  var durationMs = availableTimelineDurationMs(earliestTimestamp) / 400.0;
  return (0, _clamp2["default"])(durationMs, durationMsLowerBound, durationMsUpperBound);
}

// The initial zoom level is set to be 10% of the max zoom out level capped at 1px per minute,
// with the assumption that if we have a long recorded history, we're in most cases by
// default going to be interested in what happened in last couple of hours or so.
function initialDurationMsPerTimelinePx(earliestTimestamp) {
  var durationMsLowerBound = minDurationMsPerTimelinePx();
  var durationMsUpperBound = _moment["default"].duration(1, 'minute').asMilliseconds();
  var durationMs = maxDurationMsPerTimelinePx(earliestTimestamp) * 0.1;
  return (0, _clamp2["default"])(durationMs, durationMsLowerBound, durationMsUpperBound);
}

/**
 * A visual component used for time travelling between different states in the system.
 *
 * To make it behave correctly, it requires a `timestamp` (can initially be `null`)
 * which gets updated with `onChangeTimestamp`.
 *
 * Optional features include:
 *   * Auto-update live mode on top of the default paused mode
 *   * Range selection instead of the default point-in-time selection
 *
 * ```javascript
 *  import React from 'react';
 *  import moment from 'moment';
 *
 *  import { TimeTravel } from 'weaveworks-ui-components';
 *
 *  export default class TimeTravelExample extends React.Component {
 *    constructor() {
 *      super();
 *
 *      this.state = {
 *        timestamp: moment().format(),
 *      };
 *
 *      this.handleChangeTimestamp = this.handleChangeTimestamp.bind(this);
 *    }
 *
 *    handleChangeTimestamp(timestamp) {
 *      this.setState({ timestamp });
 *    }
 *
 *    handleTimestampInputEdit() {
 *      // track timestamp input edit...
 *    }
 *
 *    handleTimelinePanButtonClick() {
 *      // track timeline pan button click...
 *    }
 *
 *    handleTimelineLabelClick() {
 *      // track timeline label click...
 *    }
 *
 *    handleTimelinePan() {
 *      // track timeline pan...
 *    }
 *
 *    // zoomedPeriod is one of: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds']
 *    handleTimelineZoom(zoomedPeriod) {
 *      // track timeline zoom...
 *    }
 *
 *    render() {
 *      return (
 *        <TimeTravel
 *          timestamp={this.state.timestamp}
 *          onChangeTimestamp={this.handleChangeTimestamp}
 *          onTimestampInputEdit={this.handleTimestampInputEdit}
 *          onTimelinePanButtonClick={this.handleTimelinePanButtonClick}
 *          onTimelineLabelClick={this.handleTimelineLabelClick}
 *          onTimelineZoom={this.handleTimelineZoom}
 *          onTimelinePan={this.handleTimelinePan}
 *        />
 *      );
 *    }
 *  }
 * ```
 *
 */
var TimeTravel = /*#__PURE__*/function (_React$PureComponent) {
  function TimeTravel(props, context) {
    var _this;
    _classCallCheck(this, TimeTravel);
    _this = _callSuper(this, TimeTravel, [props, context]);
    _defineProperty(_this, "handleRangeChange", function (rangeMs) {
      _this.setState({
        rangeMs: rangeMs
      });
      _this.adjustZoomToRange(rangeMs);
      _this.props.onChangeRange(rangeMs);
    });
    _defineProperty(_this, "handleInputChange", function (timestamp) {
      _this.setFocusedTimestamp(timestamp);
      _this.props.onTimestampInputEdit();
    });
    _defineProperty(_this, "handleTimelineJump", function (timestamp) {
      // Order of callbacks is important.
      _this.switchToPausedMode();
      _this.setFocusedTimestamp(timestamp);
      _this.props.onTimelineLabelClick();
    });
    _defineProperty(_this, "handleTimelinePanButtonClick", function (timestamp) {
      if (_this.shouldStickySwitchToLiveMode({
        focusedTimestamp: timestamp
      })) {
        // Order of callbacks is important.
        _this.setFocusedTimestamp(_this.state.timestampNow);
        _this.switchToLiveMode();
      } else {
        // Order of callbacks is important.
        _this.switchToPausedMode();
        _this.setFocusedTimestamp(timestamp);
      }
      _this.props.onTimelinePanButtonClick();
    });
    _defineProperty(_this, "handleTimelineZoom", function (duration) {
      var durationMsPerPixel = _this.clampedDuration(duration);
      _this.setState({
        durationMsPerPixel: durationMsPerPixel
      });
      _this.delayedReportZoom();
    });
    _defineProperty(_this, "handleTimelinePan", function (timestamp) {
      // Order of callbacks is important.
      var focusedTimestamp = _this.clampedTimestamp(timestamp);
      _this.switchToPausedMode();
      _this.setState({
        focusedTimestamp: focusedTimestamp
      });
      _this.delayedOnChangeTimestamp(focusedTimestamp);
    });
    _defineProperty(_this, "handleTimelineRelease", function () {
      if (_this.shouldStickySwitchToLiveMode()) {
        // Order of callbacks is important.
        _this.setFocusedTimestamp(_this.state.timestampNow);
        _this.switchToLiveMode();
      }
      _this.props.onTimelinePan();
    });
    _defineProperty(_this, "handleTimelineResize", function (timelineWidthPx) {
      _this.setState({
        timelineWidthPx: timelineWidthPx
      });
    });
    _defineProperty(_this, "handleLiveModeToggle", function (showingLive) {
      if (showingLive) {
        // Order of callbacks is important.
        _this.setState({
          focusedTimestamp: _this.state.timestampNow
        });
        _this.switchToLiveMode();
      } else {
        _this.switchToPausedMode();
      }
    });
    _defineProperty(_this, "switchToLiveMode", function () {
      if (_this.props.hasLiveMode && !_this.state.showingLive) {
        _this.setState({
          showingLive: true
        });
        _this.props.onChangeLiveMode(true);
      }
    });
    _defineProperty(_this, "switchToPausedMode", function () {
      if (_this.props.hasLiveMode && _this.state.showingLive) {
        _this.setState({
          showingLive: false
        });
        _this.props.onChangeLiveMode(false);
      }
    });
    _defineProperty(_this, "setFocusedTimestamp", function (timestamp) {
      var focusedTimestamp = _this.clampedTimestamp(timestamp);
      if (focusedTimestamp !== _this.state.focusedTimestamp) {
        _this.delayedOnChangeTimestamp.cancel();
        _this.props.onChangeTimestamp(focusedTimestamp);
        _this.setState({
          focusedTimestamp: focusedTimestamp
        });
      }
    });
    _defineProperty(_this, "adjustZoomToRange", function (rangeMs) {
      var rawDurationMsPerPixel = rangeMs / INITIAL_RANGE_WIDTH_PX;
      var durationMsPerPixel = _this.clampedDuration(rawDurationMsPerPixel);
      _this.setState({
        durationMsPerPixel: durationMsPerPixel
      });
    });
    _defineProperty(_this, "reportZoom", function () {
      var periods = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];
      var momentDuration = _moment["default"].duration(_this.state.durationMsPerPixel * _TimelinePeriodLabels.MAX_TICK_SPACING_PX);
      var zoomedPeriod = (0, _find2["default"])(periods, function (period) {
        return Math.floor(momentDuration.get(period)) && period;
      });
      _this.props.onTimelineZoom(zoomedPeriod);
    });
    _this.state = {
      durationMsPerPixel: initialDurationMsPerTimelinePx(props.earliestTimestamp),
      focusedTimestamp: (0, _timeline.formattedTimestamp)(props.timestamp),
      rangeMs: props.rangeMs,
      showingLive: props.showingLive,
      timelineWidthPx: null,
      timestampNow: (0, _timeline.formattedTimestamp)()
    };
    _this.delayedReportZoom = (0, _debounce2["default"])(_this.reportZoom, 5000);
    _this.delayedOnChangeTimestamp = (0, _debounce2["default"])(_this.props.onChangeTimestamp, 500);
    return _this;
  }
  _inherits(TimeTravel, _React$PureComponent);
  return _createClass(TimeTravel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      // Force periodic updates of the availability range every 1 second as time goes by.
      this.timer = setInterval(function () {
        var timestampNow = (0, _timeline.formattedTimestamp)();
        _this2.setState({
          timestampNow: timestampNow
        });
        if (_this2.props.hasLiveMode && _this2.state.showingLive) {
          _this2.setState({
            focusedTimestamp: timestampNow
          });
        }
      }, 1000);

      // Adjust timeline zoom level to the selected range immediately after mounting.
      this.adjustZoomToRange(this.state.rangeMs);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var nextTimestamp = (0, _timeline.formattedTimestamp)(nextProps.timestamp);

      // If live mode is supported and we're in it, ignore the timestamp prop and jump
      // directly to the present timestamp, otherwise jump to the given timestamp prop
      // if it has changed (to prevent regressions).
      if (nextProps.hasLiveMode && nextProps.showingLive) {
        this.setState({
          focusedTimestamp: this.state.timestampNow
        });
      } else if (nextTimestamp !== this.props.timestamp) {
        this.setState({
          focusedTimestamp: nextTimestamp
        });
      }
      // Update live mode only if live mode toggle is enabled.
      if (nextProps.hasLiveMode) {
        this.setState({
          showingLive: nextProps.showingLive
        });
      }
      // Update selected range only if range selector is used.
      if (nextProps.hasRangeSelector) {
        this.setState({
          rangeMs: nextProps.rangeMs
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "clampedTimestamp",
    value: function clampedTimestamp(rawTimestamp) {
      var timestamp = (0, _timeline.formattedTimestamp)(rawTimestamp);
      var startTimestamp = this.props.earliestTimestamp;
      var endTimestamp = this.state.timestampNow;
      if (startTimestamp && timestamp < startTimestamp) {
        timestamp = startTimestamp;
      }
      if (endTimestamp && timestamp > endTimestamp) {
        timestamp = endTimestamp;
      }
      return timestamp;
    }
  }, {
    key: "clampedDuration",
    value: function clampedDuration(duration) {
      var minDurationMs = minDurationMsPerTimelinePx();
      var maxDurationMs = maxDurationMsPerTimelinePx(this.props.earliestTimestamp);
      return (0, _clamp2["default"])(duration, minDurationMs, maxDurationMs);
    }
  }, {
    key: "shouldStickySwitchToLiveMode",
    value: function shouldStickySwitchToLiveMode(nextState) {
      var timeScale = (0, _timeline.getTimeScale)(_objectSpread(_objectSpread({}, this.state), nextState));
      var timestampCloseToNow = timeScale((0, _moment["default"])(this.state.timestampNow)) < 10;
      return timestampCloseToNow && this.props.hasLiveMode && !this.state.showingLive;
    }
  }, {
    key: "render",
    value: function render() {
      var timeScale = (0, _timeline.getTimeScale)(this.state);
      return /*#__PURE__*/_react["default"].createElement(TimeTravelContainer, {
        className: "time-travel"
      }, /*#__PURE__*/_react["default"].createElement(TimelineBar, {
        className: "timeline"
      }, /*#__PURE__*/_react["default"].createElement(_TimelinePanButton["default"], {
        icon: "fa fa-chevron-left",
        movePixels: -this.state.timelineWidthPx / 4,
        onClick: this.handleTimelinePanButtonClick,
        timeScale: timeScale
      }), /*#__PURE__*/_react["default"].createElement(_Timeline["default"], {
        inspectingInterval: this.props.hasRangeSelector,
        timestampNow: this.state.timestampNow,
        focusedTimestamp: this.state.focusedTimestamp,
        earliestTimestamp: this.props.earliestTimestamp,
        durationMsPerPixel: this.state.durationMsPerPixel,
        rangeMs: this.state.rangeMs,
        deployments: this.props.deployments,
        deploymentsLinkBuilder: this.props.deploymentsLinkBuilder,
        onDeploymentClick: this.props.onDeploymentClick,
        isLoading: this.props.isLoading,
        onJump: this.handleTimelineJump,
        onZoom: this.handleTimelineZoom,
        onPan: this.handleTimelinePan,
        onRelease: this.handleTimelineRelease,
        onResize: this.handleTimelineResize,
        onUpdateVisibleRange: this.props.onUpdateVisibleRange
      }), /*#__PURE__*/_react["default"].createElement(_TimelinePanButton["default"], {
        icon: "fa fa-chevron-right",
        movePixels: this.state.timelineWidthPx / 4,
        onClick: this.handleTimelinePanButtonClick,
        timeScale: timeScale
      })), /*#__PURE__*/_react["default"].createElement(TimeControlsWrapper, null, /*#__PURE__*/_react["default"].createElement(TimeControlsContainer, null, this.props.hasLiveMode && /*#__PURE__*/_react["default"].createElement(_LiveModeToggle["default"], {
        showingLive: this.state.showingLive,
        onToggle: this.handleLiveModeToggle
      }), /*#__PURE__*/_react["default"].createElement(_TimestampInput["default"], {
        timestamp: this.state.focusedTimestamp,
        onChangeTimestamp: this.handleInputChange,
        disabled: this.props.hasLiveMode && this.state.showingLive
      }), this.props.hasRangeSelector && /*#__PURE__*/_react["default"].createElement(_RangeSelector["default"], {
        rangeMs: this.state.rangeMs,
        onChange: this.handleRangeChange
      }))));
    }
  }]);
}(_react["default"].PureComponent);
TimeTravel.propTypes = {
  /**
   * Optional list of deployment annotations shown in the timeline
   */
  deployments: _propTypes["default"].array,
  /**
   * Optional function that builds links that deployment clicks should lead to
   */
  deploymentsLinkBuilder: _propTypes["default"].func,
  /**
   * The earliest timestamp we can travel back in time to
   */
  earliestTimestamp: _propTypes["default"].string,
  /**
   * Enables Time Travel to be in the live auto-update mode
   */
  hasLiveMode: _propTypes["default"].bool,
  /**
   * Adds a range selector to the timestamp selector, for when the timestamp info is not enough
   */
  hasRangeSelector: _propTypes["default"].bool,
  /**
   * Shows timeline loading indicator
   */
  isLoading: _propTypes["default"].bool,
  /**
   * Optional callback handling the change of live mode
   */
  onChangeLiveMode: _propTypes["default"].func,
  /**
   * Optional callback handling range in milliseconds change
   */
  onChangeRange: _propTypes["default"].func,
  /**
   * Required callback handling every timestamp change
   */
  onChangeTimestamp: _propTypes["default"].func.isRequired,
  /**
   * Optional hook for deployment annotation clicks
   */
  onDeploymentClick: _propTypes["default"].func,
  /**
   * Optional callback handling clicks on timeline labels (e.g. for tracking)
   */
  onTimelineLabelClick: _propTypes["default"].func,
  /**
   * Optional callback handling timeline panning (e.g. for tracking)
   */
  onTimelinePan: _propTypes["default"].func,
  /**
   * Optional callback handling clicks on timeline pan buttons (e.g. for tracking)
   */
  onTimelinePanButtonClick: _propTypes["default"].func,
  /**
   * Optional callback handling timeline zooming (e.g. for tracking)
   */
  onTimelineZoom: _propTypes["default"].func,
  /**
   * Optional callback handling timestamp change by direct input box editing (e.g. for tracking)
   */
  onTimestampInputEdit: _propTypes["default"].func,
  /**
   * Optional callback when visible part of the timeline gets updated
   */
  onUpdateVisibleRange: _propTypes["default"].func,
  /**
   * Duration in milliseconds of the focused range (which ends at `timestamp`)
   */
  rangeMs: _propTypes["default"].number,
  /**
   * The live mode shows current time and ignores the `timestamp` param
   */
  showingLive: _propTypes["default"].bool,
  /**
   * The timestamp in focus
   */
  timestamp: _propTypes["default"].string.isRequired
};
TimeTravel.defaultProps = {
  deployments: [],
  deploymentsLinkBuilder: _noop2["default"],
  earliestTimestamp: '2014-01-01T00:00:00Z',
  hasLiveMode: false,
  hasRangeSelector: false,
  isLoading: false,
  onChangeLiveMode: _noop2["default"],
  onChangeRange: _noop2["default"],
  onDeploymentClick: _noop2["default"],
  onTimelineLabelClick: _noop2["default"],
  onTimelinePan: _noop2["default"],
  onTimelinePanButtonClick: _noop2["default"],
  onTimelineZoom: _noop2["default"],
  onTimestampInputEdit: _noop2["default"],
  onUpdateVisibleRange: _noop2["default"],
  // 1 hour as a default, only relevant if range selector is enabled
  rangeMs: 3600000,
  // only relevant if live mode is enabled
  showingLive: true
};
var _default = exports["default"] = TimeTravel;
//# sourceMappingURL=TimeTravel.js.map