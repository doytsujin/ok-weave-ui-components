"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _without2 = _interopRequireDefault(require("lodash/without"));
var _size2 = _interopRequireDefault(require("lodash/size"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var LegendContainer = _styledComponents["default"].div.withConfig({
  displayName: "_Legend__LegendContainer",
  componentId: "sc-2urfaw-0"
})(["opacity:", ";"], function (props) {
  return props.loading ? 0.35 : 1;
});
var LegendItems = _styledComponents["default"].div.withConfig({
  displayName: "_Legend__LegendItems",
  componentId: "sc-2urfaw-1"
})(["color:", ";box-sizing:border-box;display:flex;flex-wrap:wrap;position:relative;padding:10px 0;width:100%;"], function (props) {
  return props.theme.colors.black;
});
var LegendItem = _styledComponents["default"].div.withConfig({
  displayName: "_Legend__LegendItem",
  componentId: "sc-2urfaw-2"
})(["cursor:pointer;display:flex;font-size:", ";align-items:flex-start;padding:2px 22px 2px 7px;margin-right:2px;margin-bottom:2px;border-radius:", ";&:hover{background-color:", ";}", ";"], function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.colors.purple100;
}, function (props) {
  return props.selected && "\n    background-color: ".concat(props.theme.colors.purple100, ";\n  ");
});
var LegendItemName = _styledComponents["default"].span.withConfig({
  displayName: "_Legend__LegendItemName",
  componentId: "sc-2urfaw-3"
})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;max-width:36ch;", ";", ":hover &{", ";}"], function (props) {
  return props.multiLine && "\n    white-space: normal;\n    max-height: 32px;\n  ";
}, LegendItem, function (props) {
  return props.multiLine && // eslint-disable-line
  "\n        max-height: 100%;\n        word-break: break-word;\n        text-overflow: normal;\n    ";
});
var LegendToggle = _styledComponents["default"].span.withConfig({
  displayName: "_Legend__LegendToggle",
  componentId: "sc-2urfaw-4"
})(["color:", ";cursor:pointer;display:block;padding:5px;font-size:", ";width:fit-content;"], function (props) {
  return props.theme.colors.purple400;
}, function (props) {
  return props.theme.fontSizes.normal;
});
var LegendCaret = _styledComponents["default"].span.withConfig({
  displayName: "_Legend__LegendCaret",
  componentId: "sc-2urfaw-5"
})(["margin-left:5px;"]);
var ColorBox = _styledComponents["default"].span.withConfig({
  displayName: "_Legend__ColorBox",
  componentId: "sc-2urfaw-6"
})(["background-color:", ";border-radius:", ";margin-top:5px;margin-right:4px;min-width:13px;height:5px;"], function (props) {
  return props.color;
}, function (props) {
  return props.theme.borderRadius.soft;
});
var Legend = /*#__PURE__*/function (_React$PureComponent) {
  function Legend(props, context) {
    var _this;
    _classCallCheck(this, Legend);
    _this = _callSuper(this, Legend, [props, context]);
    _defineProperty(_this, "handleLegendItemClick", function (ev, series) {
      var selectedKeys = _this.state.selectedKeys;
      if (ev.ctrlKey || ev.metaKey) {
        // If the Ctrl button is pressed while selecting
        // the legend item, simply toggle its presence.
        selectedKeys = _this.seriesSelected(series) ? (0, _without2["default"])(selectedKeys, series.key) : [series.key].concat(_toConsumableArray(selectedKeys)).sort();
      } else {
        // If Ctrl button is not pressed, select only the clicked item,
        // unless it's the only one selected, in which case remove the selection.
        var onlyThisSelected = _this.seriesSelected(series) && selectedKeys.length === 1;
        selectedKeys = onlyThisSelected ? [] : [series.key];
      }
      _this.setState({
        selectedKeys: selectedKeys
      });
      _this.props.onSelectedKeysChange(selectedKeys);
    });
    _defineProperty(_this, "handleLegendItemMouseEnter", function (series) {
      _this.props.onHoveredKeyChange(series.key);
    });
    _defineProperty(_this, "handleLegendItemMouseLeave", function () {
      _this.props.onHoveredKeyChange(null);
    });
    _defineProperty(_this, "handleLegendToggle", function () {
      _this.setState({
        shown: !_this.state.shown
      });
    });
    _defineProperty(_this, "seriesSelected", function (series) {
      return _this.state.selectedKeys.includes(series.key);
    });
    _defineProperty(_this, "seriesHovered", function (series) {
      return _this.props.hoveredKey === series.key;
    });
    _this.state = {
      selectedKeys: props.selectedKeys,
      shown: props.shown
    };
    return _this;
  }
  _inherits(Legend, _React$PureComponent);
  return _createClass(Legend, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.selectedKeys !== nextProps.selectedKeys) {
        this.setState({
          selectedKeys: nextProps.selectedKeys
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var caretIcon = this.state.shown ? 'fa-caret-down' : 'fa-caret-right';
      return /*#__PURE__*/_react["default"].createElement(LegendContainer, {
        loading: this.props.loading
      }, this.props.collapsable && /*#__PURE__*/_react["default"].createElement(LegendToggle, {
        onClick: this.handleLegendToggle
      }, "Legend ", /*#__PURE__*/_react["default"].createElement(LegendCaret, {
        className: "fa ".concat(caretIcon)
      })), this.state.shown && /*#__PURE__*/_react["default"].createElement(LegendItems, null, this.props.multiSeries.map(function (series) {
        var multiLine = (0, _size2["default"])(series.legendNameParts) > 1;
        var selected = _this2.seriesSelected(series);
        var hovered = _this2.seriesHovered(series);
        return /*#__PURE__*/_react["default"].createElement(LegendItem, {
          key: series.key,
          title: series.hoverName.join('\n'),
          onClick: function onClick(ev) {
            return _this2.handleLegendItemClick(ev, series);
          },
          onMouseEnter: function onMouseEnter() {
            return _this2.handleLegendItemMouseEnter(series);
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.handleLegendItemMouseLeave();
          },
          selected: selected
        }, /*#__PURE__*/_react["default"].createElement(ColorBox, {
          color: series.color
        }), /*#__PURE__*/_react["default"].createElement(LegendItemName, {
          multiLine: multiLine
        }, series.legendNameParts.join('\n')), _this2.props.renderItemSuffix(series, {
          hovered: hovered,
          selected: selected
        }));
      })));
    }
  }]);
}(_react["default"].PureComponent);
Legend.propTypes = {
  collapsable: _propTypes["default"].bool.isRequired,
  hoveredKey: _propTypes["default"].string,
  loading: _propTypes["default"].bool.isRequired,
  multiSeries: _propTypes["default"].array.isRequired,
  onHoveredKeyChange: _propTypes["default"].func.isRequired,
  onSelectedKeysChange: _propTypes["default"].func.isRequired,
  renderItemContent: _propTypes["default"].func.isRequired,
  selectedKeys: _propTypes["default"].array.isRequired,
  shown: _propTypes["default"].bool.isRequired
};
Legend.defaultProps = {
  hoveredKey: null
};
var _default = exports["default"] = Legend;
//# sourceMappingURL=_Legend.js.map