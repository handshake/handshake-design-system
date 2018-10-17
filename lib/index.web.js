"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _index58.default;
  }
});
Object.defineProperty(exports, "DesignContext", {
  enumerable: true,
  get: function () {
    return _designContext.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _index59.default;
  }
});
Object.defineProperty(exports, "Spinner", {
  enumerable: true,
  get: function () {
    return _index60.default;
  }
});
exports.antd = void 0;

var _index = _interopRequireDefault(require("./_components/affix/index.web"));

var _index2 = _interopRequireDefault(require("./_components/alert/index.web"));

var _index3 = _interopRequireDefault(require("./_components/anchor/index.web"));

var _index4 = _interopRequireDefault(require("./_components/auto-complete/index.web"));

var _index5 = _interopRequireDefault(require("./_components/avatar/index.web"));

var _index6 = _interopRequireDefault(require("./_components/back-top/index.web"));

var _index7 = _interopRequireDefault(require("./_components/badge/index.web"));

var _index8 = _interopRequireDefault(require("./_components/breadcrumb/index.web"));

var _index9 = _interopRequireDefault(require("./_components/calendar/index.web"));

var _index10 = _interopRequireDefault(require("./_components/card/index.web"));

var _index11 = _interopRequireDefault(require("./_components/carousel/index.web"));

var _index12 = _interopRequireDefault(require("./_components/cascader/index.web"));

var _index13 = _interopRequireDefault(require("./_components/checkbox/index.web"));

var _index14 = _interopRequireDefault(require("./_components/collapse/index.web"));

var _index15 = _interopRequireDefault(require("./_components/date-picker/index.web"));

var _index16 = _interopRequireDefault(require("./_components/divider/index.web"));

var _index17 = _interopRequireDefault(require("./_components/drawer/index.web"));

var _index18 = _interopRequireDefault(require("./_components/dropdown/index.web"));

var _index19 = _interopRequireDefault(require("./_components/flex/index.web"));

var _index20 = _interopRequireDefault(require("./_components/form/index.web"));

var _index21 = require("./_components/grid/index.web");

var _index22 = _interopRequireDefault(require("./_components/input/index.web"));

var _index23 = _interopRequireDefault(require("./_components/input-number/index.web"));

var _index24 = _interopRequireDefault(require("./_components/layout/index.web"));

var _index25 = _interopRequireDefault(require("./_components/list/index.web"));

var _index26 = _interopRequireDefault(require("./_components/mention/index.web"));

var _index27 = _interopRequireDefault(require("./_components/menu/index.web"));

var _index28 = _interopRequireDefault(require("./_components/message/index.web"));

var _index29 = _interopRequireDefault(require("./_components/modal/index.web"));

var _index30 = _interopRequireDefault(require("./_components/notification/index.web"));

var _index31 = _interopRequireDefault(require("./_components/pagination/index.web"));

var _index32 = _interopRequireDefault(require("./_components/popconfirm/index.web"));

var _index33 = _interopRequireDefault(require("./_components/popover/index.web"));

var _index34 = _interopRequireDefault(require("./_components/progress/index.web"));

var _index35 = _interopRequireDefault(require("./_components/radio/index.web"));

var _index36 = _interopRequireDefault(require("./_components/rate/index.web"));

var _index37 = _interopRequireDefault(require("./_components/result/index.web"));

var _index38 = _interopRequireDefault(require("./_components/segmented-control/index.web"));

var _index39 = _interopRequireDefault(require("./_components/select/index.web"));

var _index40 = _interopRequireDefault(require("./_components/skeleton/index.web"));

var _index41 = _interopRequireDefault(require("./_components/slider/index.web"));

var _index42 = _interopRequireDefault(require("./_components/steps/index.web"));

var _index43 = _interopRequireDefault(require("./_components/swipe-action/index.web"));

var _index44 = _interopRequireDefault(require("./_components/switch/index.web"));

var _index45 = _interopRequireDefault(require("./_components/table/index.web"));

var _index46 = _interopRequireDefault(require("./_components/tabs/index.web"));

var _index47 = _interopRequireDefault(require("./_components/tag/index.web"));

var _index48 = _interopRequireDefault(require("./_components/time-picker/index.web"));

var _index49 = _interopRequireDefault(require("./_components/timeline/index.web"));

var _index50 = _interopRequireDefault(require("./_components/toast/index.web"));

var _index51 = _interopRequireDefault(require("./_components/tooltip/index.web"));

var _index52 = _interopRequireDefault(require("./_components/transfer/index.web"));

var _index53 = _interopRequireDefault(require("./_components/tree/index.web"));

var _index54 = _interopRequireDefault(require("./_components/tree-select/index.web"));

var _index55 = _interopRequireDefault(require("./_components/upload/index.web"));

var _index56 = _interopRequireDefault(require("./_components/white-space/index.web"));

var _index57 = _interopRequireDefault(require("./_components/wing-blank/index.web"));

var _index58 = _interopRequireDefault(require("./components/button/index.web"));

var _designContext = _interopRequireDefault(require("./components/design-context"));

var _index59 = _interopRequireDefault(require("./components/icon/index.web"));

var _index60 = _interopRequireDefault(require("./components/spinner/index.web"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `.babelrc` for importing only the components you use using `babel-plugin-import`
 *     {
 *         "plugins": [
 *             ["import", {
 *                 "fileName": "index.web.js",
 *                 "libraryName": "@handshake/design-system",
 *                 "libraryDir": "src/components",
 *                 "style": false
 *             }]
 *         ]
 *     }
 */
// NOTE for developers: `_components` denotes a vanilla AntD/AntD-Mobile component that has not yet
// been wrapped. `components` are components that we've already wrapped
const antd = {
  Affix: _index.default,
  Alert: _index2.default,
  Anchor: _index3.default,
  AutoComplete: _index4.default,
  Avatar: _index5.default,
  BackTop: _index6.default,
  Badge: _index7.default,
  Breadcrumb: _index8.default,
  Calendar: _index9.default,
  Card: _index10.default,
  Carousel: _index11.default,
  Cascader: _index12.default,
  Checkbox: _index13.default,
  Col: _index21.Col,
  Collapse: _index14.default,
  DatePicker: _index15.default,
  Divider: _index16.default,
  Drawer: _index17.default,
  Dropdown: _index18.default,
  Flex: _index19.default,
  Form: _index20.default,
  Input: _index22.default,
  InputNumber: _index23.default,
  Layout: _index24.default,
  List: _index25.default,
  Mention: _index26.default,
  Menu: _index27.default,
  Message: _index28.default,
  Modal: _index29.default,
  Notification: _index30.default,
  Pagination: _index31.default,
  Popconfirm: _index32.default,
  Popover: _index33.default,
  Progress: _index34.default,
  Radio: _index35.default,
  Rate: _index36.default,
  Result: _index37.default,
  Row: _index21.Row,
  SegmentedControl: _index38.default,
  Select: _index39.default,
  Skeleton: _index40.default,
  Slider: _index41.default,
  Steps: _index42.default,
  SwipeAction: _index43.default,
  Switch: _index44.default,
  Table: _index45.default,
  Tabs: _index46.default,
  Tag: _index47.default,
  TimePicker: _index48.default,
  Timeline: _index49.default,
  Toast: _index50.default,
  Tooltip: _index51.default,
  Transfer: _index52.default,
  Tree: _index53.default,
  TreeSelect: _index54.default,
  Upload: _index55.default,
  WhiteSpace: _index56.default,
  WingBlank: _index57.default
};
exports.antd = antd;