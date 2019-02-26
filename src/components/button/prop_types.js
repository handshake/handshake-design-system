import PropTypes from "prop-types";
import { STANDARD_PROPS } from "../../util/props";

export default {
    block: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    iconPlacement: PropTypes.oneOf(["left", "right"]),
    iconType: PropTypes.oneOf(["filled", "outlined", "twoTone"]),
    loading: PropTypes.bool,
    loadingText: PropTypes.string,
    onClick: PropTypes.func,
    // shape: PropTypes.oneOf(["circle", "circle-outline"]), // FIXME: Not supported on mobile yet
    size: PropTypes.oneOf(["large", "small"]),
    type: PropTypes.oneOf(["primary", "secondary", "confirm", "danger", "link"]),
    ...STANDARD_PROPS,
};

export const defaultProps = {
    // block: WEB ? false : true,
    disabled: false,
    iconPlacement: "left",
    loading: false,
    size: "large",
    type: "secondary",
};

export function mapPropsForWeb (props) {
    return {
        block: props.block,
        disabled: props.disabled || props.loading,
        ghost: false,
        hsLoading: props.loading,
        // icon: props.icon, // handled separately
        // loading: props.loading, // handled separately
        // loadingText: props.loadingText, // handled separately
        // shape: props.shape,
        size: (size => ({ default: "large" })[size] || size)(props.size),
        type: props.type,
    };
}

export function mapPropsForMobile (props) {
    return {
        // block: props.block, // handled separately
        disabled: props.disabled || props.loading,
        hsLoading: props.loading,
        // icon: props.icon, // handled separately
        // loading: props.loading, // handled separately
        // loadingText: props.loadingText, // handled separately
        size: (size => ({ default: "large" })[size] || size)(props.size),
        type: props.type,
    };
}
