"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeSubscriber = exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ThemeProvider = ({
  children,
  theme
}) => {
  return _react.default.createElement(_styledComponents.ThemeProvider, {
    theme: _lodash.default.extend({}, _theme.default, theme)
  }, children);
};

ThemeProvider.propTypes = {
  children: _propTypes.default.node.isRequired,
  theme: _propTypes.default.object
};
var _default = ThemeProvider;
exports.default = _default;

const ThemeSubscriber = ({
  children
}, context) => {
  if (!children) {
    // TODO: warning
    return null;
  }

  if (typeof children === "function") {
    return children(context["__styled-components__next__"].getTheme());
  } // TODO: warning


  return children;
};

exports.ThemeSubscriber = ThemeSubscriber;
ThemeSubscriber.propTypes = {
  children: _propTypes.default.func.isRequired
};
ThemeSubscriber.contextTypes = _styledComponents.ThemeProvider.childContextTypes;