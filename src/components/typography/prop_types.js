import PropTypes from "prop-types";

export default {
    type: PropTypes.oneOf([
        "body",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
    ]),
};

export const defaultProps = {
    type: "body",
};
