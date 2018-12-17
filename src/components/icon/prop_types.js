import _ from "lodash";
import PropTypes from "prop-types";

import registry from "./registry";

export default {
    color: PropTypes.string,
    fillColor: PropTypes.string,
    flip: PropTypes.oneOf(["horizontal", "vertical"]),
    icon: PropTypes.string.isRequired,
    rotate: PropTypes.number,
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["default", "large", "small"]),
        PropTypes.number,
    ]),
    spin: PropTypes.bool,
    strokeColor: PropTypes.string,
    type: PropTypes.oneOf(["filled", "outlined", "twoTone"]),
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
        flip,
        icon: iconName,
        rotate,
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
        flip,
        icon,
        rotate: !spin && rotate,
        size: getSize(size),
        spin,
        style,
    };
}
