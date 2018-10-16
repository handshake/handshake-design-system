"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _reactIntl = require("react-intl");

var _localeProvider = _interopRequireDefault(require("antd-mobile/es/locale-provider"));

var _react = _interopRequireWildcard(require("react"));

var _common = require("./common.js");

var _prop_types = _interopRequireWildcard(require("./prop_types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class LocaleProvider extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      antdLocaleData: {},
      messages: {},
      intlLocale: _common.DEFAULT_LANGUAGE
    });
  }

  static getDerivedStateFromProps(nextProps) {
    return (0, _common.getLocaleData)(nextProps.locale, nextProps.getAdditionalMessages);
  }

  render() {
    return _react.default.createElement(_localeProvider.default, {
      locale: this.state.antdLocaleData
    }, _react.default.createElement(_reactIntl.IntlProvider, {
      locale: this.state.intlLocale,
      messages: this.state.messages
    }, this.props.children));
  }

}

exports.default = LocaleProvider;

_defineProperty(LocaleProvider, "ALL_SUPPORTED_LOCALES", _common.ALL_SUPPORTED_LOCALES);

_defineProperty(LocaleProvider, "DEFAULT_LOCALE", _common.DEFAULT_LOCALE);

_defineProperty(LocaleProvider, "propTypes", _prop_types.default);

_defineProperty(LocaleProvider, "defaultProps", _prop_types.defaultProps);