"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _activityIndicator = _interopRequireDefault(require("antd-mobile-rn/es/activity-indicator"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _view = _interopRequireDefault(require("antd-mobile-rn/es/view"));

var _themeProvider = require("../design-context/theme-provider");

var _prop_types = _interopRequireWildcard(require("./prop_types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = ["borderColorSplit", "borderRadiusSm", "colorTextBase", "colorTextBaseInverse", "componentBackground", "fontSizeBase", "hSpacingMd", "radiusMd", "toastFill", "toastZindex", "vSpacingSm"];

function styles(theme) {
  return {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "transparent",
      zIndex: theme.toastZindex
    },
    innerContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    wrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: 89,
      height: 89,
      borderRadius: theme.radiusMd,
      backgroundColor: theme.toastFill
    },
    tip: {
      color: theme.colorTextBase,
      fontSize: theme.fontSizeBase,
      marginLeft: theme.hSpacingMd
    },
    toast: {
      color: theme.colorTextBaseInverse,
      fontSize: theme.fontSizeBase,
      marginTop: theme.vSpacingSm
    },
    spinner: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    }
  };
}

const SpinnerBox = (0, _styledComponents.default)(_view.default)`
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
    border-width: 1px;
    flex: 1;
    justify-content: center;
    min-height: 200px;
}
`;
const SpinnerFrame = (0, _styledComponents.default)(_view.default)`
&& {
    flex: 1;
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

    if (block && !toast) {
      return _react.default.createElement(SpinnerFrame, null, _react.default.createElement(SpinnerBox, null, _react.default.createElement(_themeProvider.ThemeSubscriber, null, theme => _react.default.createElement(_activityIndicator.default, {
        size: size || "large",
        styles: styles(theme),
        text: text
      }))));
    }

    return _react.default.createElement(_themeProvider.ThemeSubscriber, null, theme => _react.default.createElement(_activityIndicator.default, {
      size: size || "small",
      styles: styles(theme),
      text: text,
      toast: toast
    }));
  }

}

exports.default = Spinner;

_defineProperty(Spinner, "propTypes", _prop_types.default);

_defineProperty(Spinner, "defaultProps", _prop_types.defaultProps);

_defineProperty(Spinner, "THEME_VARIABLES", THEME_VARIABLES);