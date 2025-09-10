"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _last2 = _interopRequireDefault(require("lodash/last"));
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _without2 = _interopRequireDefault(require("lodash/without"));
var _includes2 = _interopRequireDefault(require("lodash/includes"));
var _map2 = _interopRequireDefault(require("lodash/map"));
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRequiredIf = _interopRequireDefault(require("react-required-if"));
var _compose = require("../../utils/compose");
var _Input = _interopRequireDefault(require("../Input"));
var _Dropdown = _interopRequireDefault(require("../Dropdown"));
var _SearchTerm = _interopRequireDefault(require("./_SearchTerm"));
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
var TermsContainer = _styledComponents["default"].ul.withConfig({
  displayName: "Search__TermsContainer",
  componentId: "sc-1yq96i0-0"
})(["list-style:none;display:flex;margin:0;padding:0;flex-wrap:wrap;", ";"], function (props) {
  return props.disabled && 'opacity: 0.75;';
});
var Icon = _styledComponents["default"].i.withConfig({
  displayName: "Search__Icon",
  componentId: "sc-1yq96i0-1"
})(["padding:0 6px 0 10px;", ";"], function (props) {
  return props.disabled && "color: ".concat(props.theme.colors.gray600, ";");
});
var SearchInput = _styledComponents["default"].div.withConfig({
  displayName: "Search__SearchInput",
  componentId: "sc-1yq96i0-2"
})(["display:flex;flex-wrap:wrap;flex:3;width:100%;"]);
var Styled = function Styled(component) {
  return (0, _styledComponents["default"])(component).withConfig({
    displayName: "Search",
    componentId: "sc-1yq96i0-3"
  })(["position:relative;display:flex;", " background-color:", ";border:1px solid ", ";border-radius:", ";font-size:", ";align-items:center;div,input{border:0;}", ",", "{padding:0;margin:0;}", "{flex:1;line-height:36px;border-left:1px solid ", ";.dropdown-popover{width:auto;}}", "{flex:2;width:100%;input{padding:0 8px;width:100%;}input:focus{outline:none;}}"], function (props) {
    return props.disabled && "pointer-events: none;";
  }, function (props) {
    return props.theme.colors[props.disabled ? 'gray50' : 'white'];
  }, function (props) {
    return props.theme.colors.purple100;
  }, function (props) {
    return props.theme.borderRadius.soft;
  }, function (props) {
    return props.theme.fontSizes.normal;
  }, _Input["default"], _Dropdown["default"], _Dropdown["default"], function (props) {
    return props.theme.colors.gray200;
  }, _Input["default"]);
};
var Search = /*#__PURE__*/function (_React$PureComponent) {
  function Search() {
    var _this;
    _classCallCheck(this, Search);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Search, [].concat(args));
    _defineProperty(_this, "addSearchTerm", function (value) {
      var nextPinnedTerms = _this.props.pinnedTerms;
      // only push unique values
      if (!(0, _includes2["default"])(nextPinnedTerms, value)) {
        nextPinnedTerms = [].concat(_toConsumableArray(nextPinnedTerms), [value]);
        _this.props.onPin(nextPinnedTerms);
      }
      _this.props.onChange('', nextPinnedTerms);
    });
    _defineProperty(_this, "removeSearchTerm", function (value) {
      var nextPinnedTerms = (0, _without2["default"])(_this.props.pinnedTerms, value);
      _this.props.onChange(_this.props.query, nextPinnedTerms);
    });
    _defineProperty(_this, "handleInputKeyPress", function (ev) {
      if (ev.key === 'Enter' && _this.props.query.length > 0) {
        ev.preventDefault();
        _this.addSearchTerm(_this.props.query);
      } else if (ev.key === 'Backspace' && _this.props.query === '') {
        ev.preventDefault();
        var term = (0, _last2["default"])(_this.props.pinnedTerms);
        if (term) {
          // Allow the user to edit the text of the last term instead of removing the whole thing.
          _this.removeSearchTerm(term);
        }
      }
    });
    _defineProperty(_this, "handleInputChange", function (ev) {
      _this.props.onChange(ev.target.value, _this.props.pinnedTerms);
    });
    _defineProperty(_this, "handleFilterChange", function (ev, value) {
      _this.input.focus();
      _this.props.onFilterSelect(value);
    });
    return _this;
  }
  _inherits(Search, _React$PureComponent);
  return _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        className = _this$props.className,
        filters = _this$props.filters,
        placeholder = _this$props.placeholder,
        query = _this$props.query,
        pinnedTerms = _this$props.pinnedTerms,
        disabled = _this$props.disabled;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, /*#__PURE__*/_react["default"].createElement(Icon, {
        className: "fa fa-search",
        disabled: disabled
      }), /*#__PURE__*/_react["default"].createElement(SearchInput, null, /*#__PURE__*/_react["default"].createElement(TermsContainer, {
        disabled: disabled
      }, (0, _map2["default"])(pinnedTerms, function (term) {
        return /*#__PURE__*/_react["default"].createElement(_SearchTerm["default"], {
          key: term,
          term: term,
          onRemove: _this2.removeSearchTerm
        });
      })), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
        hideValidationMessage: true,
        onChange: this.handleInputChange,
        value: query,
        onKeyDown: this.handleInputKeyPress,
        onBlur: this.props.onBlur,
        onFocus: this.props.onFocus,
        inputRef: function inputRef(ref) {
          _this2.input = ref;
        },
        placeholder: pinnedTerms.length === 0 ? placeholder : null,
        disabled: disabled
      })), !(0, _isEmpty2["default"])(filters) && /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
        items: filters,
        disabled: disabled,
        placeholder: "Filters",
        onChange: this.handleFilterChange
      }));
    }
  }]);
}(_react["default"].PureComponent);
Search.propTypes = {
  /**
   * Disables the component if true
   */
  disabled: _propTypes["default"].bool,
  /**
   * A list of selectable filters to be rendered in a `<Dropdown />`.
   * When an option is clicked, the `value` is added to the search terms.
   * This array will be passed directly to the `items` prop of the `<Dropdown />.
   * If omitted, no dropdown will be rendered.
   */
  filters: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    value: _propTypes["default"].string
  })),
  onBlur: _propTypes["default"].func,
  /**
   * Handler that runs when the text input changes.
   * Returns the text as first argument, and the list of pinned terms as the second.
   */
  onChange: _propTypes["default"].func.isRequired,
  /**
   * Handler that runs when an item from the search filter dropdown is selected
   * Returns the selected filter value.
   */
  onFilterSelect: (0, _reactRequiredIf["default"])(_propTypes["default"].func, function (props) {
    return props.filters.length > 0;
  }),
  onFocus: _propTypes["default"].func,
  /**
   * Handler that runs when a search is pinned or unpinned.
   * Returns an array of the currently pinned terms.
   */
  onPin: _propTypes["default"].func,
  /**
   * The initial pinned terms of the search field.
   * Changes to this prop will be ignored after initial render.
   */
  pinnedTerms: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  /**
   * Text that will be passed to the search input as the placeholder.
   */
  placeholder: _propTypes["default"].string,
  /**
   * The initial value to use to populate the search text field.
   * Changes to this prop will be ignored after initial render.
   */
  query: _propTypes["default"].string.isRequired
};
Search.defaultProps = {
  disabled: false,
  filters: [],
  onBlur: _noop2["default"],
  onFilterSelect: _noop2["default"],
  onFocus: _noop2["default"],
  onPin: _noop2["default"],
  placeholder: 'search'
};
var _default = exports["default"] = (0, _compose.copyPropTypes)(Search, Styled(Search));
//# sourceMappingURL=Search.js.map