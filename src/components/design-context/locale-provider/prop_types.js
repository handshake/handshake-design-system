import { DEFAULT_LOCALE } from "./common";
import PropTypes from "prop-types";

export default {
    children: PropTypes.node.isRequired,
    getAdditionalMessages: PropTypes.func,
    locale: PropTypes.string.isRequired,
};

export const defaultProps = {
    locale: DEFAULT_LOCALE,
};
