import _ from "lodash";

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

export { default as Affix } from "./_components/affix/index.web";
export { default as Alert } from "./_components/alert/index.web";
export { default as Anchor } from "./_components/anchor/index.web";
export { default as AutoComplete } from "./_components/auto-complete/index.web";
export { default as Avatar } from "./_components/avatar/index.web";
export { default as BackTop } from "./_components/back-top/index.web";
export { default as Badge } from "./_components/badge/index.web";
export { default as Breadcrumb } from "./_components/breadcrumb/index.web";
export { default as Button } from "./components/button/index.web";
export { default as Calendar } from "./_components/calendar/index.web";
export { default as Card } from "./_components/card/index.web";
export { default as Carousel } from "./_components/carousel/index.web";
export { default as Cascader } from "./_components/cascader/index.web";
export { default as Checkbox } from "./_components/checkbox/index.web";
export { default as Collapse } from "./_components/collapse/index.web";
export { default as DatePicker } from "./_components/date-picker/index.web";
export { default as DesignContext } from "./components/design-context";
export { default as Divider } from "./_components/divider/index.web";
export { default as Drawer } from "./_components/drawer/index.web";
export { default as Dropdown } from "./_components/dropdown/index.web";
export { default as Flex } from "./_components/flex/index.web";
export { default as Form } from "./_components/form/index.web";
export { Row, Col } from "./_components/grid/index.web";
export { default as Icon } from "./components/icon/index.web";
export { default as Input } from "./_components/input/index.web";
export { default as InputNumber } from "./_components/input-number/index.web";
export { default as Layout } from "./_components/layout/index.web";
export { default as List } from "./_components/list/index.web";
export { default as Mention } from "./_components/mention/index.web";
export { default as Menu } from "./_components/menu/index.web";
export { default as Message } from "./_components/message/index.web";
export { default as Modal } from "./_components/modal/index.web";
export { default as Notification } from "./_components/notification/index.web";
export { default as Pagination } from "./_components/pagination/index.web";
export { default as Popconfirm } from "./_components/popconfirm/index.web";
export { default as Popover } from "./_components/popover/index.web";
export { default as Progress } from "./_components/progress/index.web";
export { default as Radio } from "./_components/radio/index.web";
export { default as Rate } from "./_components/rate/index.web";
export { default as Result } from "./_components/result/index.web";
export { default as SegmentedControl } from "./_components/segmented-control/index.web";
export { default as Select } from "./_components/select/index.web";
export { default as Skeleton } from "./_components/skeleton/index.web";
export { default as Slider } from "./_components/slider/index.web";
export { default as Spinner } from "./components/spinner/index.web";
export { default as Steps } from "./_components/steps/index.web";
export { default as SwipeAction } from "./_components/swipe-action/index.web";
export { default as Switch } from "./_components/switch/index.web";
export { default as Table } from "./_components/table/index.web";
export { default as Tabs } from "./_components/tabs/index.web";
export { default as Tag } from "./_components/tag/index.web";
export { default as TimePicker } from "./_components/time-picker/index.web";
export { default as Timeline } from "./_components/timeline/index.web";
export { default as Toast } from "./_components/toast/index.web";
export { default as Tooltip } from "./_components/tooltip/index.web";
export { default as Transfer } from "./_components/transfer/index.web";
export { default as Tree } from "./_components/tree/index.web";
export { default as TreeSelect } from "./_components/tree-select/index.web";
export { default as Upload } from "./_components/upload/index.web";
export { default as WhiteSpace } from "./_components/white-space/index.web";
export { default as WingBlank } from "./_components/wing-blank/index.web";
