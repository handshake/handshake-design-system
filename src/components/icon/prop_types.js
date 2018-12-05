import _ from "lodash";
import * as HS_ICONS from "./icons/index";
import iconManifest from "@ant-design/icons/lib/manifest";
import PropTypes from "prop-types";

export const ALL_TYPES = _.union(
    iconManifest.fill.map(icon => `ant-${icon}`),
    iconManifest.outline.map(icon => `ant-${icon}`),
    iconManifest.twotone.map(icon => `ant-${icon}`),
    Object.keys(HS_ICONS).map(icon => `hs-${icon}`),
).sort();

export default {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.oneOf(["default", "large", "small"]),
        PropTypes.number,
    ]),
    spin: PropTypes.bool,
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

function getSize (size) {
    return typeof size === "number" ? size : ({
        default: 24,
        large: 48,
        small: 12,
    }[size] || parseInt(size));
}

export function mapPropsForWeb (props) {
    return {
        className: props.className,
        spin: props.spin, // TODO: spin is broken now
        style: {
            color: props.color,
            fontSize: `${getSize(props.size)}px`,
            ...props.style,
        },
    };
}

export function mapPropsForMobile (props) {
    return {
        color: props.color,
        pxSize: getSize(props.size),
        spin: props.spin,
        style: props.style,
            theme: props.theme,
            type: props.type,
    };
}
