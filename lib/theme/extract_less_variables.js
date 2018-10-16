"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getLessVars;

var _lodash = _interopRequireDefault(require("lodash"));

var _fs = _interopRequireDefault(require("fs"));

var _lessNode = _interopRequireDefault(require("less/lib/less-node"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getLessVars(from) {
  const dirname = _path.default.dirname(from);

  const src = _fs.default.readFileSync(from);

  return _lessNode.default.parse(src.toString(), {
    paths: [dirname],
    javascriptEnabled: true
  }).then(parsed => _lessNode.default.render(`
@import "${from}";
${Object.keys(parsed.variables()).map(v => `.${v.slice(1)} { value: ${v}; }`).join("\n")}`, {
    paths: [dirname],
    javascriptEnabled: true,
    compress: true // compress to get rid of comments

  })).then(({
    css
  }) => css.split("}").map(line => {
    const parts = line.match(/^\.([\w-]+)\s*\{\s*value:\s*([^;]+);?$/);

    if (!parts) {
      return undefined;
    }

    return [parts[1], parts[2]];
  })).then(pairs => pairs.filter(p => !_lodash.default.isNil(p))).then(pairs => pairs.map(([k, v]) => [k, !isNaN(v) && _lodash.default.toNumber(v) || (v === "true" || v === "false") && v === "true" || v])).then(pairs => _lodash.default.sortBy(pairs, "0")).then(_lodash.default.fromPairs);
}