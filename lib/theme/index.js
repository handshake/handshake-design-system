"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.theme = exports.base = exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _antd_less_variables = _interopRequireDefault(require("./antd_less_variables.json"));

var _antd_mobile_less_variables = _interopRequireDefault(require("./antd_mobile_less_variables.json"));

var _handshake_less_variables = _interopRequireDefault(require("./handshake_less_variables.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let baseVariables = _lodash.default.omit(_lodash.default.extend({}, _antd_mobile_less_variables.default, _lodash.default.mapKeys(_antd_less_variables.default, (__, key) => _lodash.default.kebabCase(key)), _antd_less_variables.default), "$comment", "comment");

baseVariables = _lodash.default.fromPairs(_lodash.default.sortBy(_lodash.default.toPairs(baseVariables, 0)));

let themeVariables = _lodash.default.omit(_lodash.default.extend({}, baseVariables, _handshake_less_variables.default), "$comment", "comment");

themeVariables = _lodash.default.fromPairs(_lodash.default.sortBy(_lodash.default.toPairs(themeVariables, 0)));
const base = {
  camelCase: _lodash.default.mapKeys(baseVariables, (__, key) => _lodash.default.camelCase(key)),
  kebabCase: baseVariables,
  snakeCase: _lodash.default.mapKeys(baseVariables, (__, key) => _lodash.default.snakeCase(key))
};
exports.base = base;
const theme = {
  camelCase: _lodash.default.mapKeys(themeVariables, (__, key) => _lodash.default.camelCase(key)),
  kebabCase: themeVariables,
  snakeCase: _lodash.default.mapKeys(themeVariables, (__, key) => _lodash.default.snakeCase(key))
};
exports.theme = theme;
var _default = theme.camelCase;
exports.default = _default;