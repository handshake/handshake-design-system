import PropTypes from "prop-types";

export default {
    block: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    // shape: PropTypes.oneOf(["circle", "circle-outline"]), // FIXME: Not supported on mobile yet
    size: PropTypes.oneOf(["large", "default", "small"]),
    type: PropTypes.oneOf(["default", "primary", "ghost", "warning"]), // TODO: add `dashed` for RN
    webHtmlType: PropTypes.oneOf(["submit", "button", "reset"]),
}

export const defaultProps = {
    // block: WEB ? false : true,
    disabled: false,
    loading: false,
    size: "default",
    style: {},
    type: "default",
    // webHtmlType: "button",
};

export function mapPropsForWeb (props) {
    return {
        block: props.block,
        children: props.children,
        className: props.className,
        disabled: props.disabled,
        ghost: props.type === "ghost",
        icon: props.icon,
        loading: props.loading,
        onClick: props.onClick,
        // shape: props.shape,
        size: props.size,
        style: props.style,
        type: ((type) => ({
            ghost: "default",
            warning: "danger",
        }[type] || type))(props.type),
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
        size: ((size) => ({ default: "defaultSize" })[size] || size)(props.size),
        style: props.style,
        type: props.type
    };
}

export const themes = {
    light: {
        primary: {
            default: {
                backgroundColor: "hs-color-primary",
                borderColor: "hs-color-primary",
                color: "hs-color-white-1",
            },
            active: {
                backgroundColor: "darken(_, 5)",
                borderColor: "darken(_, 5)",
                color: "_",
            },
            disabled: {
                backgroundColor: "hs-color-gray-1",
                borderColor: "hs-color-gray-3",
                color: "hs-color-gray-7",
            },
            hover: {
                backgroundColor: "brighten(_, 10)",
                borderColor: "brighten(_, 10)",
                color: "_",
            },
            loading: {

            }
        },
        secondary: {

        },
        confirm: {

        },
        danger: {

        },
        link: {

        },
    },
};
