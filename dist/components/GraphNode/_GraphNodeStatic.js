"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tags = exports.shapes = exports.nodeBaseSize = exports["default"] = void 0;
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _keys2 = _interopRequireDefault(require("lodash/keys"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _polished = require("polished");
var _MatchedText = _interopRequireDefault(require("../MatchedText"));
var _ShapeCircle = _interopRequireDefault(require("./shapes/_ShapeCircle"));
var _ShapeTriangle = _interopRequireDefault(require("./shapes/_ShapeTriangle"));
var _ShapeDottedTriangle = _interopRequireDefault(require("./shapes/_ShapeDottedTriangle"));
var _ShapeSquare = _interopRequireDefault(require("./shapes/_ShapeSquare"));
var _ShapePentagon = _interopRequireDefault(require("./shapes/_ShapePentagon"));
var _ShapeHexagon = _interopRequireDefault(require("./shapes/_ShapeHexagon"));
var _ShapeHeptagon = _interopRequireDefault(require("./shapes/_ShapeHeptagon"));
var _ShapeOctagon = _interopRequireDefault(require("./shapes/_ShapeOctagon"));
var _ShapeCloud = _interopRequireDefault(require("./shapes/_ShapeCloud"));
var _ShapeSheet = _interopRequireDefault(require("./shapes/_ShapeSheet"));
var _ShapeCylinder = _interopRequireDefault(require("./shapes/_ShapeCylinder"));
var _ShapeDottedCylinder = _interopRequireDefault(require("./shapes/_ShapeDottedCylinder"));
var _TagCamera = _interopRequireDefault(require("./tags/_TagCamera"));
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
var nodeBaseSize = exports.nodeBaseSize = 55;
var shapes = exports.shapes = {
  circle: _ShapeCircle["default"],
  cloud: _ShapeCloud["default"],
  cylinder: _ShapeCylinder["default"],
  dottedcylinder: _ShapeDottedCylinder["default"],
  dottedtriangle: _ShapeDottedTriangle["default"],
  heptagon: _ShapeHeptagon["default"],
  hexagon: _ShapeHexagon["default"],
  octagon: _ShapeOctagon["default"],
  pentagon: _ShapePentagon["default"],
  sheet: _ShapeSheet["default"],
  square: _ShapeSquare["default"],
  triangle: _ShapeTriangle["default"]
};
var tags = exports.tags = {
  camera: _TagCamera["default"],
  none: function none() {
    return null;
  }
};
var labelWidth = nodeBaseSize * 2.5;
var GraphNodeWrapper = _styledComponents["default"].g.withConfig({
  displayName: "_GraphNodeStatic__GraphNodeWrapper",
  componentId: "sc-xnsael-0"
})(["cursor:", ";"], function (props) {
  return props.cursorType;
});
var SvgTextContainer = _styledComponents["default"].g.attrs(function (_ref) {
  var y = _ref.y;
  return {
    transform: "translate(0, ".concat(y + 85, ")")
  };
}).withConfig({
  displayName: "_GraphNodeStatic__SvgTextContainer",
  componentId: "sc-xnsael-1"
})(["pointer-events:all;"]);
var LabelSvg = _styledComponents["default"].text.attrs(function (_ref2) {
  var contrastMode = _ref2.contrastMode,
    _ref2$theme$colors = _ref2.theme.colors,
    black = _ref2$theme$colors.black,
    purple800 = _ref2$theme$colors.purple800;
  return {
    fill: contrastMode ? black : purple800,
    textAnchor: 'middle',
    y: -38
  };
}).withConfig({
  displayName: "_GraphNodeStatic__LabelSvg",
  componentId: "sc-xnsael-2"
})(["font-size:", ";"], function (props) {
  return props.theme.fontSizes.normal;
});
var LabelMinorSvg = _styledComponents["default"].text.attrs({
  fill: function fill(props) {
    return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple600;
  },
  textAnchor: 'middle',
  y: -20
}).withConfig({
  displayName: "_GraphNodeStatic__LabelMinorSvg",
  componentId: "sc-xnsael-3"
})(["font-size:", ";"], function (props) {
  return props.theme.fontSizes.small;
});
var LabelsStandardContainer = _styledComponents["default"].div.withConfig({
  displayName: "_GraphNodeStatic__LabelsStandardContainer",
  componentId: "sc-xnsael-4"
})([""]);
var LabelTemplate = _styledComponents["default"].div.withConfig({
  displayName: "_GraphNodeStatic__LabelTemplate",
  componentId: "sc-xnsael-5"
})(["background-color:", ";border-radius:", ";overflow:hidden;text-overflow:ellipsis;display:inline-block;text-align:center;padding:2px 10px;max-width:100%;pointer-events:all;", ";"], function (props) {
  return (0, _polished.transparentize)(0.2, props.contrastMode ? props.theme.colors.white : props.theme.colors.purple25);
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return !props.highlighted && "\n      white-space: nowrap;\n    ";
});
var LabelStandard = (0, _styledComponents["default"])(LabelTemplate).withConfig({
  displayName: "_GraphNodeStatic__LabelStandard",
  componentId: "sc-xnsael-6"
})(["color:", ";font-size:", ";margin-top:4px;"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple800;
}, function (props) {
  return props.theme.fontSizes.normal;
});
var LabelMinorStandard = (0, _styledComponents["default"])(LabelTemplate).withConfig({
  displayName: "_GraphNodeStatic__LabelMinorStandard",
  componentId: "sc-xnsael-7"
})(["color:", ";font-size:", ";margin-top:-7px;"], function (props) {
  return props.contrastMode ? props.theme.colors.black : props.theme.colors.purple600;
}, function (props) {
  return props.theme.fontSizes.small;
});
var GraphNodeStatic = /*#__PURE__*/function (_React$PureComponent) {
  function GraphNodeStatic() {
    var _this;
    _classCallCheck(this, GraphNodeStatic);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, GraphNodeStatic, [].concat(args));
    _defineProperty(_this, "handleMouseEnter", function (ev) {
      _this.props.onMouseEnter(_this.props.id, ev);
    });
    _defineProperty(_this, "handleMouseLeave", function (ev) {
      _this.props.onMouseLeave(_this.props.id, ev);
    });
    _defineProperty(_this, "handleClick", function (ev) {
      _this.props.onClick(_this.props.id, ev);
    });
    return _this;
  }
  _inherits(GraphNodeStatic, _React$PureComponent);
  return _createClass(GraphNodeStatic, [{
    key: "renderSvgLabels",
    value: function renderSvgLabels() {
      return /*#__PURE__*/_react["default"].createElement(SvgTextContainer, {
        y: this.props.labelOffset
      }, /*#__PURE__*/_react["default"].createElement(LabelSvg, {
        contrastMode: this.props.contrastMode
      }, this.props.label), /*#__PURE__*/_react["default"].createElement(LabelMinorSvg, {
        contrastMode: this.props.contrastMode
      }, this.props.labelMinor));
    }
  }, {
    key: "renderStandardLabels",
    value: function renderStandardLabels() {
      var _this$props = this.props,
        label = _this$props.label,
        labelMinor = _this$props.labelMinor,
        highlighted = _this$props.highlighted,
        contrastMode = _this$props.contrastMode,
        labelOffset = _this$props.labelOffset,
        searchTerms = _this$props.searchTerms;
      return /*#__PURE__*/_react["default"].createElement("foreignObject", {
        y: nodeBaseSize / 2 + labelOffset,
        x: -0.5 * labelWidth,
        width: labelWidth,
        height: "200px",
        style: {
          pointerEvents: 'none',
          textAlign: 'center'
        }
      }, /*#__PURE__*/_react["default"].createElement(LabelsStandardContainer, null, /*#__PURE__*/_react["default"].createElement(LabelStandard, {
        highlighted: highlighted,
        contrastMode: contrastMode
      }, /*#__PURE__*/_react["default"].createElement(_MatchedText["default"], {
        text: label,
        matches: searchTerms
      })), !(0, _isEmpty2["default"])(labelMinor) && /*#__PURE__*/_react["default"].createElement(LabelMinorStandard, {
        highlighted: highlighted,
        contrastMode: contrastMode
      }, /*#__PURE__*/_react["default"].createElement(_MatchedText["default"], {
        text: labelMinor,
        matches: searchTerms
      })), this.props.renderAppendedInfo()));
    }
  }, {
    key: "render",
    value: function render() {
      var Shape = shapes[this.props.shape];
      var Tag = tags[this.props.tag];
      return /*#__PURE__*/_react["default"].createElement(GraphNodeWrapper, {
        cursorType: this.props.cursorType,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.handleClick
      }, this.props.renderPrependedInfo(), this.props.forceSvg ? this.renderSvgLabels() : this.renderStandardLabels(), /*#__PURE__*/_react["default"].createElement(Shape, {
        id: this.props.id,
        size: nodeBaseSize,
        stacked: this.props.stacked,
        color: this.props.color,
        metricColor: this.props.metricColor,
        metricFormattedValue: this.props.metricFormattedValue,
        metricNumericValue: this.props.metricNumericValue,
        highlighted: this.props.highlighted,
        contrastMode: this.props.contrastMode
      }), /*#__PURE__*/_react["default"].createElement(Tag, {
        contrastMode: this.props.contrastMode
      }));
    }
  }]);
}(_react["default"].PureComponent);
GraphNodeStatic.propTypes = {
  color: _propTypes["default"].string.isRequired,
  contrastMode: _propTypes["default"].bool.isRequired,
  cursorType: _propTypes["default"].string.isRequired,
  forceSvg: _propTypes["default"].bool.isRequired,
  highlighted: _propTypes["default"].bool.isRequired,
  id: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  labelMinor: _propTypes["default"].string.isRequired,
  labelOffset: _propTypes["default"].number.isRequired,
  metricColor: _propTypes["default"].string.isRequired,
  metricFormattedValue: _propTypes["default"].string.isRequired,
  metricNumericValue: _propTypes["default"].number.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onMouseEnter: _propTypes["default"].func.isRequired,
  onMouseLeave: _propTypes["default"].func.isRequired,
  renderAppendedInfo: _propTypes["default"].func.isRequired,
  renderPrependedInfo: _propTypes["default"].func.isRequired,
  searchTerms: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  shape: _propTypes["default"].oneOf((0, _keys2["default"])(shapes)).isRequired,
  stacked: _propTypes["default"].bool.isRequired,
  tag: _propTypes["default"].oneOf((0, _keys2["default"])(tags)).isRequired
};
var _default = exports["default"] = GraphNodeStatic;
//# sourceMappingURL=_GraphNodeStatic.js.map