import PropTypes from "prop-types";

export default {
    block: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    onClick: PropTypes.func,
    // shape: PropTypes.oneOf(["circle", "circle-outline"]), // FIXME: Not supported on mobile yet
    size: PropTypes.oneOf(["large", "small"]),
    style: PropTypes.object,
    type: PropTypes.oneOf(["primary", "secondary", "confirm", "danger", "link"]),
};

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
        disabled: props.disabled || props.loading,
        ghost: false,
        hsloading: props.loading,
        // icon: props.icon, // handled separately
        // loading: props.loading, // handled separately
        // loadingText: props.loadingText, // handled separately
        onClick: props.onClick,
        // shape: props.shape,
        size: (size => ({ default: "large" })[size] || size)(props.size),
        style: props.style,
        type: props.type,
    };
}

export function mapPropsForMobile (props) {
    return {
        // block: props.block, // handled separately
        // children: props.children, // handled separately
        disabled: props.disabled || props.loading,
        hsloading: props.loading,
        // icon: props.icon, // handled separately
        // loading: props.loading, // handled separately
        // loadingText: props.loadingText, // handled separately
        onClick: props.onClick,
        size: (size => ({ default: "large" })[size] || size)(props.size),
        style: props.style,
        type: props.type,
    };
}
