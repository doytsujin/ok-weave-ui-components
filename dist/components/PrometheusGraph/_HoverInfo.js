"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _max2 = _interopRequireDefault(require("lodash/max"));
var _map2 = _interopRequireDefault(require("lodash/map"));
var _head2 = _interopRequireDefault(require("lodash/head"));
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _TimestampTooltip = _interopRequireDefault(require("../_TimestampTooltip"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var TooltipRow = _styledComponents["default"].div.withConfig({
  displayName: "_HoverInfo__TooltipRow",
  componentId: "sc-j46v09-0"
})(["display:flex;align-items:center;justify-content:space-between;font-size:", ";", ";"], function (props) {
  return props.theme.fontSizes.tiny;
}, function (props) {
  return props.focused && "\n    font-weight: bold;\n    background-color: ".concat(props.theme.colors.purple100, ";;\n  ");
});
var TooltipRowColor = _styledComponents["default"].span.withConfig({
  displayName: "_HoverInfo__TooltipRowColor",
  componentId: "sc-j46v09-1"
})(["background-color:", ";border-radius:", ";margin-right:4px;min-width:10px;height:4px;"], function (props) {
  return props.color;
}, function (props) {
  return props.theme.borderRadius.soft;
});
var TooltipRowName = _styledComponents["default"].span.withConfig({
  displayName: "_HoverInfo__TooltipRowName",
  componentId: "sc-j46v09-2"
})(["flex-grow:1;white-space:pre;display:block;align-items:center;margin-right:30px;text-overflow:ellipsis;overflow:hidden;"]);
var TooltipRowValue = _styledComponents["default"].span.withConfig({
  displayName: "_HoverInfo__TooltipRowValue",
  componentId: "sc-j46v09-3"
})(["font-family:", ";margin-left:20px;white-space:nowrap;"], function (props) {
  return props.theme.fontFamilies.monospace;
});
var HoverLine = _styledComponents["default"].div.attrs(function (_ref) {
  var left = _ref.left,
    height = _ref.height;
  return {
    style: {
      height: height,
      left: left
    }
  };
}).withConfig({
  displayName: "_HoverInfo__HoverLine",
  componentId: "sc-j46v09-4"
})(["border-left:1px solid ", ";pointer-events:none;position:absolute;top:0;"], function (props) {
  return props.theme.colors.gray600;
});
var FocusPoint = _styledComponents["default"].span.attrs(function (_ref2) {
  var top = _ref2.top;
  return {
    style: {
      top: top
    }
  };
}).withConfig({
  displayName: "_HoverInfo__FocusPoint",
  componentId: "sc-j46v09-5"
})(["border:2.5px solid ", ";border-radius:", ";background-color:", ";opacity:", ";box-sizing:border-box;position:absolute;cursor:default;pointer-events:none;", ";"], function (props) {
  return props.color;
}, function (props) {
  return props.theme.borderRadius.circle;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.faded ? 0.5 : 1;
}, function (props) {
  return "\n    margin-left: ".concat(-props.radius, "px;\n    margin-top: ").concat(-props.radius, "px;\n    width: ").concat(2 * props.radius, "px;\n    height: ").concat(2 * props.radius, "px;\n  ");
});
var HoverInfo = /*#__PURE__*/function (_React$PureComponent) {
  function HoverInfo() {
    _classCallCheck(this, HoverInfo);
    return _callSuper(this, HoverInfo, arguments);
  }
  _inherits(HoverInfo, _React$PureComponent);
  return _createClass(HoverInfo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        datapoints = _this$props.datapoints,
        mouseX = _this$props.mouseX,
        mouseY = _this$props.mouseY,
        valueScale = _this$props.valueScale,
        chartWidth = _this$props.chartWidth,
        chartHeight = _this$props.chartHeight,
        simpleTooltip = _this$props.simpleTooltip;
      if (!datapoints) return null;

      // Simple tooltip will only show the value for the hovered series.
      var filteredHoverPoints = _toConsumableArray(datapoints).filter(function (p) {
        return p.focused || !simpleTooltip;
      });

      // Render focused circle last so that it stands out.
      var sortedHoverPoints = _toConsumableArray(filteredHoverPoints).sort(function (p) {
        return p.focused ? 1 : -1;
      });
      var timestamp = _moment["default"].unix(this.props.timestampSec).format();

      // We want to have same formatting (precision, units, etc...) across
      // all tooltip values so we create a formatter for a reference value
      // (1 / 10 of the max value) and use it across all datapoints.
      var referenceValue = ((0, _max2["default"])((0, _map2["default"])(datapoints, 'value')) || 0) / 10;
      var formatValue = this.props.valueFormatter(referenceValue);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(HoverLine, {
        left: mouseX,
        height: chartHeight
      }, sortedHoverPoints.map(function (datapoint) {
        return /*#__PURE__*/_react["default"].createElement(FocusPoint, {
          key: datapoint.key,
          color: datapoint.color,
          faded: !datapoint.focused,
          radius: datapoint.focused ? 5 : 4,
          top: valueScale(datapoint.graphValue)
        });
      })), /*#__PURE__*/_react["default"].createElement(_TimestampTooltip["default"], {
        offsetX: mouseX,
        offsetY: mouseY,
        containerWidth: chartWidth,
        timestamp: timestamp
      }, filteredHoverPoints.map(function (datapoint) {
        return /*#__PURE__*/_react["default"].createElement(TooltipRow, {
          key: datapoint.key,
          focused: datapoint.focused
        }, /*#__PURE__*/_react["default"].createElement(TooltipRowColor, {
          color: datapoint.color
        }), /*#__PURE__*/_react["default"].createElement(TooltipRowName, null, (0, _head2["default"])(datapoint.hoverName)), /*#__PURE__*/_react["default"].createElement(TooltipRowValue, null, formatValue(datapoint.value)));
      })));
    }
  }]);
}(_react["default"].PureComponent);
HoverInfo.propTypes = {
  chartHeight: _propTypes["default"].number.isRequired,
  chartWidth: _propTypes["default"].number.isRequired,
  datapoints: _propTypes["default"].array,
  mouseX: _propTypes["default"].number,
  mouseY: _propTypes["default"].number,
  simpleTooltip: _propTypes["default"].bool.isRequired,
  timestampSec: _propTypes["default"].number.isRequired,
  valueFormatter: _propTypes["default"].func.isRequired,
  valueScale: _propTypes["default"].func.isRequired
};
HoverInfo.defaultProps = {
  datapoints: [],
  mouseX: 0,
  mouseY: 0
};
var _default = exports["default"] = HoverInfo;
//# sourceMappingURL=_HoverInfo.js.map