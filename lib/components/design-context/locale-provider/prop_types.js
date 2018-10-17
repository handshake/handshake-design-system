"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("./common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]).isRequired,
  getAdditionalMessages: _propTypes.default.func,
  locale: _propTypes.default.string.isRequired
};
exports.default = _default;
const defaultProps = {
  locale: _common.DEFAULT_LOCALE
};
exports.defaultProps = defaultProps;