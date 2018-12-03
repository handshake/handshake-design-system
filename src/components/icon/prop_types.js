import _ from "lodash";
import iconManifest from "@ant-design/icons/lib/manifest";
import PropTypes from "prop-types";

export default {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["default", "large", "small"]),
        PropTypes.number,
    ]),
    spin: PropTypes.bool,
    theme: PropTypes.oneOf(["filled", "outlined", "twoTone"]),
    type: PropTypes.string.isRequired,
    // type: PropTypes.oneOf([TBD]).isRequired,
};

export const defaultProps = {
    // color: "#000",
    // size: "default",
    spin: false,
    style: {},
    theme: "outlined",
};

export const ALL_TYPES = _.union(
    iconManifest.fill,
    iconManifest.outline,
    iconManifest.twotone,
).sort();

export function fallbackTheme (theme, type) {
    if (theme === "twoTone" && iconManifest.fill.includes(type)) {
        console.warn("There is no TwoTone Icon for %s, defaulting to Filled", type);
        return "filled";
    }
    if (theme === "twoTone" && iconManifest.outline.includes(type)) {
        console.warn("There is no TwoTone Icon for %s, defaulting to Outlined", type);
        return "outline";
    }
    if (theme === "filled" && iconManifest.outline.includes(type)) {
        console.warn("There is no Filled Icon for %s, defaulting to Outlined", type);
        return "outlined";
    }
    if (theme === "outlined" && iconManifest.fill.includes(type)) {
        console.warn("There is no Outlined Icon for %s, defaulting to Filled", type);
        return "filled";
    }
    console.error("There is no Icon for %s", type);
    return false;
}

function getSize (size) {
    return typeof size === "number" ? size : ({
        default: 24,
        large: 48,
        small: 12,
    }[size] || parseInt(size));
}

export function mapPropsForWeb (props) {
    let { theme } = props;
    const { type } = props;
    const manifestType = (() => ({
        filled: "fill",
        outlined: "outline",
        twoTone: "twotone",
    }[theme]))();
    if (!iconManifest[manifestType].includes(type)) {
        theme = fallbackTheme(theme, type);
    }
    if (theme === "twoTone") {
        return {
            className: props.className,
            spin: props.spin,
            style: {
                fontSize: `${getSize(props.size)}px`,
                ...props.style,
            },
            theme,
            twoToneColor: props.color,
            type,
        };
    }
    return {
        className: props.className,
        spin: props.spin,
        style: {
            color: props.color,
            fontSize: `${getSize(props.size)}px`,
            ...props.style,
        },
        theme,
        type,
    };
}

export function mapPropsForMobile (props) {
    let { theme } = props;
    const { type } = props;
    const manifestType = (() => ({
        filled: "fill",
        outlined: "outline",
        twoTone: "twotone",
    }[theme]))();
    if (!iconManifest[manifestType].includes(type)) {
        theme = fallbackTheme(theme, type);
    }
    return {
        color: props.color,
        pxSize: getSize(props.size),
        spin: props.spin,
        style: props.style,
        theme,
        type,
    };
}
