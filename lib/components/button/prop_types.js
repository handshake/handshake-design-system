"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapPropsForWeb = mapPropsForWeb;
exports.mapPropsForMobile = mapPropsForMobile;
exports.defaultProps = exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  block: _propTypes.default.bool,
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  icon: _propTypes.default.string,
  loading: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  // shape: PropTypes.oneOf(["circle", "circle-outline"]), // FIXME: Not supported on mobile yet
  size: _propTypes.default.oneOf(["large", "default", "small"]),
  type: _propTypes.default.oneOf(["default", "primary", "ghost", "warning"]),
  // TODO: add `dashed` for RN
  webHtmlType: _propTypes.default.oneOf(["submit", "button", "reset"])
};
exports.default = _default;
const defaultProps = {
  // block: WEB ? false : true,
  disabled: false,
  loading: false,
  size: "large",
  type: "default" // webHtmlType: "button",

};
exports.defaultProps = defaultProps;

function mapPropsForWeb(props) {
  return {
    block: props.block,
    children: props.children,
    disabled: props.disabled,
    ghost: props.type === "ghost",
    icon: props.icon,
    loading: props.loading,
    onClick: props.onClick,
    // shape: props.shape,
    size: props.size,
    type: (type => ({
      ghost: "default",
      warning: "danger"
    })[type] || type)(props.type),
    htmlType: props.webHtmlType
  };
}

function mapPropsForMobile(props) {
  return {
    // block: props.block, // handled separately
    // children: props.children, // handled separately
    disabled: props.disabled,
    // icon: props.icon, // handled separately
    loading: props.loading,
    onClick: props.onClick,
    size: (size => ({
      default: "large"
    })[size] || size)(props.size),
    type: props.type
  };
}