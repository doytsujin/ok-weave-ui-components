"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _moment = _interopRequireDefault(require("moment"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// NOTE (fbarl): For some reason, doing the animation with
// opacity looks buggy on my Chrome on deep zoom levels.
/* stylelint-disable color-no-hex */
var blinking = (0, _styledComponents.keyframes)(["0%{background-color:transparent;}50%{background-color:#fff;}100%{background-color:transparent;}"]);
/* stylelint-enable color-no-hex */

var TimelineLoaderOverlay = _styledComponents["default"].div.attrs(function (_ref) {
  var x = _ref.x,
    width = _ref.width;
  return {
    style: {
      left: "".concat(x, "px"),
      width: width
    }
  };
}).withConfig({
  displayName: "_TimelineLoader__TimelineLoaderOverlay",
  componentId: "sc-a15nuo-0"
})(["animation:", " 2s linear infinite;pointer-events:none;position:absolute;opacity:0.65;height:100%;"], blinking);
var TimelineLoader = function TimelineLoader(_ref2) {
  var timeScale = _ref2.timeScale,
    startAt = _ref2.startAt,
    endAt = _ref2.endAt,
    width = _ref2.width;
  var endShift = endAt ? Math.min(timeScale((0, _moment["default"])(endAt)), width) : width;
  var startShift = startAt ? Math.max(timeScale((0, _moment["default"])(startAt)), -width) : -width;
  var length = endShift - startShift;
  return /*#__PURE__*/_react["default"].createElement(TimelineLoaderOverlay, {
    x: startShift,
    width: length
  });
};
TimelineLoader.propTypes = {
  endAt: _propTypes["default"].string,
  startAt: _propTypes["default"].string,
  timeScale: _propTypes["default"].func.isRequired,
  width: _propTypes["default"].number.isRequired
};
TimelineLoader.defaultProps = {
  endAt: '',
  startAt: ''
};
var _default = exports["default"] = TimelineLoader;
//# sourceMappingURL=_TimelineLoader.js.map