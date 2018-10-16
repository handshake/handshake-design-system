"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonInfo = require("@storybook/addon-info");

var _react3 = require("@storybook/addon-knobs/react");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { decorateAction } from "@storybook/addon-actions";
// import { withState } from "@dump247/storybook-state";
(0, _react2.storiesOf)("AntD/DatePicker", module).addDecorator(_react3.withKnobs).add("Basic Options", (0, _addonInfo.withInfo)({
  header: false,
  text: `
                ![support level F](https://img.shields.io/badge/support level-F-red.svg)
                ### Usage
                ~~~js
                import { DatePicker } from "@handshake/design-system";
                ~~~
            `
})(() => _react.default.createElement(_.DatePicker, {
  disabled: (0, _react3.boolean)("Disabled", false),
  format: (0, _react3.text)("Format", "YYYY-MM-DD"),
  open: (0, _react3.boolean)("Open", false),
  placeholder: (0, _react3.text)("Placeholder"),
  popupStyle: (0, _react3.object)("Pop-up Style", {}),
  mode: (0, _react3.select)("Mode", ["date", "time", "month", "year"], "date"),
  showTime: (0, _react3.boolean)("Show TimePicker Also", false),
  size: (0, _react3.select)("Size", ["large", "default", "small"], "default"),
  style: (0, _react3.object)("Style", {}),
  transitionName: (0, _react3.select)("Transition", [// all transitions are found in antd/es/style/core/motion
  "fade", "move-down", "move-left", "move-right", "move-up", "slide-down", "slide-left", "slide-right", "slide-up", "swing", "zoom", "zoom-big", "zoom-big-fast", "zoom-down", "zoom-left", "zoom-right", "zoom-up"], "slide-up")
})));