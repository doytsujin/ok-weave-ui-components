"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CopyNotice = void 0;
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _trim2 = _interopRequireDefault(require("lodash/trim"));
var _isString2 = _interopRequireDefault(require("lodash/isString"));
var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _selectors = require("../../theme/selectors");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
var scale = (0, _styledComponents.keyframes)(["0%{transform:scale(0)}90%{transform:scale(1.2)}100%{transform:scale(1)}"]);
var CopyNotice = exports.CopyNotice = _styledComponents["default"].div.withConfig({
  displayName: "Code__CopyNotice",
  componentId: "sc-1no9z1g-0"
})(["position:absolute;top:0;right:0;padding:", ";", ";border-radius:", ";background-color:", ";opacity:0;font-size:", ";color:", ";", ";"], (0, _selectors.spacing)('xs'), function (props) {
  return props.isHovered && 'transition: opacity 300ms ease;';
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.colors.purple800;
}, function (props) {
  return props.theme.fontSizes.small;
}, function (props) {
  return props.theme.colors.purple50;
}, function (props) {
  return props.isCopying && "\n    & > i {\n        transform-origin: center;\n        animation-name: ".concat((0, _styledComponents.css)(scale), ";\n        animation-duration: .4s;\n      }\n  ");
});
var CodeWrapper = _styledComponents["default"].div.withConfig({
  displayName: "Code__CodeWrapper",
  componentId: "sc-1no9z1g-1"
})(["position:relative;background-color:", ";box-sizing:border-box;border-radius:", ";cursor:pointer;&:hover ", "{opacity:0.9;}"], function (props) {
  return props.theme.colors.purple800;
}, function (props) {
  return props.theme.borderRadius.soft;
}, CopyNotice);
var ScrollWrap = _styledComponents["default"].div.withConfig({
  displayName: "Code__ScrollWrap",
  componentId: "sc-1no9z1g-2"
})(["overflow:auto;"]);
var Content = _styledComponents["default"].div.withConfig({
  displayName: "Code__Content",
  componentId: "sc-1no9z1g-3"
})(["flex-grow:1;color:", ";padding:", " ", ";"], function (props) {
  return props.theme.colors.purple50;
}, (0, _selectors.spacing)('xs'), (0, _selectors.spacing)('base'));
var Pre = _styledComponents["default"].pre.withConfig({
  displayName: "Code__Pre",
  componentId: "sc-1no9z1g-4"
})(["margin:", " 0;font-family:", ";font-size:", ";"], (0, _selectors.spacing)('small'), function (props) {
  return props.theme.fontFamilies.monospace;
}, function (props) {
  return props.theme.fontSizes.small;
});
var PaddedLine = _styledComponents["default"].div.withConfig({
  displayName: "Code__PaddedLine",
  componentId: "sc-1no9z1g-5"
})(["&:not(:last-child){padding-bottom:", ";}& > *{display:inline;}"], (0, _selectors.spacing)('xs'));
var trimString = function trimString(node) {
  return (0, _isString2["default"])(node) ? (0, _trim2["default"])(node) : node;
};
var formatSingleCommand = function formatSingleCommand(children) {
  return (0, _isFunction2["default"])(children) ? children() : trimString(children);
};
function formatMultiString(string) {
  return (0, _trim2["default"])(string).split('\n').map(function (line) {
    return /*#__PURE__*/_react["default"].createElement(PaddedLine, {
      key: line
    }, line, '\n');
  });
}
function formatMultiCommand(raw) {
  var children = raw;
  if ((0, _isFunction2["default"])(children)) {
    children = children();
  }
  var count = _react["default"].Children.count(children);
  if (count === 1) {
    return (0, _isString2["default"])(children) ? formatMultiString(children) : children;
  }
  return _react["default"].Children.map(children, function (child, i) {
    return /*#__PURE__*/_react["default"].createElement(PaddedLine, {
      key: i
    }, child, '\n');
  });
}

/**
 * Code allows for easy rendering of code snippets which can easliy be copied to
 * the clipboard by clicking the element or selecting a portion of the code
 */
var Code = /*#__PURE__*/function (_Component) {
  function Code() {
    var _this;
    _classCallCheck(this, Code);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Code, [].concat(args));
    _defineProperty(_this, "state", {
      isCopying: false,
      isHovered: false
    });
    _defineProperty(_this, "componentDidUpdate", function () {
      // reselect text after re-render
      if (_this.state.selectedRange) {
        var prevRange = _this.state.selectedRange;
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(prevRange);
        // clear it for the next interaction
        _this.setState({
          selectedRange: null
        });
      }
    });
    _defineProperty(_this, "handleCopyClick", function () {
      // Create a textarea element in which the text of the code will be copied.
      // Set the value of the textarea, select it to set it as the active element,
      // then copy the value of that element to the clipboard.
      // It's 2017 and this is still the best way to copy text on button click...
      if ((0, _isFunction2["default"])(_this.props.onCopy)) {
        _this.props.onCopy();
      }
      var selection = document.getSelection();
      var selectionString = selection.toString();
      // if user has selected text, save that to state so it can be reselected
      if (selectionString !== '') {
        _this.setState({
          selectedRange: selection.getRangeAt(0)
        });
      }
      var code = selectionString === '' ? _this.preNode.textContent : selectionString;
      var txtArea = document.createElement('textarea');
      // Safari doesn't allow for assigning an object literal to `style`.
      txtArea["class"] = 'hidden-textarea';
      // Make sure the code ends in a newline to execute all the commands in multiline code.
      if (code.charAt(code.length - 1) === '\n') {
        txtArea.value = code;
      } else {
        txtArea.value = "".concat(code, "\n");
      }
      document.body.appendChild(txtArea);
      txtArea.select();
      try {
        document.execCommand('copy');
      } catch (e) {
        throw e;
      }
      document.body.removeChild(txtArea);

      // show the Copied to clipboard notice temporarily
      _this.setState({
        isCopying: true
      });
      setTimeout(function () {
        _this.setState({
          isCopying: false
        });
      }, 3000);
    });
    _defineProperty(_this, "onMouseEnter", function () {
      _this.setState({
        isHovered: true
      });
    });
    _defineProperty(_this, "onMouseLeave", function () {
      _this.setState({
        isCopying: false,
        isHovered: false
      });
    });
    return _this;
  }
  _inherits(Code, _Component);
  return _createClass(Code, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        children = _this$props.children,
        multiCommand = _this$props.multiCommand;
      var _this$state = this.state,
        isCopying = _this$state.isCopying,
        isHovered = _this$state.isHovered;
      var copy = isCopying && isHovered ? /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-check"
      }) : 'Copy to clipboard';
      return /*#__PURE__*/_react["default"].createElement(CodeWrapper, {
        onClick: this.handleCopyClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      }, /*#__PURE__*/_react["default"].createElement(ScrollWrap, null, /*#__PURE__*/_react["default"].createElement(Content, null, /*#__PURE__*/_react["default"].createElement(Pre, {
        ref: function ref(e) {
          _this2.preNode = e;
        }
      }, multiCommand ? formatMultiCommand(children) : formatSingleCommand(children)))), /*#__PURE__*/_react["default"].createElement(CopyNotice, {
        isCopying: isCopying,
        isHovered: isHovered
      }, copy));
    }
  }]);
}(_react.Component);
_defineProperty(Code, "displayName", 'Code');
Code.propTypes = {
  // children can be anything that React can render
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]).isRequired,
  // multiCommand determines if the code lines shall be padded
  multiCommand: _propTypes["default"].bool,
  // onCopy will be called when the CodeWrapper is clicked
  onCopy: _propTypes["default"].func
};
Code.defaultProps = {
  multiCommand: false,
  onCopy: _noop2["default"]
};
var _default = exports["default"] = Code;
//# sourceMappingURL=Code.js.map