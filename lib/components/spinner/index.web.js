"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _prop_types = _interopRequireWildcard(require("./prop_types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = ["easeInOutCirc", "fontFamily", "fontSizeBase", "lineHeightBase", "primaryColor", "spinDotSize", "spinDotSizeLg", "spinDotSizeSm"];
const VARIABLE_LOOKUP = {
  dotSize: {
    default: "spinDotSize",
    large: "spinDotSizeLg",
    small: "spinDotSizeSm"
  },
  dotSizeI: {
    default: () => "9px",
    large: () => "14px",
    small: () => "6px"
  }
};

function t(v, theme, ...extra) {
  if (typeof v === "string") {
    return theme[v];
  }

  return v(theme, ...extra);
}

const antSpinMove = _styledComponents.keyframes`
    to {
        opacity: 1;
    }
`;
const antRotate = _styledComponents.keyframes`
    to {
        transform: rotate(405deg);
    }
`; // Unimplemented CSS:
// nested content (nested-loading, container, blur)

const Spin = (0, _styledComponents.default)(_spin.default)`
&& {
    box-sizing: border-box;
    color: ${({
  theme
}) => theme.primaryColor};
    display: inline-block;
    font-family: ${({
  theme
}) => theme.fontFamily};
    font-size: ${({
  theme
}) => theme.fontSizeBase};
    font-variant: tabular-nums;
    line-height: ${({
  theme
}) => theme.lineHeightBase};
    list-style: none;
    margin: 0;
    opacity: 1;
    padding: 0;
    position: static;
    text-align: center;
    transition: transform 0.3s${({
  theme
}) => theme.easeInOutCirc};
    vertical-align: middle;

    .ant-spin-dot {
        display: inline-block;
        font-size: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.dotSize[size || "default"], theme)};
        height: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.dotSize[size || "default"], theme)};
        position: relative;
        width: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.dotSize[size || "default"], theme)};

        &-spin {
            animation: ${antRotate} 1.2s infinite linear;
            transform: rotate(45deg);
        }

        i {
            animation: ${antSpinMove} 1s infinite linear alternate;
            background-color: ${({
  theme
}) => theme.primaryColor};
            border-radius: 100%;
            display: block;
            height: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.dotSizeI[size || "default"], theme)};
            opacity: 0.3;
            position: absolute;
            transform: scale(0.75);
            transform-origin: 50% 50%;
            width: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.dotSizeI[size || "default"], theme)};

            &:nth-child(1) {
                left: 0;
                top: 0;
            }

            &:nth-child(2) {
                animation-delay: 0.4s;
                right: 0;
                top: 0;
            }

            &:nth-child(3) {
                animation-delay: 0.8s;
                bottom: 0;
                right: 0;
            }

            &:nth-child(4) {
                animation-delay: 1.2s;
                bottom: 0;
                left: 0;
            }
        }
    }

    .ant-spin-text {
        display: block;
    }
}
`; // TODO: replace with `div` so we're not using default antd Card styles here

const SpinnerCard = _styledComponents.default.div`
&& {
    align-items: center;
    background-color: ${({
  theme
}) => theme.componentBackground};
    border-color: ${({
  theme
}) => theme.borderColorSplit};
    border-radius: ${({
  theme
}) => theme.borderRadiusSm};
    border-style: solid;
    border-width: 1px;
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 200px;
}
`;
const Toaster = _styledComponents.default.div`
&& {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
`;
const Toast = _styledComponents.default.div`
&& {
    align-items: center;
    background-color: rgba(58, 58, 58, 0.9);
    border-radius: 7px;
    display: inline-flex;
    justify-content: center;
    padding: 15px;
    text-align: center;
}
`;

class Spinner extends _react.Component {
  render() {
    const {
      enabled = true,
      block,
      size,
      text,
      toast
    } = this.props;

    if (!enabled) {
      return null;
    }

    if (toast) {
      return _react.default.createElement(Toaster, null, _react.default.createElement(Toast, null, _react.default.createElement(Spin, {
        size: size || "large",
        tip: text
      })));
    }

    if (block) {
      return _react.default.createElement(SpinnerCard, null, _react.default.createElement(Spin, {
        size: size || "large",
        tip: text
      }));
    }

    return _react.default.createElement(Spin, {
      size: size || "small",
      tip: text
    });
  }

}

exports.default = Spinner;

_defineProperty(Spinner, "propTypes", _prop_types.default);

_defineProperty(Spinner, "defaultProps", _prop_types.defaultProps);

_defineProperty(Spinner, "THEME_VARIABLES", THEME_VARIABLES);