import PropTypes from "prop-types";

export default {
    block: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    // shape: PropTypes.oneOf(["circle", "circle-outline"]), // FIXME: Not supported on mobile yet
    size: PropTypes.oneOf(["large", "small"]),
    type: PropTypes.oneOf(["primary", "secondary", "confirm", "danger", "link"]),
}

export const defaultProps = {
    // block: WEB ? false : true,
    disabled: false,
    loading: false,
    size: "large",
    style: {},
    type: "secondary",
};

export function mapPropsForWeb (props) {
    return {
        block: props.block,
        children: props.children,
        className: props.className,
        disabled: props.disabled,
        ghost: false,
        icon: props.icon,
        loading: props.loading,
        onClick: props.onClick,
        // shape: props.shape,
        size: ((size) => ({ default: "large" })[size] || size)(props.size),
        style: props.style,
        type: props.type,
        htmlType: props.webHtmlType,
    };
}

export function mapPropsForMobile (props) {
    return {
        // block: props.block, // handled separately
        // children: props.children, // handled separately
        disabled: props.disabled,
        // icon: props.icon, // handled separately
        loading: props.loading,
        onClick: props.onClick,
        size: ((size) => ({ default: "large" })[size] || size)(props.size),
        style: props.style,
        type: props.type
    };
}
