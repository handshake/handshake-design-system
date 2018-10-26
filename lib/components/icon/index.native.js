"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _reactNativeAnimatable = require("react-native-animatable");

var ANTD_ICONS = _interopRequireWildcard(require("@ant-design/icons/lib/dist"));

var _react = _interopRequireWildcard(require("react"));

var _prop_types = _interopRequireWildcard(require("./prop_types"));

var _helpers = require("@ant-design/icons/lib/helpers");

var _reactNativeSvgParser = _interopRequireDefault(require("@target-corp/react-native-svg-parser"));

var _themeProvider = require("../design-context/theme-provider");

var _antd_color_palette = _interopRequireDefault(require("../../util/antd_color_palette"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: similar to antd (web) provide a mechanism to register additional icons
const THEME_VARIABLES = false;

function fillPaths(node, color) {
  if (node.tag === "path") {
    node.attrs.fill = color;
  }

  if (node.children) {
    node.children.forEach(n => fillPaths(n, color));
  }
}

const THEME_LOOKUP = {
  filled: "Fill",
  outlined: "Outline",
  twoTone: "TwoTone"
};

class IconWrapper extends _react.Component {
  render() {
    let {
      color,
      pxSize,
      spin,
      style,
      theme,
      type
    } = (0, _prop_types.mapPropsForMobile)(this.props);

    if (!type) {
      return null;
    }

    let iconName = `${_lodash.default.upperFirst(_lodash.default.camelCase(type))}${THEME_LOOKUP[theme]}`;

    const icon = _lodash.default.cloneDeep(ANTD_ICONS[iconName]);

    let content;

    if (typeof icon.icon === "function") {
      content = (0, _reactNativeSvgParser.default)((0, _helpers.renderIconDefinitionToSVGElement)(icon, {
        placeholders: {
          primaryColor: color,
          secondaryColor: (0, _antd_color_palette.default)(color, 0)
        }
      }), "", _objectSpread({
        height: pxSize,
        width: pxSize
      }, style));
    } else {
      fillPaths(icon.icon, color);
      content = (0, _reactNativeSvgParser.default)((0, _helpers.renderIconDefinitionToSVGElement)(icon), "", _objectSpread({
        height: pxSize,
        width: pxSize
      }, style));
    }

    if (spin) {
      return _react.default.createElement(_reactNativeAnimatable.Text, {
        animation: "rotate",
        easing: "linear",
        iterationCount: "infinite",
        style: {
          width: pxSize
        }
      }, content);
    }

    return content;
  }

}

_defineProperty(IconWrapper, "propTypes", _prop_types.default);

_defineProperty(IconWrapper, "defaultProps", _prop_types.defaultProps);

_defineProperty(IconWrapper, "THEME_VARIABLES", THEME_VARIABLES);

_defineProperty(IconWrapper, "ALL_TYPES", _prop_types.ALL_TYPES);

var _default = IconWrapper;
exports.default = _default;