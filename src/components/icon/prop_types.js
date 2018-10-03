import iconManifest from "@ant-design/icons/lib/manifest";
import PropTypes from "prop-types";

export default {
    color: PropTypes.string,
    size: PropTypes.oneOf(["default", "large", "small"]), // ?
    // spin: PropTypes.bool,
    theme: PropTypes.oneOf(["filled", "outlined", "twoTone"]), // twoTone might be tricky on RN
    type: PropTypes.string.isRequired,
    // type: PropTypes.oneOf([TBD]).isRequired,
}

export const defaultProps = {
    color: "#000",
    size: "default",
    // spin: false,
    theme: "outlined",
};

export function fallbackTheme (theme, type) {
    if (theme === "twoTone" && iconManifest.fill.includes(type)) {
        console.warn("There is no TwoTone Icon for %s, defaulting to Filled", type);
        return "filled";
    } else if (theme === "twoTone" && iconManifest.outline.includes(type)) {
        console.warn("There is no TwoTone Icon for %s, defaulting to Outlined", type);
        return "outline";
    } else if (theme === "filled" && iconManifest.outline.includes(type)) {
        console.warn("There is no Filled Icon for %s, defaulting to Outlined", type);
        return "outlined";
    } else if (theme === "outlined" && iconManifest.fill.includes(type)) {
        console.warn("There is no Outlined Icon for %s, defaulting to Filled", type);
        return "filled";
    }
    console.error("There is no Icon for %s", type);
    return false;
}

export function mapPropsForWeb (props) {
    let { theme, type } = props;
    const manifestType =  (() => ({
        filled: "fill",
        outlined: "outline",
        twoTone: "twotone",
    }[theme]))();
    if (!iconManifest[manifestType].includes(type)) {
        theme = fallbackTheme(theme, type);
    }
    if (theme === "twoTone") {
        return {
            style: {
                fontSize: ((size) => ({
                    default: "24px",
                    large: "48px",
                    small: "12px",
                }[size] || size))(props.size),
            },
            theme,
            twoToneColor: props.color,
            type,
        }
    }
    return {
        style: {
            color: props.color,
            fontSize: ((size) => ({
                default: "24px",
                large: "48px",
                small: "12px",
            }[size] || size))(props.size),
        },
        theme,
        type,
    };
}
