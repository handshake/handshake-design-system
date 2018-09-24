import PropTypes from "prop-types";
import { DEFAULT_LOCALE } from "./common";

export default {
    children: PropTypes.node.isRequired,
    getAdditionalMessages: PropTypes.func,
    locale: PropTypes.string.isRequired,
}

export const DEFAULT_PROPS = {
    locale: DEFAULT_LOCALE,
};
