import PropTypes from "prop-types";
import { STANDARD_PROPS } from "../../util/props";

export default {
    type: PropTypes.oneOf([
        "body",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
    ]),
    block: PropTypes.bool,
    ...STANDARD_PROPS,
};

export const defaultProps = {
    type: "body",
    block: false,
};

export function mapProps (props) {
    return {
        block: props.block,
        type: props.type,
    };
}
