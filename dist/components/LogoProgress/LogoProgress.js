"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
var diagonalStripes = (0, _styledComponents.keyframes)(["0%{opacity:1;}20%{-webkit-transform:translateX(0px) translateY(0px);opacity:1;}48%{-webkit-transform:translateX(150px) translateY(-150px);opacity:1;}50%{opacity:0;}59%{-webkit-transform:translateX(-150px) translateY(150px);opacity:0;}60%{opacity:0.7;}100%{-webkit-transform:translateX(0px) translateY(0px);opacity:1;}"]);
var verticalStripes = (0, _styledComponents.keyframes)(["0%{opacity:1;}20%{-webkit-transform:translateY(0px);opacity:1;}48%{-webkit-transform:translateY(150px);opacity:1;}50%{opacity:0;}59%{-webkit-transform:translateY(-150px);opacity:0;}60%{opacity:0.7;}100%{-webkit-transform:translateY(0px);opacity:1;}"]);
var WeaveLogoProgress = _styledComponents["default"].div.withConfig({
  displayName: "LogoProgress__WeaveLogoProgress",
  componentId: "sc-1qhizh5-0"
})(["display:block;border-radius:", ";width:150px;height:150px;overflow:hidden;.st0{fill:", ";}.st1{fill:", ";}.st2{fill:", ";}.a,.e{-webkit-animation:", " 1.25s ease-in-out 0s infinite both;}.c{-webkit-animation:", " 1.25s ease-in-out 0.1s infinite both;}.b{-webkit-animation:", " 1.25s ease-in-out 0.15s infinite both;}.f{-webkit-animation:", " 1.25s ease-in-out 0.15s infinite both;}.d{-webkit-animation:", " 1.25s ease-in-out 0.25s infinite both;}"], function (props) {
  return props.theme.borderRadius.circle;
}, function (props) {
  return props.theme.colors.purple900;
}, function (props) {
  return props.theme.colors.blue400;
}, function (props) {
  return props.theme.colors.orange500;
}, diagonalStripes, diagonalStripes, diagonalStripes, verticalStripes, verticalStripes);

/**
 * Intederminate spinner used for page-level loading eg. login, logout
 * ```javascript
 * import React from 'react';
 * import { LogoProgress } from 'weaveworks-ui-components'
 *
 * React.render(
 *   <LogoProgress />
 * );
 * ```
 */
var LogoProgress = /*#__PURE__*/function (_React$Component) {
  function LogoProgress() {
    _classCallCheck(this, LogoProgress);
    return _callSuper(this, LogoProgress, arguments);
  }
  _inherits(LogoProgress, _React$Component);
  return _createClass(LogoProgress, [{
    key: "render",
    value: function render() {
      var _this$props$size = this.props.size,
        size = _this$props$size === void 0 ? 150 : _this$props$size;
      var styles = {
        height: size,
        width: size
      };
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles
      }, /*#__PURE__*/_react["default"].createElement(WeaveLogoProgress, null, /*#__PURE__*/_react["default"].createElement("svg", null, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        className: "st0 a",
        d: "M43.2,54.1L1.1,91.7c1.9,7.6,4.9,14.7,8.9,21.1l33.2-29.7V54.1z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "st1 b",
        d: "M83.5,119.9L83.5,119.9l-21.7,19.4v7.9c3.6,0.5,7.3,0.8,11.1,0.8c4.4,0,8.7-0.4,12.9-1.1l58-51.8 c2-6.7,3-13.7,3-21c0-3.4-0.3-6.8-0.7-10.1L83.5,119.9z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "st2 c",
        d: "M38.5,139.2l103.7-92.6c-2.8-6.9-6.6-13.4-11.2-19.1l-109,99.7L38.5,139.2z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "st1 d",
        d: "M83.7,147.2V0.8C80.2,0.3,76.7,0,73.1,0C69.3,0,65.6,0.3,62,0.8v146.3L83.7,147.2z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "st0 e",
        d: "M43.2,83.2l75.4-67.4c-6-4.7-12.7-8.5-20-11.2L43.2,54.1V83.2z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        className: "st2 f",
        d: "M43.2,109.8v-4.3V6.2c-8.1,3.6-15.4,8.5-21.7,14.6v106.4c4.9,4.7,10.4,8.8,16.4,12l0,0L43.2,109.8z"
      })))));
    }
  }]);
}(_react["default"].Component);
var _default = exports["default"] = LogoProgress;
//# sourceMappingURL=LogoProgress.js.map