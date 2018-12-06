import _ from "lodash";
import colorPalette from "../../util/antd_color_palette";
import * as FA_ICONS from "react-icons/fa/index";
import * as FI_ICONS from "react-icons/fi/index";
import getIcon from "./get_icon";
import * as GO_ICONS from "react-icons/go/index";
import * as HS_ICONS from "./icons/index";
import iconManifest from "@ant-design/icons/lib/manifest";
import * as IO_ICONS from "react-icons/io/index";
import * as MD_ICONS from "react-icons/md/index";
import PropTypes from "prop-types";
import * as TI_ICONS from "react-icons/ti/index";

export const ALL_TYPES = _.union(
    iconManifest.fill.map(icon => `ant-${icon}`),
    iconManifest.outline.map(icon => `ant-${icon}`),
    iconManifest.twotone.map(icon => `ant-${icon}`),
    Object.keys(HS_ICONS).map(icon => `hs-${icon}`),
    Object.keys(FA_ICONS).map(icon => _.kebabCase(icon)),
    Object.keys(FI_ICONS).map(icon => _.kebabCase(icon)),
    Object.keys(GO_ICONS).map(icon => _.kebabCase(icon)),
    Object.keys(IO_ICONS).map(icon => _.kebabCase(icon.replace(/-outline$/, ""))),
    Object.keys(MD_ICONS).map(icon => _.kebabCase(icon.replace(/-outline$/, ""))),
    Object.keys(TI_ICONS).map(icon => _.kebabCase(icon.replace(/-outline$/, ""))),
).sort();

console.log(ALL_TYPES, ALL_TYPES.length);

const ALL_ICON_SETS = ["ant", "antd", "fa", "fi", "go", "hs", "io", "md", "ti"];
const ALL_REACT_ICON_SETS = {
    fa: FA_ICONS,
    fi: FI_ICONS,
    go: GO_ICONS,
    io: IO_ICONS,
    md: MD_ICONS,
    ti: TI_ICONS,
};

export default {
    color: PropTypes.string,
    fillColor: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["default", "large", "small"]),
        PropTypes.number,
    ]),
    spin: PropTypes.bool,
    strokeColor: PropTypes.string,
    theme: PropTypes.oneOf(["filled", "outlined", "twoTone"]),
    // type: PropTypes.string.isRequired,
    type: PropTypes.oneOf(ALL_TYPES).isRequired,
};

export const defaultProps = {
    // color: "#000",
    // size: "default",
    spin: false,
    style: {},
    theme: "outlined",
};

function getTheme (theme, iconSet, iconName) {
    switch (iconSet) {
    case "fa":
    case "go":
        return "filled";
    case "io":
    case "md":
    case "ti":
        return (
            theme === "outlined"
            && ALL_REACT_ICON_SETS[iconSet][_.upperFirst(_.camelCase(
                `${iconSet}-${iconName}-outline`,
            ))]
            && "outlined"
        )
            || "filled";
    case "hs":
        return "outlined";
    case "ant":
    case "antd":
        switch (theme) {
        case "twoTone":
            return (iconManifest.twotone.includes(iconName) && "twoTone")
                || (iconManifest.fill.includes(iconName) && "filled")
                || (iconManifest.outline.includes(iconName) && "outlined")
                || "twoTone";
        case "filled":
            return (iconManifest.fill.includes(iconName) && "filled")
                || (iconManifest.twotone.includes(iconName) && "twoTone")
                || (iconManifest.outline.includes(iconName) && "outlined")
                || "filled";
        case "outlined":
            return (iconManifest.outline.includes(iconName) && "outlined")
                || (iconManifest.twotone.includes(iconName) && "twoTone")
                || (iconManifest.fill.includes(iconName) && "filled")
                || "outlined";
        default:
            return theme;
        }
    case "fi":
    default:
        return theme;
    }
}

function getSize (size) {
    return typeof size === "number" ? size : ({
        default: 24,
        large: 48,
        small: 12,
    }[size] || parseInt(size));
}

function getFillColor (strokeColor, iconSet, theme) {
    if (["io", "md", "ti"].includes(iconSet)) {
        return strokeColor;
    }
    return ({
        filled: strokeColor,
        outlined: "none",
        twoTone: colorPalette(strokeColor, 0),
    }[theme]);
}

export function mapProps (props) {
    const {
        className,
        color,
        spin,
        style,
        type,
    } = props;
    let {
        fillColor,
        size,
        strokeColor,
        theme,
    } = props;
    let iconSet = type.split("-")[0];
    let iconName = type.replace(/^\w+-/, "");
    if (!ALL_ICON_SETS.includes(iconSet)) {
        iconSet = "hs";
        iconName = type;
    }
    size = getSize(size);
    theme = getTheme(theme, iconSet, iconName);
    fillColor = fillColor || getFillColor(color || strokeColor, iconSet, theme);
    strokeColor = strokeColor || color;

    const newProps = {
        className,
        fillColor,
        iconName,
        iconSet,
        size,
        spin, // TODO: spin is broken now
        strokeColor,
        style,
        theme,
    };

    const icon = getIcon(newProps);

    return {
        icon,
        ...newProps,
    };
}

export function mapPropsForMobile (props) {
    // TODO: deprecated; use above mapProps function
    return {
        color: props.color,
        pxSize: getSize(props.size),
        spin: props.spin,
        style: props.style,
        theme: props.theme,
        type: props.type,
    };
}
