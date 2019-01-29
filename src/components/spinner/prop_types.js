import PropTypes from "prop-types";
import { STANDARD_LEAF_PROPS } from "../../util/props";

export default {
    // Render in a block vs inline
    block: PropTypes.bool,

    // `Spin` supports children, but
    // `ActivityIndicator` does not.
    // children: PropTypes.node,

    // Render after a delay
    // only supported by `Spin`,
    // and it's kinda tricky to implement, so... not supported.
    // delay: PropTypes.number,

    // Is the spinner active?
    // maps to `Spin`'s `spinning` prop or
    // `ActivityIndicator`'s `animating` prop
    enabled: PropTypes.bool,

    // `Spin` supports a custom indicator, but
    // `ActivityIndicator` does not.
    // indicator: PropTypes.node,

    // How big should the spinner be?
    // NOTE: `Spin` also supports `default` size, but
    //       `ActivityIndicator` does not
    size: PropTypes.oneOf(["large", "small"]),

    // Text to show along with the spinner
    // maps to `Spin`'s `tip` prop or
    // `ActivityIndicator`'s `text` prop
    text: PropTypes.string,

    // Render in a popup
    // natively supported by `ActivityIndicator`
    // and with by us for `Spin`
    toast: PropTypes.bool,

    ...STANDARD_LEAF_PROPS,
};

export const defaultProps = {
    block: false,
    enabled: true,
    size: "small",
    toast: false,
};

export function mapPropsForWeb (props) {
    const { block, toast } = props;
    return {
        size: props.size || ((block || toast) && "large") || "small",
        tip: props.text,
    };
}

export function mapPropsForMobile (props) {
    const { block, toast } = props;
    return {
        size: props.size || ((block && !toast) && "large") || "small",
        text: props.text,
        toast: props.toast,
    };
}
