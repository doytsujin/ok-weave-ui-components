"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _DeploymentAnnotation = _interopRequireDefault(require("../_DeploymentAnnotation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DeploymentAnnotationsWrapper = _styledComponents["default"].div.withConfig({
  displayName: "_DeploymentAnnotations__DeploymentAnnotationsWrapper",
  componentId: "sc-y8yibj-0"
})(["pointer-events:none;position:absolute;width:100%;height:100%;"]);
var formattedDeployments = function formattedDeployments(_ref) {
  var deployments = _ref.deployments,
    timeScale = _ref.timeScale,
    chartWidth = _ref.chartWidth;
  return deployments.map(function (_ref2) {
    var Data = _ref2.Data,
      Stamp = _ref2.Stamp;
    var _Data$split = Data.split(', '),
      _Data$split2 = _toArray(_Data$split),
      action = _Data$split2[0],
      serviceIDs = _Data$split2.slice(1);
    return {
      action: action,
      key: "".concat(Data, " --- ").concat(Stamp),
      position: timeScale((0, _moment["default"])(Stamp).unix()),
      serviceIDs: serviceIDs,
      timestamp: (0, _moment["default"])(Stamp).format()
    };
  }).filter(function (_ref3) {
    var position = _ref3.position;
    return (
      // Filter out all the deployments that fall out of the chart.
      chartWidth >= position && position >= 0
    );
  });
};
var DeploymentAnnotations = /*#__PURE__*/function (_React$PureComponent) {
  function DeploymentAnnotations(props) {
    var _this;
    _classCallCheck(this, DeploymentAnnotations);
    _this = _callSuper(this, DeploymentAnnotations, [props]);
    _this.state = {
      deployments: formattedDeployments(props)
    };
    return _this;
  }
  _inherits(DeploymentAnnotations, _React$PureComponent);
  return _createClass(DeploymentAnnotations, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        deployments: formattedDeployments(nextProps)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props$timeScale = this.props.timeScale.domain(),
        _this$props$timeScale2 = _slicedToArray(_this$props$timeScale, 2),
        startTimeSec = _this$props$timeScale2[0],
        endTimeSec = _this$props$timeScale2[1];
      if (!startTimeSec || !endTimeSec) return null;
      return /*#__PURE__*/_react["default"].createElement(DeploymentAnnotationsWrapper, null, this.state.deployments.map(function (deployment) {
        return /*#__PURE__*/_react["default"].createElement(_DeploymentAnnotation["default"], {
          key: deployment.key,
          x: deployment.position,
          action: deployment.action,
          serviceIDs: deployment.serviceIDs,
          timestamp: deployment.timestamp,
          containerWidth: _this2.props.chartWidth,
          containerHeight: _this2.props.chartHeight,
          linkTo: _this2.props.linkBuilder(deployment),
          onClick: _this2.props.onClick,
          isOnAxis: true
        });
      }));
    }
  }]);
}(_react["default"].PureComponent);
DeploymentAnnotations.propTypes = {
  chartHeight: _propTypes["default"].number.isRequired,
  chartWidth: _propTypes["default"].number.isRequired,
  deployments: _propTypes["default"].array.isRequired,
  linkBuilder: _propTypes["default"].func.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  timeScale: _propTypes["default"].func.isRequired
};
var _default = exports["default"] = DeploymentAnnotations;
//# sourceMappingURL=_DeploymentAnnotations.js.map