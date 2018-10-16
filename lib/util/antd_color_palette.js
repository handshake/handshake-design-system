"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _antDesignPalettes = require("ant-design-palettes");

function colorPalette(color, index) {
  return (0, _antDesignPalettes.generate)(color)[index];
}

;
var _default = colorPalette;
exports.default = _default;