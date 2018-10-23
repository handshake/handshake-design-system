"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.t = t;

function t(v, theme, ...extra) {
  if (typeof v === "string") {
    return theme[v];
  }

  return v(theme, ...extra);
}