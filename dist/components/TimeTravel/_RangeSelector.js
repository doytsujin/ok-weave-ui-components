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
var HEIGHT_PX = 29;
var RangeSelectorWrapper = _styledComponents["default"].div.withConfig({
  displayName: "_RangeSelector__RangeSelectorWrapper",
  componentId: "sc-1wrqtw2-0"
})(["border-left:1px solid ", ";min-width:75px;"], function (props) {
  return props.theme.colors.gray200;
});
var SelectedRangeWrapper = _styledComponents["default"].div.withConfig({
  displayName: "_RangeSelector__SelectedRangeWrapper",
  componentId: "sc-1wrqtw2-1"
})(["background-color:transparent;cursor:pointer;padding:", " ", ";display:flex;justify-content:space-between;line-height:21px;"], (0, _selectors.spacing)('xxs'), (0, _selectors.spacing)('xs'));
var SelectedRange = _styledComponents["default"].div.withConfig({
  displayName: "_RangeSelector__SelectedRange",
  componentId: "sc-1wrqtw2-2"
})(["color:", ";"], function (props) {
  return props.theme.colors.purple900;
});
var RangeOptionsListWrapper = _styledComponents["default"].div.withConfig({
  displayName: "_RangeSelector__RangeOptionsListWrapper",
  componentId: "sc-1wrqtw2-3"
})(["z-index:", ";position:fixed;top:0;bottom:0;right:0;left:0;"], function (props) {
  return props.theme.layers.dropdown;
});
var RangeOptionsList = _styledComponents["default"].div.withConfig({
  displayName: "_RangeSelector__RangeOptionsList",
  componentId: "sc-1wrqtw2-4"
})(["background-color:", ";border:1px solid ", ";color:", ";box-sizing:border-box;position:absolute;text-align:left;"], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.gray200;
}, function (props) {
  return props.theme.colors.purple900;
});
var CaretIconsContainer = _styledComponents["default"].span.withConfig({
  displayName: "_RangeSelector__CaretIconsContainer",
  componentId: "sc-1wrqtw2-5"
})(["display:flex;flex-direction:column;justify-content:center;margin-left:", ";i{font-size:", ";line-height:7px;}"], (0, _selectors.spacing)('xs'), function (props) {
  return props.theme.fontSizes.tiny;
});
var RangeOption = _styledComponents["default"].div.withConfig({
  displayName: "_RangeSelector__RangeOption",
  componentId: "sc-1wrqtw2-6"
})(["line-height:", "px;cursor:pointer;padding:", " ", ";&:hover{background-color:", ";}", ";"], HEIGHT_PX, (0, _selectors.spacing)('none'), (0, _selectors.spacing)('xs'), function (props) {
  return props.theme.colors.gray50;
}, function (props) {
  return props.selected && "\n    color: ".concat(props.theme.colors.blue400, ";\n  ");
});
var rangeOptions = [{
  label: '15min',
  valueMs: _moment["default"].duration(15, 'minutes').asMilliseconds()
}, {
  label: '30min',
  valueMs: _moment["default"].duration(30, 'minutes').asMilliseconds()
}, {
  label: '1h',
  valueMs: _moment["default"].duration(1, 'hour').asMilliseconds()
}, {
  label: '3h',
  valueMs: _moment["default"].duration(3, 'hours').asMilliseconds()
}, {
  label: '6h',
  valueMs: _moment["default"].duration(6, 'hours').asMilliseconds()
}, {
  label: '24h',
  valueMs: _moment["default"].duration(24, 'hours').asMilliseconds()
}, {
  label: '7d',
  valueMs: _moment["default"].duration(7, 'days').asMilliseconds()
}];
var RangeSelector = /*#__PURE__*/function (_React$Component) {
  function RangeSelector(props, context) {
    var _this;
    _classCallCheck(this, RangeSelector);
    _this = _callSuper(this, RangeSelector, [props, context]);
    _this.state = {
      isOpen: false
    };
    _this.saveNodeRef = _this.saveNodeRef.bind(_this);
    _this.handleDropDownClick = _this.handleDropDownClick.bind(_this);
    _this.handleBackgroundClick = _this.handleBackgroundClick.bind(_this);
    return _this;
  }
  _inherits(RangeSelector, _React$Component);
  return _createClass(RangeSelector, [{
    key: "handleDropDownClick",
    value: function handleDropDownClick() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "handleBackgroundClick",
    value: function handleBackgroundClick() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "saveNodeRef",
    value: function saveNodeRef(ref) {
      this.containerRef = ref;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var rangeMs = this.props.rangeMs;
      var isOpen = this.state.isOpen;
      var selectedRangeIndex = rangeOptions.findIndex(function (r) {
        return r.valueMs === rangeMs;
      });
      var selectedRangeLabel = rangeOptions.find(function (r) {
        return r.valueMs === rangeMs;
      }).label;
      var anchorEl = this.containerRef && this.containerRef.getBoundingClientRect();
      var menuStyle = anchorEl ? {
        left: anchorEl.right - anchorEl.width,
        minWidth: anchorEl.width + 1,
        top: anchorEl.top - selectedRangeIndex * HEIGHT_PX - 1
      } : {};
      return /*#__PURE__*/_react["default"].createElement(RangeSelectorWrapper, {
        ref: this.saveNodeRef
      }, /*#__PURE__*/_react["default"].createElement(SelectedRangeWrapper, {
        onClick: this.handleDropDownClick
      }, /*#__PURE__*/_react["default"].createElement(SelectedRange, null, selectedRangeLabel), /*#__PURE__*/_react["default"].createElement(CaretIconsContainer, null, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-caret-up"
      }), /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-caret-down"
      }))), isOpen && /*#__PURE__*/_react["default"].createElement(RangeOptionsListWrapper, {
        onClick: this.handleBackgroundClick
      }, /*#__PURE__*/_react["default"].createElement(RangeOptionsList, {
        style: menuStyle
      }, rangeOptions.map(function (_ref) {
        var valueMs = _ref.valueMs,
          label = _ref.label;
        return /*#__PURE__*/_react["default"].createElement(RangeOption, {
          key: valueMs,
          selected: valueMs === rangeMs,
          onClick: function onClick() {
            return _this2.props.onChange(valueMs);
          }
        }, label);
      }))));
    }
  }]);
}(_react["default"].Component);
RangeSelector.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  rangeMs: _propTypes["default"].number.isRequired
};
var _default = exports["default"] = RangeSelector;
//# sourceMappingURL=_RangeSelector.js.map