"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  // Render in a block vs inline
  block: _propTypes.default.bool,
  // `Spin` supports children, but
  // `ActivityIndicator` does not.
  // children: PropTypes.node,
  // Render after a delay
  // only supported by `Spin`,
  // and it's kinda tricky to implement, so... not supported.
  // delay: PropTypes.number,
  // Is the spinner active?
  // maps to `Spin`'s `spinning` prop or
  // `ActivityIndicator`'s `animating` prop
  enabled: _propTypes.default.bool,
  // `Spin` supports a custom indicator, but
  // `ActivityIndicator` does not.
  // indicator: PropTypes.node,
  // How big should the spinner be?
  // NOTE: `Spin` also supports `default` size, but
  //       `ActivityIndicator` does not
  size: _propTypes.default.oneOf(["large", "small"]),
  // Text to show along with the spinner
  // maps to `Spin`'s `tip` prop or
  // `ActivityIndicator`'s `text` prop
  text: _propTypes.default.string,
  // Render in a popup
  // natively supported by `ActivityIndicator`
  // and with by us for `Spin`
  toast: _propTypes.default.bool
};
exports.default = _default;
const defaultProps = {
  block: false,
  enabled: true,
  size: "small",
  style: {},
  toast: false
};
exports.defaultProps = defaultProps;