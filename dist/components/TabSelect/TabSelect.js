"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _get2 = _interopRequireDefault(require("lodash/get"));
var _find2 = _interopRequireDefault(require("lodash/find"));
var _map2 = _interopRequireDefault(require("lodash/map"));
var _pick2 = _interopRequireDefault(require("lodash/pick"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Tab = _interopRequireDefault(require("./Tab"));
var _TabButton = _interopRequireDefault(require("./_TabButton"));
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
var TabButtons = _styledComponents["default"].div.withConfig({
  displayName: "TabSelect__TabButtons",
  componentId: "sc-11jclhd-0"
})([""]);
var borders = function borders(props) {
  return "\n    border-top-right-radius: ".concat(props.theme.borderRadius.soft, ";\n    border-bottom-right-radius: ").concat(props.theme.borderRadius.soft, ";\n    border-bottom-left-radius: ").concat(props.theme.borderRadius.soft, ";\n    border: 1px solid ").concat(props.theme.colors.purple100, ";\n");
};
var bordersOnlyTop = function bordersOnlyTop(props) {
  return "\n  border-top: 1px solid ".concat(props.theme.colors.purple100, "\n");
};
var TabContent = _styledComponents["default"].div.withConfig({
  displayName: "TabSelect__TabContent",
  componentId: "sc-11jclhd-1"
})(["padding:", ";background-color:", ";", ";"], function (props) {
  return props.small ? props.theme.spacing.small : props.theme.spacing.medium;
}, function (props) {
  return props.secondary ? 'transparent' : props.theme.colors.white;
}, function (props) {
  return props.secondary ? bordersOnlyTop(props) : borders(props);
});
var Styled = function Styled(component) {
  return (0, _styledComponents["default"])(component).withConfig({
    displayName: "TabSelect",
    componentId: "sc-11jclhd-2"
  })([""]);
};
var TabSelect = /*#__PURE__*/function (_React$PureComponent) {
  function TabSelect() {
    var _this;
    _classCallCheck(this, TabSelect);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, TabSelect, [].concat(args));
    _defineProperty(_this, "state", {
      selectedTab:
      // Use the first tab as the default if no selectedTab prop is specified.
      _this.props.selectedTab || (0, _get2["default"])(_this.props.children, '[0].props.name')
    });
    _defineProperty(_this, "isSelectedTab", function (_ref) {
      var name = _ref.name;
      return name === _this.state.selectedTab;
    });
    _defineProperty(_this, "handleTabClick", function (ev, tabName) {
      _this.setState({
        selectedTab: tabName
      });
      if (_this.props.onChange) {
        _this.props.onChange(ev, tabName);
      }
    });
    return _this;
  }
  _inherits(TabSelect, _React$PureComponent);
  return _createClass(TabSelect, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // Always override user-selected tab with the default one from
      // the prop input (so that URL param can take precedence).
      if (nextProps.selectedTab !== this.props.selectedTab) {
        this.setState({
          selectedTab: nextProps.selectedTab
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        className = _this$props.className,
        children = _this$props.children,
        secondary = _this$props.secondary,
        small = _this$props.small;
      var tabs = _react["default"].Children.map(children, function (child) {
        return (0, _pick2["default"])(child.props, ['label', 'name']);
      });
      var selected = (0, _find2["default"])(children, function (c) {
        return _this2.isSelectedTab(c.props);
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(TabButtons, null, (0, _map2["default"])(tabs, function (tab) {
        return /*#__PURE__*/_react["default"].createElement(_TabButton["default"], {
          key: tab.name,
          name: tab.name,
          selected: _this2.isSelectedTab(tab),
          secondary: secondary,
          small: small,
          onClick: _this2.handleTabClick
        }, tab.label);
      })), /*#__PURE__*/_react["default"].createElement(TabContent, {
        small: small,
        secondary: secondary
      }, selected));
    }
  }]);
}(_react["default"].PureComponent);
TabSelect.propTypes = {
  /**
   * Children of `TabSelect` must be a `Tab` component
   */
  // eslint can't figure out that this is required because of custom checker
  // function and so requires a defaultProp be set
  // eslint-disable-next-line react/require-default-props
  children: function children(props, propName) {
    var error = null;
    if (_react["default"].Children.count === 0) {
      return new Error('You cannot have a TabSelect without any Tabs');
    }
    _react["default"].Children.forEach(props[propName], function (child) {
      if (child.type !== _Tab["default"]) {
        error = new Error("Wrong component supplied to TabSelect. Expected a <Tab />, got a ".concat(child.type));
      }
    });
    return error;
  },
  /**
   * Secondary styling for TabSelect without border around content and
   * transparent background
   */
  secondary: _propTypes["default"].bool,
  /**
   * The tab to show on first render.
   * Supplying a new value to this prop will override the currently selected item
   */
  selectedTab: _propTypes["default"].string,
  /**
   * Small styling for TabSelect
   */
  small: _propTypes["default"].bool
};
TabSelect.defaultProps = {
  secondary: false,
  selectedTab: '',
  small: false
};
var _default = exports["default"] = Styled(TabSelect);
//# sourceMappingURL=TabSelect.js.map