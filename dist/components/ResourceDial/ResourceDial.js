"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _isFinite2 = _interopRequireDefault(require("lodash/isFinite"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouter = require("react-router");
var _reactMotion = require("react-motion");
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _d3Format = require("d3-format");
var _d3Shape = require("d3-shape");
var _theme = _interopRequireDefault(require("../../theme"));
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
var DIAL_RADIUS_PX = 85;
var DIAL_BORDER_PX = 8;
var roundedValuePercent = function roundedValuePercent(usage) {
  // The number is really small (< 0.01%), just indicate
  // the workload isn't using much resources at all.
  if (usage < 0.01) return 0;
  // Need to show 2 decimals when 0.01% <= usage < 0.1%.
  if (usage < 0.1) return (0, _d3Format.format)('.2f')(usage);
  // Let's only show 1 decimal when 0.1% <= usage < 5%.
  if (usage < 5) return (0, _d3Format.format)('.1f')(usage);
  // Show no decimal data when 10% <= usage
  return (0, _d3Format.format)('.0f')(usage);
};
var adjustArc = function adjustArc(usage) {
  // Get rounded usage displayed inside the dial as a number [0, 1].
  var roundedUsage = Number(roundedValuePercent(usage * 100)) / 100;
  // If the displayed value is in the interval 0% < x < 1%, round up the dial arc to 1%.
  if (roundedUsage > 0 && roundedUsage < 0.01) return 0.01;
  // Otherwise, let the dial correspond to the displayed value.
  return roundedUsage;
};
var arcPath = (0, _d3Shape.arc)().innerRadius(DIAL_RADIUS_PX - DIAL_BORDER_PX).outerRadius(DIAL_RADIUS_PX).cornerRadius(5).startAngle(-Math.PI / 2).endAngle(function (percentage) {
  return Math.PI * adjustArc(percentage) - Math.PI / 2;
});
var DialLink = (0, _styledComponents["default"])(_reactRouter.Link).withConfig({
  displayName: "ResourceDial__DialLink",
  componentId: "sc-2qqajt-0"
})(["border-radius:", ";width:", "px;height:", "px;display:block;"], function (props) {
  return props.theme.borderRadius.circle;
}, 2 * DIAL_RADIUS_PX, 1.4 * DIAL_RADIUS_PX);
var DialContainer = _styledComponents["default"].div.withConfig({
  displayName: "ResourceDial__DialContainer",
  componentId: "sc-2qqajt-1"
})(["color:", ";border-radius:", ";padding-top:", ";position:relative;box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;cursor:default;&:not([disabled]):hover{cursor:pointer;opacity:0.8;}"], function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.borderRadius.circle;
}, (0, _selectors.spacing)('large'));
var DialArc = _styledComponents["default"].svg.withConfig({
  displayName: "ResourceDial__DialArc",
  componentId: "sc-2qqajt-2"
})(["position:absolute;pointer-events:none;left:0;top:0;"]);
var DialValueContainer = _styledComponents["default"].div.withConfig({
  displayName: "ResourceDial__DialValueContainer",
  componentId: "sc-2qqajt-3"
})(["display:flex;font-weight:bold;"]);
var DialValue = _styledComponents["default"].div.withConfig({
  displayName: "ResourceDial__DialValue",
  componentId: "sc-2qqajt-4"
})(["font-size:", ";color:", ";margin:0 ", ";"], function (props) {
  return props.theme.fontSizes.huge;
}, function (props) {
  return props.theme.colors.blue600;
}, (0, _selectors.spacing)('xxs'));
var PercentageSign = _styledComponents["default"].div.withConfig({
  displayName: "ResourceDial__PercentageSign",
  componentId: "sc-2qqajt-5"
})(["font-size:", ";color:", ";padding-top:6px;overflow:visible;width:0;"], function (props) {
  return props.theme.fontSizes.large;
}, function (props) {
  return props.theme.colors.blue600;
});
var FillArc = function FillArc(_ref) {
  var color = _ref.color,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? 1 : _ref$value;
  return /*#__PURE__*/_react["default"].createElement("path", {
    transform: "translate(".concat(DIAL_RADIUS_PX, ", ").concat(DIAL_RADIUS_PX, ")"),
    stroke: "none",
    fill: color,
    d: arcPath(value)
  });
};
var Label = _styledComponents["default"].span.withConfig({
  displayName: "ResourceDial__Label",
  componentId: "sc-2qqajt-6"
})(["max-width:calc(100% - 40px);text-align:center;"]);

// TODO: Extract this into the theme.
var dialSpring = function dialSpring(value) {
  return (0, _reactMotion.spring)(value, {
    damping: 13,
    precision: 0.01,
    stiffness: 50
  });
};
var ResourceDial = /*#__PURE__*/function (_React$PureComponent) {
  function ResourceDial(props, context) {
    var _this;
    _classCallCheck(this, ResourceDial);
    _this = _callSuper(this, ResourceDial, [props, context]);
    _this.state = {
      value: null
    };
    return _this;
  }
  _inherits(ResourceDial, _React$PureComponent);
  return _createClass(ResourceDial, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // eslint-disable-next-line react/no-did-mount-set-state
      this.setState({
        value: this.props.value
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // setState is async so triggers another render allowing animation to happen
      this.setState({
        value: nextProps.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      var _this$props = this.props,
        label = _this$props.label,
        disabled = _this$props.disabled,
        to = _this$props.to,
        onClick = _this$props.onClick;
      var hasLink = !(0, _isEmpty2["default"])(to) && !disabled;
      var hasValue = (0, _isFinite2["default"])(value);
      return /*#__PURE__*/_react["default"].createElement(DialLink, {
        to: hasLink ? to : '',
        onClick: onClick
      }, /*#__PURE__*/_react["default"].createElement(_reactMotion.Motion, {
        style: {
          interpolatedValue: dialSpring(hasValue ? value : 0)
        }
      }, function (_ref2) {
        var interpolatedValue = _ref2.interpolatedValue;
        return /*#__PURE__*/_react["default"].createElement(DialContainer, {
          disabled: !hasLink
        }, /*#__PURE__*/_react["default"].createElement(DialValueContainer, null, /*#__PURE__*/_react["default"].createElement(DialValue, null, hasValue ? roundedValuePercent(interpolatedValue * 100) : '-'), hasValue && /*#__PURE__*/_react["default"].createElement(PercentageSign, null, "%")), /*#__PURE__*/_react["default"].createElement(Label, null, label), /*#__PURE__*/_react["default"].createElement(DialArc, {
          width: "100%",
          height: "100%"
        }, /*#__PURE__*/_react["default"].createElement(FillArc, {
          color: _theme["default"].colors.gray100
        }), /*#__PURE__*/_react["default"].createElement(FillArc, {
          color: _theme["default"].colors.blue600,
          value: interpolatedValue
        })));
      }));
    }
  }]);
}(_react["default"].PureComponent);
ResourceDial.propTypes = {
  /**
   * Disables the link if set to true
   */
  disabled: _propTypes["default"].bool,
  /**
   * Resource usage label shown below the percentage value
   */
  label: _propTypes["default"].string.isRequired,
  /**
   * React router link for clicking on the dial
   */
  to: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  /**
   * The percentage value to be displayed by the dial, should be between 0 and 1
   */
  value: _propTypes["default"].number
};
ResourceDial.defaultProps = {
  disabled: false,
  to: '',
  value: null
};
var _default = exports["default"] = ResourceDial;
//# sourceMappingURL=ResourceDial.js.map