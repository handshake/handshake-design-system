import React, { Component } from "react";
import propTypes, { defaultProps, fallbackTheme } from "./prop_types";
import { ThemeSubscriber } from "../design-context/theme-provider";

/*
NOTE: this component depends on using webpack with the following rule:
    {
        test: /\.svg$/,
        use: [
            {
                loader: "react-native-svg-loader",
            },
            {
                loader: "string-replace-loader",
                options: {
                    search: 'fill="#333333"',
                    replace: 'fill="replace"',
                },
            },
        ]
    }
*/

// These imports depend on using `babel-plugin-wildcard`
// with the following options: `{ "noModifyCase": true, "exts": ["js", "json", "svg"] }`
// see our .babelrc for an example usage
import * as ALL_FILL_ICONS from "../../../node_modules/@ant-design/icons/svg/fill";
import * as ALL_OUTLINE_ICONS from "../../../node_modules/@ant-design/icons/svg/outline";
// import * as ALL_TWOTONE_ICONS from "../../../node_modules/@ant-design/icons/svg/twotone";

const icons = {
    filled: ALL_FILL_ICONS,
    outlined: ALL_OUTLINE_ICONS,
    // twoTone: ALL_TWOTONE_ICONS,
}

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = [
    "placeholder",
];

class IconWrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        let { color, size, theme, type } = this.props;

        if (!type) {
            return null;
        }

        if (theme === "twoTone") {
            theme = "filled";
        }

        let iconSet = icons[theme || "default"];

        if (!iconSet[type]) {
            theme = fallbackTheme(theme, type);

            if (!theme) {
                return null;
            }

            iconSet = icons[theme];
        }

        let pxSize;
        switch (size) {
        case "large":
            pxSize = 48;
            break;
        case "small":
            pxSize = 12;
            break;
        case "default":
        default:
            pxSize = 24;
        }

        const SvgIcon = iconSet[type];
        return <SvgIcon
            height={pxSize}
            fill={color}
            width={pxSize}
        />;
    }
}

export default IconWrapper;
