"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _button = _interopRequireDefault(require("antd-mobile-rn/es/button"));

var _react = _interopRequireWildcard(require("react"));

var _text = _interopRequireDefault(require("antd-mobile-rn/es/text"));

var _index = _interopRequireDefault(require("../icon/index.native"));

var _prop_types = _interopRequireWildcard(require("./prop_types"));

var _themeProvider = require("../design-context/theme-provider");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = ["borderColorBase", "buttonFontSize", "buttonFontSizeSm", "buttonHeight", "buttonHeightSm", "colorTextBase", "colorTextBaseInverse", "fillBase", "fillDisabled", "fillTap", "ghostButtonColor", "ghostButtonFillTap", "hSpacingLg", "hSpacingMd", "hSpacingSm", "primaryButtonFill", "primaryButtonFillTap", "radiusMd", "warningButtonFill", "warningButtonFillTap"]; // original: antd-mobile-rn/es/button/style/index.native.js
// maintenance task: check ^^ for changes anytime we update antd-mobile-rn

function styles(theme) {
  return {
    container: {
      flexDirection: "row"
    },
    defaultHighlight: {
      backgroundColor: theme.fillTap,
      borderColor: theme.borderColorBase
    },
    primaryHighlight: {
      backgroundColor: theme.primaryButtonFillTap,
      borderColor: theme.primaryButtonFill
    },
    ghostHighlight: {
      backgroundColor: "transparent",
      borderColor: theme.ghostButtonFillTap
    },
    warningHighlight: {
      backgroundColor: theme.warningButtonFillTap,
      borderColor: theme.warningButtonFill
    },
    wrapperStyle: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.radiusMd,
      borderWidth: 1
    },
    largeRaw: {
      height: theme.buttonHeight,
      paddingLeft: theme.hSpacingLg,
      paddingRight: theme.hSpacingLg
    },
    smallRaw: {
      height: theme.buttonHeightSm,
      paddingLeft: theme.hSpacingSm,
      paddingRight: theme.hSpacingSm
    },
    defaultRaw: {
      backgroundColor: theme.fillBase,
      borderColor: theme.borderColorBase
    },
    primaryRaw: {
      backgroundColor: theme.primaryButtonFill,
      borderColor: theme.primaryButtonFill
    },
    ghostRaw: {
      backgroundColor: "transparent",
      borderColor: theme.ghostButtonColor
    },
    warningRaw: {
      backgroundColor: theme.warningButtonFill,
      borderColor: theme.warningButtonFill
    },
    defaultDisabledRaw: {
      backgroundColor: theme.fillDisabled,
      borderColor: theme.fillDisabled
    },
    primaryDisabledRaw: {
      opacity: 0.4
    },
    ghostDisabledRaw: {
      borderColor: `${theme.colorTextBase}1A`
    },
    warningDisabledRaw: {
      opacity: 0.4
    },
    defaultHighlightText: {
      color: theme.colorTextBase
    },
    primaryHighlightText: {
      color: `${theme.colorTextBaseInverse}4D`
    },
    ghostHighlightText: {
      color: theme.ghostButtonFillTap
    },
    warningHighlightText: {
      color: `${theme.colorTextBaseInverse}4D`
    },
    largeRawText: {
      fontSize: theme.buttonFontSize
    },
    smallRawText: {
      fontSize: theme.buttonFontSizeSm
    },
    defaultRawText: {
      color: theme.colorTextBase
    },
    primaryRawText: {
      color: theme.colorTextBaseInverse
    },
    ghostRawText: {
      color: theme.ghostButtonColor
    },
    warningRawText: {
      color: theme.colorTextBaseInverse
    },
    defaultDisabledRawText: {
      color: `${theme.colorTextBase}4D`
    },
    primaryDisabledRawText: {
      color: `${theme.colorTextBaseInverse}99`
    },
    ghostDisabledRawText: {
      color: `${theme.colorTextBase}1A`
    },
    warningDisabledRawText: {
      color: `${theme.colorTextBaseInverse}99`
    },
    indicator: {
      marginRight: theme.hSpacingMd
    }
  };
}

class ButtonWrapper extends _react.Component {
  render() {
    const content = _react.default.createElement(_themeProvider.ThemeSubscriber, null, theme => _react.default.createElement(_button.default, _extends({
      styles: styles(theme)
    }, (0, _prop_types.mapPropsForMobile)(this.props)), this.props.icon && !this.props.loading ? [_react.default.createElement(_index.default, {
      key: "icon",
      color: (() => {
        switch (this.props.type) {
          case "primary":
          case "warning":
            return this.props.disabled ? `${theme.colorTextBaseInverse}99` : theme.colorTextBaseInverse;

          case "ghost":
            return this.props.disabled ? `${theme.colorTextBase}1A` : theme.ghostButtonColor;

          case "default":
          default:
            return this.props.disabled ? `${theme.colorTextBase}4D` : theme.colorTextBase;
        }
      })(),
      size: this.props.size === "large" ? 16 : "small",
      type: this.props.icon
    }), _react.default.createElement(_text.default, {
      key: "gap"
    }, "\xA0\xA0"), this.props.children] : this.props.children));

    return this.props.block ? content : _react.default.createElement(_text.default, null, content);
  }

}

_defineProperty(ButtonWrapper, "propTypes", _prop_types.default);

_defineProperty(ButtonWrapper, "defaultProps", {
  block: true,
  ..._prop_types.defaultProps
});

_defineProperty(ButtonWrapper, "THEME_VARIABLES", THEME_VARIABLES);

var _default = ButtonWrapper;
exports.default = _default;