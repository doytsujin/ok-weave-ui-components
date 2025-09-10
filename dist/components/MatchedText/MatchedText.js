"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _compact2 = _interopRequireDefault(require("lodash/compact"));
var _flatMap2 = _interopRequireDefault(require("lodash/flatMap"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _intersperse = _interopRequireDefault(require("intersperse"));
var _polished = require("polished");
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
// For chunk = { text: 'abcd', matched: false } and match = 'bc', the output will be
// [{ text: 'a', matched: false }, { text: 'bc', matched: true }, { text: 'd', matched: false }].
var splitChunk = function splitChunk(chunk, match) {
  return (0, _compact2["default"])((0, _intersperse["default"])(chunk.text.split(match), match)).map(function (text) {
    return {
      matched: text === match,
      text: text
    };
  });
};

// Splits the text into chunks by finding all occurences of all matches in the list.
var buildChunks = function buildChunks(_ref) {
  var text = _ref.text,
    matches = _ref.matches;
  var chunks = [{
    matched: false,
    text: text
  }];
  matches.forEach(function (match) {
    chunks = (0, _flatMap2["default"])(chunks,
    // Only unmatched chunks can be further split by other matches
    function (chunk) {
      return chunk.matched ? [chunk] : splitChunk(chunk, match);
    });
  });
  return chunks;
};
var MatchedChunk = _styledComponents["default"].span.withConfig({
  displayName: "MatchedText__MatchedChunk",
  componentId: "sc-1ai4c87-0"
})(["background-color:", ";border-radius:", ";"], function (props) {
  return (0, _polished.transparentize)(0.7, props.theme.colors.blue400);
}, function (props) {
  return props.theme.borderRadius.soft;
});

/**
 * Renders a block of text with matched sections highlighted
 *
 * `foo` is highlighted:
 *
 * ```
 * <MatchedText text="this that foo and bar" matches={['foo']} />
 * ```
 *
 */
var MatchedText = /*#__PURE__*/function (_React$PureComponent) {
  function MatchedText(props) {
    var _this;
    _classCallCheck(this, MatchedText);
    _this = _callSuper(this, MatchedText, [props]);
    _this.state = {
      chunks: buildChunks(props)
    };
    return _this;
  }
  _inherits(MatchedText, _React$PureComponent);
  return _createClass(MatchedText, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        chunks: buildChunks(nextProps)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("span", {
        title: this.props.text
      }, this.state.chunks.map(function (chunk, index) {
        if (chunk.matched) {
          /* eslint-disable react/no-array-index-key */
          return /*#__PURE__*/_react["default"].createElement(MatchedChunk, {
            key: "".concat(index, ":").concat(chunk.text)
          }, chunk.text);
          /* eslint-enable react/no-array-index-key */
        }
        return chunk.text;
      }));
    }
  }]);
}(_react["default"].PureComponent);
MatchedText.propTypes = {
  /**
   * The chunks to be highlighted
   */
  matches: _propTypes["default"].arrayOf(_propTypes["default"].string),
  /**
   * The base text to display
   */
  text: _propTypes["default"].string.isRequired
};
MatchedText.defaultProps = {
  matches: []
};
var _default = exports["default"] = MatchedText;
//# sourceMappingURL=MatchedText.js.map