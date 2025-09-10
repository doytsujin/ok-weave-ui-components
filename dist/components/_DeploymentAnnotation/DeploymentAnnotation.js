"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _reactRouter = require("react-router");
var _TimestampTooltip = _interopRequireDefault(require("../_TimestampTooltip"));
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
var DeploymentAnnotationWrapper = _styledComponents["default"].div.attrs({
  // Override the parent tooltip
  title: ''
}).withConfig({
  displayName: "DeploymentAnnotation__DeploymentAnnotationWrapper",
  componentId: "sc-ca9ihm-0"
})(["position:absolute;height:100%;"]);
var DeploymentAnnotationContainer = _styledComponents["default"].div.attrs(function (_ref) {
  var x = _ref.x;
  return {
    style: {
      left: x
    }
  };
}).withConfig({
  displayName: "DeploymentAnnotation__DeploymentAnnotationContainer",
  componentId: "sc-ca9ihm-1"
})(["pointer-events:all;position:absolute;height:100%;"]);
var FocusPoint = _styledComponents["default"].span.withConfig({
  displayName: "DeploymentAnnotation__FocusPoint",
  componentId: "sc-ca9ihm-2"
})(["border-radius:", ";border:2.5px solid ", ";background-color:", ";box-sizing:border-box;position:absolute;", ";"], function (props) {
  return props.theme.borderRadius.circle;
}, function (props) {
  return props.theme.colors.blue400;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return "\n    margin-left: -".concat(props.radius, "px;\n    margin-top: ").concat(props.radius, "px;\n    width: ").concat(2 * props.radius, "px;\n    height: ").concat(2 * props.radius, "px;\n    bottom: -").concat(props.isOnAxis ? props.radius : 0, "px;\n  ");
});
var VerticalLine = _styledComponents["default"].div.withConfig({
  displayName: "DeploymentAnnotation__VerticalLine",
  componentId: "sc-ca9ihm-3"
})(["pointer-events:none;position:absolute;height:100%;top:0;"]);
var AnnotationShadow = (0, _styledComponents["default"])(VerticalLine).withConfig({
  displayName: "DeploymentAnnotation__AnnotationShadow",
  componentId: "sc-ca9ihm-4"
})(["border-left:3px solid ", ";margin-left:-1px;opacity:0.2;"], function (props) {
  return props.theme.colors.white;
});
var AnnotationLine = (0, _styledComponents["default"])(VerticalLine).withConfig({
  displayName: "DeploymentAnnotation__AnnotationLine",
  componentId: "sc-ca9ihm-5"
})(["border-left:1px solid ", ";opacity:0.7;"], function (props) {
  return props.theme.colors.blue400;
});
var InfoLine = _styledComponents["default"].span.withConfig({
  displayName: "DeploymentAnnotation__InfoLine",
  componentId: "sc-ca9ihm-6"
})(["font-size:", ";margin-top:1px;display:block;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"], function (props) {
  return props.theme.fontSizes.small;
});
var NoLink = _styledComponents["default"].span.withConfig({
  displayName: "DeploymentAnnotation__NoLink",
  componentId: "sc-ca9ihm-7"
})(["cursor:default;"]);
var MaybeLinkable = function MaybeLinkable(_ref2) {
  var linkTo = _ref2.linkTo,
    children = _ref2.children;
  return linkTo ? /*#__PURE__*/_react["default"].createElement(_reactRouter.Link, {
    to: linkTo
  }, children) : /*#__PURE__*/_react["default"].createElement(NoLink, null, children);
};
var DeploymentAnnotations = /*#__PURE__*/function (_React$PureComponent) {
  function DeploymentAnnotations() {
    var _this;
    _classCallCheck(this, DeploymentAnnotations);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, DeploymentAnnotations, [].concat(args));
    _defineProperty(_this, "state", {
      isHovered: false
    });
    _defineProperty(_this, "handleMouseEnter", function () {
      _this.setState({
        isHovered: true
      });
    });
    _defineProperty(_this, "handleMouseLeave", function () {
      _this.setState({
        isHovered: false
      });
    });
    _defineProperty(_this, "handleClick", function () {
      var _this$props = _this.props,
        action = _this$props.action,
        serviceIDs = _this$props.serviceIDs,
        timestamp = _this$props.timestamp;
      _this.props.onClick({
        action: action,
        serviceIDs: serviceIDs,
        timestamp: timestamp
      });
    });
    return _this;
  }
  _inherits(DeploymentAnnotations, _React$PureComponent);
  return _createClass(DeploymentAnnotations, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(DeploymentAnnotationWrapper, null, /*#__PURE__*/_react["default"].createElement(DeploymentAnnotationContainer, {
        x: this.props.x
      }, /*#__PURE__*/_react["default"].createElement(AnnotationShadow, null), /*#__PURE__*/_react["default"].createElement(AnnotationLine, null), /*#__PURE__*/_react["default"].createElement(MaybeLinkable, {
        linkTo: this.props.linkTo
      }, /*#__PURE__*/_react["default"].createElement(FocusPoint, {
        hoverable: true,
        radius: "5",
        isOnAxis: this.props.isOnAxis,
        onMouseMove: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.handleClick
      }))), this.state.isHovered && /*#__PURE__*/_react["default"].createElement(_TimestampTooltip["default"], {
        timestamp: this.props.timestamp,
        containerWidth: this.props.containerWidth,
        offsetY: this.props.containerHeight,
        offsetX: this.props.x
      }, /*#__PURE__*/_react["default"].createElement(InfoLine, null, /*#__PURE__*/_react["default"].createElement("strong", null, this.props.action)), this.props.serviceIDs.map(function (serviceId) {
        return /*#__PURE__*/_react["default"].createElement(InfoLine, {
          key: serviceId
        }, "\u2192 ", serviceId);
      })));
    }
  }]);
}(_react["default"].PureComponent);
DeploymentAnnotations.propTypes = {
  action: _propTypes["default"].string.isRequired,
  containerHeight: _propTypes["default"].number.isRequired,
  containerWidth: _propTypes["default"].number.isRequired,
  isOnAxis: _propTypes["default"].bool,
  linkTo: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired,
  serviceIDs: _propTypes["default"].array.isRequired,
  timestamp: _propTypes["default"].string.isRequired,
  x: _propTypes["default"].number.isRequired
};
DeploymentAnnotations.defaultProps = {
  isOnAxis: false,
  linkTo: ''
};
var _default = exports["default"] = DeploymentAnnotations;
//# sourceMappingURL=DeploymentAnnotation.js.map