"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fallbackTheme = fallbackTheme;
exports.mapPropsForWeb = mapPropsForWeb;
exports.mapPropsForMobile = mapPropsForMobile;
exports.ALL_TYPES = exports.defaultProps = exports.default = void 0;

var _manifest = _interopRequireDefault(require("@ant-design/icons/lib/manifest"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  color: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.oneOf(["default", "large", "small"]), _propTypes.default.number]),
  spin: _propTypes.default.bool,
  theme: _propTypes.default.oneOf(["filled", "outlined", "twoTone"]),
  type: _propTypes.default.string.isRequired // type: PropTypes.oneOf([TBD]).isRequired,

};
exports.default = _default;
const defaultProps = {
  color: "#000",
  size: "default",
  spin: false,
  theme: "outlined"
};
exports.defaultProps = defaultProps;

const ALL_TYPES = _.union(_manifest.default.fill, _manifest.default.outline, _manifest.default.twotone).sort();

exports.ALL_TYPES = ALL_TYPES;

function fallbackTheme(theme, type) {
  if (theme === "twoTone" && _manifest.default.fill.includes(type)) {
    console.warn("There is no TwoTone Icon for %s, defaulting to Filled", type);
    return "filled";
  } else if (theme === "twoTone" && _manifest.default.outline.includes(type)) {
    console.warn("There is no TwoTone Icon for %s, defaulting to Outlined", type);
    return "outline";
  } else if (theme === "filled" && _manifest.default.outline.includes(type)) {
    console.warn("There is no Filled Icon for %s, defaulting to Outlined", type);
    return "outlined";
  } else if (theme === "outlined" && _manifest.default.fill.includes(type)) {
    console.warn("There is no Outlined Icon for %s, defaulting to Filled", type);
    return "filled";
  }

  console.error("There is no Icon for %s", type);
  return false;
}

function getSize(size) {
  return typeof size === "number" ? size : {
    default: 24,
    large: 48,
    small: 12
  }[size] || size;
}

function mapPropsForWeb(props) {
  let {
    theme,
    type
  } = props;

  const manifestType = (() => ({
    filled: "fill",
    outlined: "outline",
    twoTone: "twotone"
  })[theme])();

  if (!_manifest.default[manifestType].includes(type)) {
    theme = fallbackTheme(theme, type);
  }

  if (theme === "twoTone") {
    return {
      spin: props.spin,
      style: {
        fontSize: `${getSize(props.size)}px`
      },
      theme,
      twoToneColor: props.color,
      type
    };
  }

  return {
    spin: props.spin,
    style: {
      color: props.color,
      fontSize: `${getSize(props.size)}px`
    },
    theme,
    type
  };
}

function mapPropsForMobile(props) {
  let {
    theme,
    type
  } = props;

  const manifestType = (() => ({
    filled: "fill",
    outlined: "outline",
    twoTone: "twotone"
  })[theme])();

  if (!_manifest.default[manifestType].includes(type)) {
    theme = fallbackTheme(theme, type);
  }

  return {
    color: props.color,
    pxSize: getSize(props.size),
    spin: props.spin,
    theme,
    type
  };
}