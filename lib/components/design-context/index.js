"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "LocaleProvider", {
  enumerable: true,
  get: function () {
    return _localeProvider.default;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function () {
    return _themeProvider.default;
  }
});
Object.defineProperty(exports, "ThemeSubscriber", {
  enumerable: true,
  get: function () {
    return _themeProvider.ThemeSubscriber;
  }
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _localeProvider = _interopRequireDefault(require("./locale-provider"));

var _themeProvider = _interopRequireWildcard(require("./theme-provider"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DesignContext = ({
  children,
  getAdditionalMessages,
  locale,
  theme
}) => _react.default.createElement(_themeProvider.default, {
  theme: theme
}, _react.default.createElement(_localeProvider.default, {
  getAdditionalMessages: getAdditionalMessages,
  locale: locale
}, children));

DesignContext.propTypes = { ..._localeProvider.default.propTypes,
  ..._themeProvider.default.propTypes
};
DesignContext.LocaleProvider = _localeProvider.default;
DesignContext.ThemeProvider = _themeProvider.default;
DesignContext.ThemeSubscriber = _themeProvider.ThemeSubscriber;
var _default = DesignContext;
exports.default = _default;