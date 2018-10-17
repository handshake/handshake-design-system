import PropTypes from "prop-types";
import { DEFAULT_LOCALE } from "./common";

export default {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    getAdditionalMessages: PropTypes.func,
    locale: PropTypes.string.isRequired,
}

export const defaultProps = {
    locale: DEFAULT_LOCALE,
};
