"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(require("antd/es/button"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _prop_types = _interopRequireWildcard(require("./prop_types"));

var _react = _interopRequireWildcard(require("react"));

var _antd_color_palette = _interopRequireDefault(require("../../util/antd_color_palette"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = ["borderColorBase", "btnBorderRadiusBase", "btnBorderRadiusSm", "btnDangerColor", "btnDefaultBg", "btnDefaultBorder", "btnDefaultColor", "btnDisableBg", "btnDisableBorder", "btnDisableColor", "btnPaddingBase", "btnPaddingLg", "btnPaddingSm", "btnPrimaryBg", "btnPrimaryColor", "fontSizeBase", "fontSizeLg", "fontSizeSm", "lineHeightBase", "primary5", "primary7"];
const VARIABLE_LOOKUP = {
  backgroundColor: {
    default: {
      active: "btnDefaultBg",
      default: "btnDefaultBg",
      focus: "btnDefaultBg",
      hover: "btnDefaultBg"
    },
    disabled: "btnDisableBg",
    ghost: {
      active: () => "transparent",
      default: () => "transparent",
      focus: () => "transparent",
      hover: () => "transparent"
    },
    primary: {
      active: theme => (0, _antd_color_palette.default)(theme.btnPrimaryBg, 7),
      default: "btnPrimaryBg",
      focus: theme => (0, _antd_color_palette.default)(theme.btnPrimaryBg, 5),
      hover: theme => (0, _antd_color_palette.default)(theme.btnPrimaryBg, 5)
    },
    danger: {
      active: theme => (0, _antd_color_palette.default)(theme.btnDangerColor, 7),
      default: "btnDangerBg",
      focus: () => "#fff",
      hover: theme => (0, _antd_color_palette.default)(theme.btnDangerColor, 5)
    }
  },
  borderColor: {
    default: {
      active: "primary7",
      default: "btnDefaultBorder",
      focus: "primary5",
      hover: "primary5"
    },
    disabled: "btnDisableBorder",
    ghost: {
      active: "primary7",
      default: "borderColorBase",
      focus: "primary5",
      hover: "primary5"
    },
    primary: {
      active: theme => (0, _antd_color_palette.default)(theme.btnPrimaryBg, 7),
      default: "btnPrimaryBg",
      focus: theme => (0, _antd_color_palette.default)(theme.btnPrimaryBg, 5),
      hover: theme => (0, _antd_color_palette.default)(theme.btnPrimaryBg, 5)
    },
    danger: {
      active: theme => (0, _antd_color_palette.default)(theme.btnDangerColor, 7),
      default: "btnDangerBorder",
      focus: theme => (0, _antd_color_palette.default)(theme.btnDangerColor, 5),
      hover: theme => (0, _antd_color_palette.default)(theme.btnDangerColor, 5)
    }
  },
  borderRadius: {
    default: "btnBorderRadiusBase",
    large: "btnBorderRadiusBase",
    small: "btnBorderRadiusSm"
  },
  color: {
    default: {
      active: "primary7",
      default: "btnDefaultColor",
      focus: "primary5",
      hover: "primary5"
    },
    disabled: "btnDisableColor",
    ghost: {
      active: "primary7",
      default: "textColor",
      focus: "primary5",
      hover: "primary5"
    },
    primary: {
      active: "btnPrimaryColor",
      default: "btnPrimaryColor",
      focus: "btnPrimaryColor",
      hover: "btnPrimaryColor"
    },
    danger: {
      active: "btnPrimaryColor",
      default: "btnDangerColor",
      focus: theme => (0, _antd_color_palette.default)(theme.btnDangerColor, 5),
      hover: "btnPrimaryColor"
    }
  },
  fontSize: {
    default: "fontSizeBase",
    large: "fontSizeLg",
    small: "fontSizeSm"
  },
  height: {
    default: "btnHeightBase",
    large: "btnHeightLg",
    small: "btnHeightSm"
  },
  padding: {
    default: "btnPaddingBase",
    large: "btnPaddingLg",
    small: "btnPaddingSm"
  },
  loadingPaddingLeft: {
    default: "29px",
    large: "29px",
    small: "24px"
  },
  loadingIconMarginLeft: {
    default: "-14px",
    large: "-14px",
    small: "-17px"
  }
};

function t(v, theme, ...extra) {
  if (typeof v === "string") {
    return theme[v];
  }

  return v(theme, ...extra);
} // Unimplemented CSS:
// Circle shape
// Block mode
// Dashed type
// Ghost + other type
// htmlType
// ^^ these will be added if we figure out how to implement
// them for RN Button


const loadingCircle = _styledComponents.keyframes`
    100% {
        transform: rotate(360deg);
    }
`;
const Button = (0, _styledComponents.default)(_button.default)`
&& {
    background-color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.backgroundColor[ghost ? "ghost" : type || "default"].default, theme)};
    background-image: none;
    border: ${({
  theme
}) => theme.borderWidthBase} transparent;
    border-color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.borderColor[ghost ? "ghost" : type || "default"].default, theme)};
    border-radius: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.borderRadius[size || "default"], theme)};
    border-style: ${({
  dashed,
  theme
}) => dashed ? "dashed" : theme.borderStyleBase};
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.color[ghost ? "ghost" : type || "default"].default, theme)};
    cursor: pointer;
    display: inline-block;
    font-family: ${({
  theme
}) => theme.fontFamily};
    font-size: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.fontSize[size || "default"], theme)};
    font-weight: ${({
  theme
}) => theme.btnFontWeight};
    height: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.height[size || "default"], theme)};
    line-height: ${({
  theme
}) => theme.lineHeightBase};
    padding: ${({
  size,
  theme
}) => t(VARIABLE_LOOKUP.padding[size || "default"], theme)};
    padding-left: ${({
  loading,
  size,
  theme
}) => loading ? t(VARIABLE_LOOKUP.loadingPaddingLeft[size || "default"], theme) : t(VARIABLE_LOOKUP.padding[size || "default"], theme).split(" ")[1]};
    pointer-events: ${({
  loading
}) => loading ? "none" : "auto"};
    position: relative;
    text-align: center;
    touch-action: manipulation;
    transition: all 0.3s ${({
  theme
}) => theme.easeInOut};
    user-select: none;
    white-space: nowrap;
    width: ${({
  block
}) => block ? "100%" : "auto"};

    &,
    &:active,
    &:focus {
        outline: 0;
    }

    &:hover,
    &:focus,
    &:active,
    &.active {
        text-decoration: none;
    }

    /* http://stackoverflow.com/a/21281554/3040605 */
    &:focus > span,
    &:active > span {
        position: relative;
    }

    &:hover {
        background-color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.backgroundColor[ghost ? "ghost" : type || "default"].hover, theme)};
        border-color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.borderColor[ghost ? "ghost" : type || "default"].hover, theme)};
        color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.color[ghost ? "ghost" : type || "default"].hover, theme)};
    }

    &:focus {
        background-color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.backgroundColor[ghost ? "ghost" : type || "default"].focus, theme)};
        border-color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.borderColor[ghost ? "ghost" : type || "default"].focus, theme)};
        color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.color[ghost ? "ghost" : type || "default"].focus, theme)};
    }

    &:active,
    &.active {
        background-color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.backgroundColor[ghost ? "ghost" : type || "default"].active, theme)};
        border-color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.borderColor[ghost ? "ghost" : type || "default"].active, theme)};
        color: ${({
  ghost,
  theme,
  type
}) => t(VARIABLE_LOOKUP.color[ghost ? "ghost" : type || "default"].active, theme)};
    }

    &:not([disabled]):hover {
        text-decoration: none;
    }

    &:not([disabled]):active {
        box-shadow: none;
        outline: 0;
        transition: none;
    }

    &.disabled,
    &[disabled] {
        cursor: not-allowed;

        &,
        &:hover,
        &:focus,
        &:active,
        &.active {
            background-color: ${({
  theme
}) => t(VARIABLE_LOOKUP.backgroundColor.disabled, theme)};
            border-color: ${({
  theme
}) => t(VARIABLE_LOOKUP.borderColor.disabled, theme)};
            box-shadow: none;
            color: ${({
  theme
}) => t(VARIABLE_LOOKUP.color.disabled, theme)};
            text-shadow: none;
        }

        > * {
            pointer-events: none;
        }
    }

    &:before {
        background: #fff;
        border-radius: inherit;
        bottom: -1px;
        content: '';
        display: ${({
  loading
}) => loading ? "block" : "none"};
        left: -1px;
        opacity: 0.35;
        pointer-events: none;
        position: absolute;
        right: -1px;
        top: -1px;
        transition: opacity 0.2s;
        z-index: 1;
    }

    &-two-chinese-chars:first-letter {
        letter-spacing: 0.34em;
    }

    &-two-chinese-chars > * {
        letter-spacing: 0.34em;
        margin-right: -0.34em;
    }

    .anticon {
        display: inline-block;
        font-style: normal;
        line-height: 1;
        margin-left: ${({
  loading,
  size,
  theme
}) => loading ? t(VARIABLE_LOOKUP.loadingIconMarginLeft[size || "default"], theme) : 0};
        vertical-align: -0.125em;
        text-align: center;
        text-transform: none;
        text-rendering: optimizeLegibility;
        transition: margin-left 0.3s ${({
  theme
}) => theme.easeInOut};

        > * {
            line-height: 1;
        }

        svg {
            display: inline-block;
        }

        svg:not(:root) {
            overflow: hidden;
        }

        .anticon-spin {
            animation: ${loadingCircle} 1s infinite linear;
        }
    }

    /* To ensure that a space will be placed between character and Icon. */
    > .anticon + span,
    > span + .anticon {
        margin-left: 8px;
    }

    /* a inside Button which only work in Chrome
    * http://stackoverflow.com/a/17253457
    */
    > a:only-child {
        color: currentColor;
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: transparent;
        }
    }

    > i,
    > span {
        pointer-events: none;
    }
}
`;

class ButtonWrapper extends _react.Component {
  render() {
    return _react.default.createElement(Button, (0, _prop_types.mapPropsForWeb)(this.props));
  }

}

_defineProperty(ButtonWrapper, "propTypes", _prop_types.default);

_defineProperty(ButtonWrapper, "defaultProps", {
  block: false,
  webHtmlType: "button",
  ..._prop_types.defaultProps
});

_defineProperty(ButtonWrapper, "THEME_VARIABLES", THEME_VARIABLES);

var _default = ButtonWrapper;
exports.default = _default;