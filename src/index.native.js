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

import * as antd from "@ant-design/react-native/lib/index.js";
import { default as Text } from "@ant-design/react-native/lib/text";
import { default as View } from "@ant-design/react-native/lib/view";

antd.Text = Text;
antd.View = View;

import {
    FormattedDate,
    // FormattedHTMLMessage,
    FormattedMessage,
    FormattedNumber,
    FormattedPlural,
    FormattedRelative,
    FormattedTime,
    injectIntl,
    intlShape,
} from "react-intl";

export const intl = {
    FormattedDate,
    FormattedMessage,
    FormattedNumber,
    FormattedPlural,
    FormattedRelative,
    FormattedTime,
    // FormattedHTMLMessage,
    injectIntl,
    intlShape,
};

export { default as Button } from "./components/button/index.native";
export { default as DesignContext } from "./components/design-context";
export { default as Icon } from "./components/icon/index.native";
export { default as Spinner } from "./components/spinner/index.native";
export { default as Text } from "./components/typography/index.native";

export {
    antd,
};
