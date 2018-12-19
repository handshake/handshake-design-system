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

import { default as Affix } from "./_components/affix/index.web";
import { default as Alert } from "./_components/alert/index.web";
import { default as Anchor } from "./_components/anchor/index.web";
import { default as AutoComplete } from "./_components/auto-complete/index.web";
import { default as Avatar } from "./_components/avatar/index.web";
import { default as BackTop } from "./_components/back-top/index.web";
import { default as Badge } from "./_components/badge/index.web";
import { default as Breadcrumb } from "./_components/breadcrumb/index.web";
import { default as Calendar } from "./_components/calendar/index.web";
import { default as Card } from "./_components/card/index.web";
import { default as Carousel } from "./_components/carousel/index.web";
import { default as Cascader } from "./_components/cascader/index.web";
import { default as Checkbox } from "./_components/checkbox/index.web";
import { Col, Row } from "./_components/grid/index.web";
import { default as Collapse } from "./_components/collapse/index.web";
import { default as Comment } from "./_components/comment/index.web";
import { default as DatePicker } from "./_components/date-picker/index.web";
import { default as Divider } from "./_components/divider/index.web";
import { default as Drawer } from "./_components/drawer/index.web";
import { default as Dropdown } from "./_components/dropdown/index.web";
import { default as Flex } from "./_components/flex/index.web";
import { default as Form } from "./_components/form/index.web";
import { default as Input } from "./_components/input/index.web";
import { default as InputNumber } from "./_components/input-number/index.web";
import { default as Layout } from "./_components/layout/index.web";
import { default as List } from "./_components/list/index.web";
import { default as Mention } from "./_components/mention/index.web";
import { default as Menu } from "./_components/menu/index.web";
import { default as Message } from "./_components/message/index.web";
import { default as Modal } from "./_components/modal/index.web";
import { default as Notification } from "./_components/notification/index.web";
import { default as Pagination } from "./_components/pagination/index.web";
import { default as Popconfirm } from "./_components/popconfirm/index.web";
import { default as Popover } from "./_components/popover/index.web";
import { default as Progress } from "./_components/progress/index.web";
import { default as Radio } from "./_components/radio/index.web";
import { default as Rate } from "./_components/rate/index.web";
import { default as Result } from "./_components/result/index.web";
import { default as SegmentedControl } from "./_components/segmented-control/index.web";
import { default as Select } from "./_components/select/index.web";
import { default as Skeleton } from "./_components/skeleton/index.web";
import { default as Slider } from "./_components/slider/index.web";
import { default as Steps } from "./_components/steps/index.web";
import { default as SwipeAction } from "./_components/swipe-action/index.web";
import { default as Switch } from "./_components/switch/index.web";
import { default as Table } from "./_components/table/index.web";
import { default as Tabs } from "./_components/tabs/index.web";
import { default as Tag } from "./_components/tag/index.web";
import { default as Timeline } from "./_components/timeline/index.web";
import { default as TimePicker } from "./_components/time-picker/index.web";
import { default as Toast } from "./_components/toast/index.web";
import { default as Tooltip } from "./_components/tooltip/index.web";
import { default as Transfer } from "./_components/transfer/index.web";
import { default as Tree } from "./_components/tree/index.web";
import { default as TreeSelect } from "./_components/tree-select/index.web";
import { default as Upload } from "./_components/upload/index.web";
import { default as WhiteSpace } from "./_components/white-space/index.web";
import { default as WingBlank } from "./_components/wing-blank/index.web";

import {
    FormattedDate,
    FormattedHTMLMessage,
    FormattedMessage,
    FormattedNumber,
    FormattedPlural,
    FormattedRelative,
    FormattedTime,
    injectIntl,
    intlShape,
} from "react-intl";

export const antd = {
    Affix,
    Alert,
    Anchor,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Calendar,
    Card,
    Carousel,
    Cascader,
    Checkbox,
    Col,
    Collapse,
    Comment,
    DatePicker,
    Divider,
    Drawer,
    Dropdown,
    Flex,
    Form,
    Input,
    InputNumber,
    Layout,
    List,
    Mention,
    Menu,
    Message,
    Modal,
    Notification,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Rate,
    Result,
    Row,
    SegmentedControl,
    Select,
    Skeleton,
    Slider,
    Steps,
    SwipeAction,
    Switch,
    Table,
    Tabs,
    Tag,
    Timeline,
    TimePicker,
    Toast,
    Tooltip,
    Transfer,
    Tree,
    TreeSelect,
    Upload,
    WhiteSpace,
    WingBlank,
};

export const intl = {
    FormattedDate,
    FormattedHTMLMessage,
    FormattedMessage,
    FormattedNumber,
    FormattedPlural,
    FormattedRelative,
    FormattedTime,
    injectIntl,
    intlShape,
};

export { default as Button } from "./components/button/index.web";
export { default as DesignContext } from "./components/design-context";
export { default as Icon } from "./components/icon/index.web";
export { default as Spinner } from "./components/spinner/index.web";
export { default as Text } from "./components/typography/index.web";
