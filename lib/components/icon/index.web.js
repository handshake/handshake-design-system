"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _prop_types = _interopRequireWildcard(require("./prop_types"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const THEME_VARIABLES = false;
const loadingCircle = _styledComponents.keyframes`
    100% {
        transform: rotate(360deg);
    }
`;
const Icon = (0, _styledComponents.default)(_icon.default)`
&& {
    display: inline-block;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: none;
    vertical-align: -0.125em;

    > * {
        line-height: 1;
    }

    svg {
        display: inline-block;
    }

    .anticon-icon {
        display: block;
    }
    .anticon-spin:before {
        animation: ${loadingCircle} 1s infinite linear;
        display: inline-block;
    }
    .anticon-spin {
        animation: ${loadingCircle} 1s infinite linear;
        display: inline-block;
    }
}
`;

class IconWrapper extends _react.Component {
  render() {
    return _react.default.createElement(Icon, (0, _prop_types.mapPropsForWeb)(this.props));
  }

}

_defineProperty(IconWrapper, "propTypes", _prop_types.default);

_defineProperty(IconWrapper, "defaultProps", _prop_types.defaultProps);

_defineProperty(IconWrapper, "THEME_VARIABLES", THEME_VARIABLES);

_defineProperty(IconWrapper, "ALL_TYPES", _prop_types.ALL_TYPES);

var _default = IconWrapper;
exports.default = _default;