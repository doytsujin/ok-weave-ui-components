"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _omit2 = _interopRequireDefault(require("lodash/omit"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _selectors = require("../../theme/selectors");
var _excluded = ["className", "hideValidationMessage", "id", "inputRef", "label", "message", "textarea", "valid"];
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
var placeholder = function placeholder(property, content) {
  return (0, _styledComponents.css)(["&::-webkit-input-placeholder{", ":", ";}&::-moz-placeholder{", ":", ";}&:-moz-placeholder{", ":", ";}&:-ms-input-placeholder{", ":", ";}"], property, content, property, content, property, content, property, content);
};
var Icon = _styledComponents["default"].i.withConfig({
  displayName: "Input__Icon",
  componentId: "sc-1qr5ihg-0"
})(["position:absolute;right:10px;visibility:", ";color:", ";"], function (props) {
  return props.visible ? 'visible' : 'hidden';
}, function (props) {
  return props.theme.colors.orange600;
});
var InputWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Input__InputWrapper",
  componentId: "sc-1qr5ihg-1"
})(["position:relative;display:flex;align-items:center;height:36px;margin-top:", ";", ";input{", ";", ";padding-right:", ";padding-left:", ";width:100%;line-height:36px;box-shadow:none;background-color:", ";border:1px solid ", ";border-radius:", ";height:36px;box-sizing:border-box;&:disabled{", ";background-color:", ";}}"], (0, _selectors.spacing)('xs'), function (_ref) {
  var hasLabel = _ref.hasLabel;
  return !hasLabel && "margin-top: 0px";
}, function (props) {
  return placeholder('color', props.theme.colors.gray600);
}, placeholder('opacity', 1), function (props) {
  return props.valid ? (0, _selectors.spacing)('small') : (0, _selectors.spacing)('large');
}, (0, _selectors.spacing)('small'), function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.gray600;
}, function (props) {
  return props.theme.borderRadius.soft;
}, placeholder('opacity', 0.5), function (props) {
  return props.theme.colors.gray50;
});
var StyledInput = function StyledInput(component) {
  return (0, _styledComponents["default"])(component).withConfig({
    displayName: "Input",
    componentId: "sc-1qr5ihg-2"
  })(["padding:", ";"], (0, _selectors.spacing)('xs'));
};
var ValidationMessage = _styledComponents["default"].span.withConfig({
  displayName: "Input__ValidationMessage",
  componentId: "sc-1qr5ihg-3"
})(["display:", ";padding-left:", ";margin-top:", ";font-size:", ";text-align:left;color:", ";visibility:", ";"], function (props) {
  return props.remove || !props.visible ? 'none' : 'block';
}, (0, _selectors.spacing)('xs'), (0, _selectors.spacing)('xs'), function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.valid ? 'inherit' : props.theme.colors.orange600;
}, function (props) {
  return props.visible ? 'visible' : 'hidden';
});

/**
 * An input field that shows validation information.
 * Any normal `<input />` props can be used, such as `onChange`.
 *
 * The `<Input />` component itself does not do any validation.
 * Validation should be done externally.
 *
 * ```javascript
 *  <div>
 *    <Input label="Username" placeholder="your name here" />
 *    <Input label="Email" value="ron@hogwarts.edu" />
 *  </div>
 *  <div>
 *    <Input
 *      label="Email"
 *      value="invalid-email"
 *      valid={false}
 *      message="Bro, do you even email?"
 *      onChange={ev => console.log(ev.target.value)}
 *    />
 *    <Input label="Password" type="password" />
 *  </div>
 * ```
 *
 */
var Input = /*#__PURE__*/function (_React$Component) {
  function Input() {
    _classCallCheck(this, Input);
    return _callSuper(this, Input, arguments);
  }
  _inherits(Input, _React$Component);
  return _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
        focus = _this$props.focus,
        autoSelectText = _this$props.autoSelectText,
        value = _this$props.value;
      if (focus) {
        this.getInputNode().focus();
      }
      if (autoSelectText && value) {
        this.getInputNode().setSelectionRange(0, value.length);
      }
    }
  }, {
    key: "getInputNode",
    value: function getInputNode() {
      return _reactDom["default"].findDOMNode(this.input); // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      var _this$props2 = this.props,
        className = _this$props2.className,
        hideValidationMessage = _this$props2.hideValidationMessage,
        id = _this$props2.id,
        inputRef = _this$props2.inputRef,
        label = _this$props2.label,
        message = _this$props2.message,
        textarea = _this$props2.textarea,
        valid = _this$props2.valid,
        inputProps = _objectWithoutProperties(_this$props2, _excluded);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className
      }, label && /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: id
      }, label), /*#__PURE__*/_react["default"].createElement(InputWrapper, {
        valid: valid,
        hasLabel: Boolean(label)
      }, /*#__PURE__*/_react["default"].createElement(textarea ? 'textarea' : 'input', _objectSpread(_objectSpread({}, (0, _omit2["default"])(inputProps, 'autoSelectText', 'focus')), {}, {
        ref: function ref(elem) {
          _this.input = elem;
          inputRef(elem);
        }
      })), /*#__PURE__*/_react["default"].createElement(Icon, {
        visible: !valid,
        className: "fa fa-times-circle"
      })), /*#__PURE__*/_react["default"].createElement(ValidationMessage, {
        remove: hideValidationMessage,
        valid: valid,
        visible: message && !valid
      }, message));
    }
  }]);
}(_react["default"].Component);
Input.propTypes = {
  /*
   * Select the text inside the input. Requires focus attribute to be true
   */
  autoSelectText: _propTypes["default"].bool,
  /*
   * Focus the input on render
   */
  focus: _propTypes["default"].bool,
  /*
   * Remove the validation message from the DOM
   */
  hideValidationMessage: _propTypes["default"].bool,
  /**
   * A callback to which the input `ref` will be passed.
   */
  inputRef: _propTypes["default"].func,
  /**
   * The label that will appear above the input field
   */
  label: _propTypes["default"].string,
  /**
   * A message that will appear below the field; used to indicate validity.
   * This will not appear if `valid` is truthy.
   */
  message: _propTypes["default"].any,
  /**
   * Callback to run when the input is edited by the user
   */
  onChange: _propTypes["default"].func,
  /**
   * Use a `textarea` element instead of an `input` element
   */
  textarea: _propTypes["default"].bool,
  /**
   * Whether or not the form value is valid. The icon will not appear when `valid` is truthy.
   */
  valid: _propTypes["default"].bool
};
Input.defaultProps = {
  autoSelectText: false,
  focus: false,
  hideValidationMessage: false,
  inputRef: _noop2["default"],
  label: '',
  message: '',
  onChange: _noop2["default"],
  textarea: false,
  valid: true
};
var _default = exports["default"] = StyledInput(Input);
//# sourceMappingURL=Input.js.map