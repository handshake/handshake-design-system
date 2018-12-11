import _ from "lodash";
import PropTypes from "prop-types";

import registry from "./registry";

export default {
    color: PropTypes.string,
    fillColor: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["default", "large", "small"]),
        PropTypes.number,
    ]),
    spin: PropTypes.bool,
    strokeColor: PropTypes.string,
    type: PropTypes.oneOf(["filled", "outlined", "twoTone"]),
    icon: PropTypes.string.isRequired,
};

export const iconPropTypes = {
    fill: PropTypes.string,
    size: PropTypes.number,
    stroke: PropTypes.string,
};

export const defaultProps = {
    // color: "#000",
    // size: "default",
    spin: false,
    style: {},
    type: "outlined",
};

function getSize (size) {
    return typeof size === "number" ? size : ({
        default: 24,
        large: 48,
        small: 12,
    }[size || "default"] || parseInt(size));
}

export function mapProps (props) {
    const {
        className,
        icon: iconName,
        size,
        spin,
        style,
        type,
    } = props;

    const icon = registry.get(iconName, type);
    const colors = registry.mapColors(iconName, icon.iconType, props);

    return {
        className,
        colors,
        icon,
        size: getSize(size),
        spin,
        style,
    };
}
