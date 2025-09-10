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
var COMPACT_LOCALE_KEY = 'compact-time-ranges';

// FIXME: move this somewhere else?
(function () {
  // When you register a new locale moment.js changes the global to
  // the new entry. So save the current locale and then set it back.
  var defaultLocale = _moment["default"].locale();
  _moment["default"].locale(COMPACT_LOCALE_KEY, {
    relativeTime: {
      d: '1d',
      dd: '%dd',
      future: 'in %s',
      h: '1h',
      hh: '%dh',
      m: '1m',
      M: '1mo',
      mm: '%dm',
      MM: '%dmo',
      past: '%s ago',
      s: '%ds',
      y: '1y',
      yy: '%dy'
    }
  });
  _moment["default"].locale(defaultLocale);
})();
var Timestamp = _styledComponents["default"].span.withConfig({
  displayName: "TimestampTag__Timestamp",
  componentId: "sc-iyax5h-0"
})(["", ";"], function (props) {
  return !props.inheritStyles && "\n    color: ".concat(props.theme.colors.gray600, ";\n    font-size: ").concat(props.theme.fontSizes.small, ";\n  ");
});

/**
 * TimestampTag renders an auto-update timestamp in a consistent format.
 * ```javascript
 * import { TimestampTag } from 'weaveworks-ui-components';
 *
 * export default function TimestampTag() {
 *   return (
 *     <div>
 *       <Info>Absolute timestamp</Info>
 *       <TimestampTag timestamp={timestamp} />
 *
 *       <Info>Relative timestamp (default)</Info>
 *       <TimestampTag relative timestamp={timestamp} />
 *
 *       <Info>Relative timestamp (compact)</Info>
 *       <TimestampTag relative compact timestamp={timestamp} />
 *     </div>
 *   );
 * }
 * ```
 */
var TimestampTag = /*#__PURE__*/function (_React$Component) {
  function TimestampTag() {
    var _this;
    _classCallCheck(this, TimestampTag);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TimestampTag, [].concat(args));
    _defineProperty(_this, "startAutoRefresh", function (_ref) {
      var intervalMs = _ref.intervalMs;
      _this.stopAutoRefresh();
      _this.timer = setInterval(function () {
        _this.forceUpdate();
      }, intervalMs);
    });
    _defineProperty(_this, "stopAutoRefresh", function () {
      if (_this.timer) {
        clearInterval(_this.timer);
        _this.timer = null;
      }
    });
    return _this;
  }
  _inherits(TimestampTag, _React$Component);
  return _createClass(TimestampTag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.relative) {
        this.startAutoRefresh(this.props);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.relative) {
        this.startAutoRefresh(nextProps);
      } else {
        this.stopAutoRefresh();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopAutoRefresh();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        relative = _this$props.relative,
        compact = _this$props.compact,
        timestamp = _this$props.timestamp,
        inheritStyles = _this$props.inheritStyles;
      var relativeLocale = compact ? COMPACT_LOCALE_KEY : _moment["default"].locale();
      var momentTimestamp = (0, _moment["default"])(timestamp).utc();
      return /*#__PURE__*/_react["default"].createElement(Timestamp, {
        inheritStyles: inheritStyles,
        title: relative ? momentTimestamp.format('dddd, MMMM Do YYYY, HH:mm:ss [UTC]') : momentTimestamp.fromNow()
      }, relative ? momentTimestamp.locale(relativeLocale).fromNow(compact) : momentTimestamp.startOf('second').format(compact ? 'YYYY-MM-DD' : ''));
    }
  }]);
}(_react["default"].Component);
TimestampTag.propTypes = {
  /**
   * Show in compact format if true (only for relative timestamps)
   */
  compact: _propTypes["default"].bool,
  /**
   * Inherit the styles from parent element if true
   */
  inheritStyles: _propTypes["default"].bool,
  /**
   * Auto-refresh interval (in milliseconds)
   */
  intervalMs: _propTypes["default"].number,
  /**
   * Show relative timestamp if true
   */
  relative: _propTypes["default"].bool,
  /**
   * Timestamp to be displayed
   */
  timestamp: _propTypes["default"].string.isRequired
};
TimestampTag.defaultProps = {
  compact: false,
  inheritStyles: false,
  intervalMs: 15000,
  relative: false
};
var _default = exports["default"] = TimestampTag;
//# sourceMappingURL=TimestampTag.js.map