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
Object.defineProperty(exports, "LocaleSubscriber", {
  enumerable: true,
  get: function () {
    return _localeProvider.LocaleSubscriber;
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

var _localeProvider = _interopRequireWildcard(require("./locale-provider"));

var _themeProvider = _interopRequireWildcard(require("./theme-provider"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DesignContext = ({
  children,
  getAdditionalMessages,
  locale,
  theme
}) => _react.default.createElement(_localeProvider.default, {
  getAdditionalMessages: getAdditionalMessages,
  locale: locale
}, _react.default.createElement(_themeProvider.default, {
  theme: theme
}, children));

DesignContext.propTypes = _objectSpread({}, _localeProvider.default.propTypes, _themeProvider.default.propTypes);
DesignContext.LocaleProvider = _localeProvider.default;
DesignContext.LocaleSubscriber = _localeProvider.LocaleSubscriber;
DesignContext.ThemeProvider = _themeProvider.default;
DesignContext.ThemeSubscriber = _themeProvider.ThemeSubscriber;
var _default = DesignContext;
exports.default = _default;