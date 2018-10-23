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

// NOTE for developers: `_components` denotes a vanilla AntD/AntD-Mobile component that has not yet
// been wrapped. `components` are components that we've already wrapped

import { default as Accordion } from "./_components/accordion/index.native";
import { default as ActionSheet } from "./_components/action-sheet/index.native";
import { default as Badge } from "./_components/badge/index.native";
// Calendar // antd-mobile only
import { default as Card } from "./_components/card/index.native";
import { default as Carousel } from "./_components/carousel/index.native";
import { default as Checkbox } from "./_components/checkbox/index.native";
import { default as DatePicker } from "./_components/date-picker/index.native";
import { default as DatePickerView } from "./_components/date-picker-view/index.native";
import { default as Drawer } from "./_components/drawer/index.native";
import { default as Flex } from "./_components/flex/index.native";
import { default as Grid } from "./_components/grid/index.native";
import { default as ImagePicker } from "./_components/image-picker/index.native";
import { default as List } from "./_components/list/index.native";
// ListView // antd-mobile only
// Menu // antd-mobile only
import { default as Modal } from "./_components/modal/index.native";
// NavBar // antd-mobile only
import { default as NoticeBar } from "./_components/notice-bar/index.native";
import { default as Pagination } from "./_components/pagination/index.native";
import { default as Picker } from "./_components/picker/index.native";
import { default as PickerView } from "./_components/picker-view/index.native";
import { default as Popover } from "./_components/popover/index.native";
import { default as Progress } from "./_components/progress/index.native";
// PullToRefresh // antd-mobile only
import { default as Radio } from "./_components/radio/index.native";
// Range // antd-mobile only
import { default as Result } from "./_components/result/index.native";
import { default as SearchBar } from "./_components/search-bar/index.native";
import { default as SegmentedControl } from "./_components/segmented-control/index.native";
import { default as Slider } from "./_components/slider/index.native";
import { default as Stepper } from "./_components/stepper/index.native";
import { default as Steps } from "./_components/steps/index.native";
import { default as SwipeAction } from "./_components/swipe-action/index.native";
import { default as Switch } from "./_components/switch/index.native";
import { default as TabBar } from "./_components/tab-bar/index.native";
import { default as Tabs } from "./_components/tabs/index.native";
import { default as Tag } from "./_components/tag/index.native";
import { default as Text } from "./_components/text/index.native";
import { default as TextareaItem } from "./_components/textarea-item/index.native";
import { default as Toast } from "./_components/toast/index.native";
import { default as View } from "./_components/view/index.native";
import { default as WhiteSpace } from "./_components/white-space/index.native";
import { default as WingBlank } from "./_components/wing-blank/index.native";

import {
    FormattedDate,
    FormattedTime,
    FormattedRelative,
    FormattedNumber,
    FormattedPlural,
    FormattedMessage,
    // FormattedHTMLMessage,
    injectIntl,
    intlShape,
} from "react-intl";

export const antd = {
    Accordion,
    ActionSheet,
    Badge,
    Card,
    Carousel,
    Checkbox,
    DatePicker,
    DatePickerView,
    Drawer,
    Flex,
    Grid,
    ImagePicker,
    List,
    Modal,
    NoticeBar,
    Pagination,
    Picker,
    PickerView,
    Popover,
    Progress,
    Radio,
    Result,
    SearchBar,
    SegmentedControl,
    Slider,
    Stepper,
    Steps,
    SwipeAction,
    Switch,
    TabBar,
    Tabs,
    Tag,
    Text,
    TextareaItem,
    Toast,
    View,
    WhiteSpace,
    WingBlank,
};

export const intl = {
    FormattedDate,
    FormattedTime,
    FormattedRelative,
    FormattedNumber,
    FormattedPlural,
    FormattedMessage,
    // FormattedHTMLMessage,
    injectIntl,
    intlShape,
};

export { default as Button } from "./components/button/index.native";
export { default as DesignContext } from "./components/design-context";
export { default as Icon } from "./components/icon/index.native";
export { default as Spinner } from "./components/spinner/index.native";
