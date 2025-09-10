"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _keys2 = _interopRequireDefault(require("lodash/keys"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactMotion = require("react-motion");
var _theme = _interopRequireDefault(require("../../theme"));
var _GraphNodeStatic = _interopRequireWildcard(require("./_GraphNodeStatic"));
var _excluded = ["x", "y", "size", "graphNodeRef"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
function weakSpring(value) {
  return (0, _reactMotion.spring)(value, {
    damping: 18,
    precision: 1,
    stiffness: 100
  });
}

/**
 * A component for rendering labeled graph nodes.
 */
var GraphNode = /*#__PURE__*/function (_React$PureComponent) {
  function GraphNode() {
    _classCallCheck(this, GraphNode);
    return _callSuper(this, GraphNode, arguments);
  }
  _inherits(GraphNode, _React$PureComponent);
  return _createClass(GraphNode, [{
    key: "renderNode",
    value: function renderNode(props) {
      var x = props.x,
        y = props.y,
        size = props.size,
        graphNodeRef = props.graphNodeRef,
        otherProps = _objectWithoutProperties(props, _excluded);
      return /*#__PURE__*/_react["default"].createElement("g", {
        ref: graphNodeRef,
        transform: "translate(".concat(x, ",").concat(y, ") scale(").concat(size / _GraphNodeStatic.nodeBaseSize, ")")
      }, /*#__PURE__*/_react["default"].createElement(_GraphNodeStatic["default"], otherProps));
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      if (!this.props.isAnimated) {
        return this.renderNode(this.props);
      }
      return (
        /*#__PURE__*/
        // Animate only the position and size props.
        _react["default"].createElement(_reactMotion.Motion, {
          style: {
            size: weakSpring(this.props.size),
            x: weakSpring(this.props.x),
            y: weakSpring(this.props.y)
          }
        }, function (interpolated) {
          return _this.renderNode(_objectSpread(_objectSpread({}, _this.props), interpolated));
        })
      );
    }
  }]);
}(_react["default"].PureComponent);
GraphNode.propTypes = {
  /**
   * The color of the node in any of the standard formats
   */
  color: _propTypes["default"].string,
  /**
   * Renders the node in a high contrast mode
   */
  contrastMode: _propTypes["default"].bool,
  /**
   * The cursor type shown on hovering over the node
   */
  cursorType: _propTypes["default"].string,
  /**
   * Displays all the node labels as SVG elements
   */
  forceSvg: _propTypes["default"].bool,
  /**
   * A callback to which the GraphNode `ref` will be passed.
   */
  graphNodeRef: _propTypes["default"].func,
  /**
   * If true, shows the glow around the node as well as its metric data
   */
  highlighted: _propTypes["default"].bool,
  /**
   * A unique node ID
   */
  id: _propTypes["default"].string.isRequired,
  /**
   * Animates the node motion if true
   */
  isAnimated: _propTypes["default"].bool,
  /**
   * The node main label displayed right under the node shape
   */
  label: _propTypes["default"].string.isRequired,
  /**
   * Secondary label displayed below the main label in a smaller font
   */
  labelMinor: _propTypes["default"].string,
  /**
   * Vertical offset (in pixels) of the labels
   */
  labelOffset: _propTypes["default"].number,
  /**
   * The background color of the node metric fill
   */
  metricColor: _propTypes["default"].string,
  /**
   * The formatted metric value to be displayed inside the node when highlighted
   */
  metricFormattedValue: _propTypes["default"].string,
  /**
   * The numeric value in the interval [0, 1] representing the amount of metric fill
   */
  metricNumericValue: _propTypes["default"].number,
  /**
   * Callback for mouse click on the node
   */
  onClick: _propTypes["default"].func,
  /**
   * Callback for mouse pointer entering the node
   */
  onMouseEnter: _propTypes["default"].func,
  /**
   * Callback for mouse pointer leaving the node
   */
  onMouseLeave: _propTypes["default"].func,
  /**
   * Render function for the info to be displayed after node labels (not working in full SVG mode)
   */
  renderAppendedInfo: _propTypes["default"].func,
  /**
   * Render function for the info to be displayed before node labels (not working in full SVG mode)
   */
  renderPrependedInfo: _propTypes["default"].func,
  /**
   * Search terms to be applied on the node
   */
  searchTerms: _propTypes["default"].arrayOf(_propTypes["default"].string),
  /**
   * Shape of the rendered node (e.g. 'hexagon')
   */
  shape: _propTypes["default"].oneOf((0, _keys2["default"])(_GraphNodeStatic.shapes)).isRequired,
  /**
   * The radius of the shape in pixels
   */
  size: _propTypes["default"].number,
  /**
   * Shows a stack of nodes instead of a singular node if true
   */
  stacked: _propTypes["default"].bool,
  /**
   * An optional tag icon attached to the shape
   */
  tag: _propTypes["default"].oneOf((0, _keys2["default"])(_GraphNodeStatic.tags)),
  /**
   * x-coordinate position of the node
   */
  x: _propTypes["default"].number,
  /**
   * y-coordinate position of the node
   */
  y: _propTypes["default"].number
};
GraphNode.defaultProps = {
  color: _theme["default"].colors.purple400,
  contrastMode: false,
  cursorType: 'pointer',
  forceSvg: false,
  graphNodeRef: undefined,
  highlighted: false,
  isAnimated: false,
  labelMinor: '',
  labelOffset: 0,
  metricColor: _theme["default"].colors.yellow500,
  metricFormattedValue: '',
  metricNumericValue: NaN,
  onClick: _noop2["default"],
  onMouseEnter: _noop2["default"],
  onMouseLeave: _noop2["default"],
  renderAppendedInfo: _noop2["default"],
  renderPrependedInfo: _noop2["default"],
  searchTerms: [],
  size: _GraphNodeStatic.nodeBaseSize,
  stacked: false,
  tag: 'none',
  x: 0,
  y: 0
};
var _default = exports["default"] = GraphNode;
//# sourceMappingURL=GraphNode.js.map