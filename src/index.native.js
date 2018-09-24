import _ from "lodash";

/**
 * `.babelrc` for importing only the components you use using `babel-plugin-import`
 *     {
 *         "plugins": [
 *             ["import", {
 *                 "fileName": "index.native.js",
 *                 "libraryName": "@handshake/design-system",
 *                 "libraryDir": "src/components",
 *                 "style": false
 *             }]
 *         ]
 *     }
 */

// NOTE: we do not automatically export any custom fonts. These must be opted into by importing them
// into your project. The manner of doing this depends on... many things. Our storybook app uses
// Expo, which provides a simple way of loading a font:
//     import { Font } from "expo";
//
//     async componentDidMount() {
//         await Font.loadAsync({
//             BrandonText: require("../src/fonts/BrandonText/Regular.otf"),
//         });
//     }

// NOTE for developers: `_components` denotes a vanilla AntD/AntD-Mobile component that has not yet
// been wrapped. `components` are components that we've already wrapped

export { default as Accordion } from "./_components/accordion/index.native";
export { default as ActionSheet } from "./_components/action-sheet/index.native";
export { default as Badge } from "./_components/badge/index.native";
export { default as Button } from "./_components/button/index.native";
// Calendar // antd-mobile only
export { default as Card } from "./_components/card/index.native";
export { default as Carousel } from "./_components/carousel/index.native";
export { default as Checkbox } from "./_components/checkbox/index.native";
export { default as DatePicker } from "./_components/date-picker/index.native";
export { default as DatePickerView } from "./_components/date-picker-view/index.native";
export { default as DesignContext } from "./components/design-context";
export { default as Drawer } from "./_components/drawer/index.native";
export { default as Flex } from "./_components/flex/index.native";
export { default as Grid } from "./_components/grid/index.native";
export { default as Icon } from "./_components/icon/index.native";
export { default as ImagePicker } from "./_components/image-picker/index.native";
export { default as List } from "./_components/list/index.native";
// ListView // antd-mobile only
// Menu // antd-mobile only
export { default as Modal } from "./_components/modal/index.native";
// NavBar // antd-mobile only
export { default as NoticeBar } from "./_components/notice-bar/index.native";
export { default as Pagination } from "./_components/pagination/index.native";
export { default as Picker } from "./_components/picker/index.native";
export { default as PickerView } from "./_components/picker-view/index.native";
export { default as Popover } from "./_components/popover/index.native";
export { default as Progress } from "./_components/progress/index.native";
// PullToRefresh // antd-mobile only
export { default as Radio } from "./_components/radio/index.native";
// Range // antd-mobile only
export { default as Result } from "./_components/result/index.native";
export { default as SearchBar } from "./_components/search-bar/index.native";
export { default as SegmentedControl } from "./_components/segmented-control/index.native";
export { default as Slider } from "./_components/slider/index.native";
export { default as Spinner } from "./components/spinner/index.native";
export { default as Stepper } from "./_components/stepper/index.native";
export { default as Steps } from "./_components/steps/index.native";
export { default as SwipeAction } from "./_components/swipe-action/index.native";
export { default as Switch } from "./_components/switch/index.native";
export { default as TabBar } from "./_components/tab-bar/index.native";
export { default as Tabs } from "./_components/tabs/index.native";
export { default as Tag } from "./_components/tag/index.native";
export { default as Text } from "./_components/text/index.native";
export { default as TextareaItem } from "./_components/textarea-item/index.native";
export { default as Toast } from "./_components/toast/index.native";
export { default as View } from "./_components/view/index.native";
export { default as WhiteSpace } from "./_components/white-space/index.native";
export { default as WingBlank } from "./_components/wing-blank/index.native";
