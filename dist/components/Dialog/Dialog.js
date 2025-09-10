"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));
var _noop2 = _interopRequireDefault(require("lodash/noop"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Button = _interopRequireDefault(require("../Button"));
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
var Wrapper = _styledComponents["default"].div.withConfig({
  displayName: "Dialog__Wrapper",
  componentId: "sc-k4h4pd-0"
})(["z-index:", ";transition:opacity 0.2s ease;align-items:center;position:fixed;display:flex;opacity:0;height:100%;left:-100%;width:100%;top:0;", ";"], function (props) {
  return props.theme.layers.modal;
}, function (props) {
  return props.active && "\n    left: 0;\n    opacity: 1;\n  ";
});
var Overlay = _styledComponents["default"].div.withConfig({
  displayName: "Dialog__Overlay",
  componentId: "sc-k4h4pd-1"
})(["background-color:", ";position:absolute;opacity:0.3;height:100%;width:100%;left:0;top:0;backdrop-filter:blur(2px);"], function (props) {
  return props.theme.colors.black;
});
var Window = _styledComponents["default"].div.withConfig({
  displayName: "Dialog__Window",
  componentId: "sc-k4h4pd-2"
})(["box-shadow:", ";border-radius:", ";background-color:", ";color:", ";width:", ";margin:0 auto;max-width:768px;padding:", ";position:relative;"], function (props) {
  return props.theme.boxShadow.light;
}, function (props) {
  return props.theme.borderRadius.soft;
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.colors.purple800;
}, function (props) {
  return props.width;
}, (0, _selectors.spacing)('medium'));
var Header = _styledComponents["default"].div.withConfig({
  displayName: "Dialog__Header",
  componentId: "sc-k4h4pd-3"
})(["display:flex;justify-content:space-between;align-items:center;"]);
var Title = _styledComponents["default"].span.withConfig({
  displayName: "Dialog__Title",
  componentId: "sc-k4h4pd-4"
})(["font-size:", ";"], function (props) {
  return props.theme.fontSizes.large;
});
var ButtonClose = _styledComponents["default"].button.withConfig({
  displayName: "Dialog__ButtonClose",
  componentId: "sc-k4h4pd-5"
})(["border:0;background:transparent;cursor:pointer;margin-right:-", ";padding:", ";outline:0;&:hover{opacity:0.5;}"], (0, _selectors.spacing)('xxs'), (0, _selectors.spacing)('xxs'));
var Content = _styledComponents["default"].div.withConfig({
  displayName: "Dialog__Content",
  componentId: "sc-k4h4pd-6"
})([""]);
var Actions = _styledComponents["default"].div.withConfig({
  displayName: "Dialog__Actions",
  componentId: "sc-k4h4pd-7"
})(["text-align:right;min-height:36px;button{margin-left:", ";}"], (0, _selectors.spacing)('small'));

/**
 * A dialog window
 * ```javascript
 * export defaut function DialogExample({closeHandler, actionClickHandler}) {
 *  return (
 *   <Dialog
 *      active={true}
 *      actions={['Submit', 'Cancel']}
 *      onClose={closeHandler}
 *      onActionClick={actionClickHandler}
 *    >
 *      <p>Here is some content that I would like to display</p>
 *    </Dialog>
 *  );
 * }
 * ```
 *
 * Example with pre-created action elements
 * ```javascript
 * export defaut function DialogExample({someHandlerFunc, otherHandlerFunc, handleClose}) {
 *     const Action1 = () => (
 *      <div onClick={someHandlerFunc}>Action1</div>
 *    );
 *     const Action2 = () => (
 *       <div onClick={otherHandlerFunc}>Action2</div>
 *    );
 *
 *    return (
 *      <Dialog
 *         active={true}
 *         actions={[Action1, Action2]}
 *         onClose={handleClose}
 *       >
 *         <p>This one has custom actions</p>
 *       </Dialog>
 *    );
 * }
 * ```
 */
var Dialog = /*#__PURE__*/function (_PureComponent) {
  function Dialog() {
    var _this;
    _classCallCheck(this, Dialog);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Dialog, [].concat(args));
    _defineProperty(_this, "onKeyDown", function (event) {
      if (_this.props.active && event.key === 'Escape') {
        _this.props.onClose(event);
      }
    });
    return _this;
  }
  _inherits(Dialog, _PureComponent);
  return _createClass(Dialog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        active = _this$props.active,
        hideClose = _this$props.hideClose,
        title = _this$props.title,
        width = _this$props.width,
        actions = _this$props.actions,
        onActionClick = _this$props.onActionClick,
        onClose = _this$props.onClose,
        children = _this$props.children;
      return /*#__PURE__*/_react["default"].createElement(Wrapper, {
        active: active
      }, /*#__PURE__*/_react["default"].createElement(Overlay, {
        onClick: onClose
      }), /*#__PURE__*/_react["default"].createElement(Window, {
        width: width
      }, /*#__PURE__*/_react["default"].createElement(Header, null, /*#__PURE__*/_react["default"].createElement(Title, null, title), !hideClose && /*#__PURE__*/_react["default"].createElement(ButtonClose, {
        text: "",
        onClick: onClose
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-times"
      }))), /*#__PURE__*/_react["default"].createElement(Content, null, active && children), !(0, _isEmpty2["default"])(actions) && /*#__PURE__*/_react["default"].createElement(Actions, null, actions.map(function (Action, index) {
        if (/*#__PURE__*/_react["default"].isValidElement(Action)) {
          /* eslint-disable react/no-array-index-key */
          return /*#__PURE__*/_react["default"].cloneElement(Action, {
            key: index
          });
          /* eslint-enable react/no-array-index-key */
        }
        return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
          key: Action,
          text: Action,
          onClick: function onClick() {
            return onActionClick(Action);
          }
        });
      }))));
    }
  }]);
}(_react.PureComponent);
Dialog.propTypes = {
  /**
   * An array of options that the user will be able to click.
   * Each item in the array will be rendered as a `<Button />` in the dialog window.
   * Items can also be React elements.
   */
  actions: _propTypes["default"].array,
  /**
   * Flag to show/hide the dialog
   */
  active: _propTypes["default"].bool.isRequired,
  /**
   * Flag to hide the close icon in top right corner
   */
  hideClose: _propTypes["default"].bool,
  /**
   * Callback that runs when an action is clicked by the user. If the actions
   * If the `actions` prop is an array of strings,
   * this callback will return the action that was clicked.
   */
  onActionClick: _propTypes["default"].func,
  /**
   * Callback that will be run when the modal is closed
   */
  onClose: _propTypes["default"].func,
  /**
   * The title of the dialog
   */
  title: _propTypes["default"].string,
  /**
   * Width of the dialog window (CSS format)
   */
  width: _propTypes["default"].string
};
Dialog.defaultProps = {
  actions: [],
  hideClose: false,
  onActionClick: _noop2["default"],
  onClose: _noop2["default"],
  title: '',
  width: '75%'
};
var _default = exports["default"] = Dialog;
//# sourceMappingURL=Dialog.js.map