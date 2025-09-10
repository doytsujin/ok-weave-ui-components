"use strict";

var _selectors = require("./selectors");
var _ = _interopRequireDefault(require("."));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var props = {
  theme: _["default"]
};
describe('ThemeSelectors', function () {
  describe('fontSizes', function () {
    it('should retrieve a fontSize', function () {
      expect(_typeof(_selectors.fontSize)).toBe('function');
      expect((0, _selectors.fontSize)('small')(props)).toBe(10);
    });
  });
  describe('colors', function () {
    it('should retrieve a color', function () {
      expect(_typeof(_selectors.color)).toBe('function');
      expect((0, _selectors.color)('grey200')(props)).toBe('#333');
    });
  });
  describe('custom selector', function () {
    it('should return a function ', function () {
      var wongoBongo = (0, _selectors.selector)('wongo.bongo');
      expect(_typeof(wongoBongo)).toBe('function');
      expect(wongoBongo('jibberish')).toBe('boo');
    });
  });
});
//# sourceMappingURL=selectors-test.js.map