import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import LESS_VARIABLES from "../../../theme";

const ThemeProvider = ({ children, theme }) => {
    return (
        <StyledThemeProvider
            theme={_.extend({}, LESS_VARIABLES, theme)}
        >
            {children}
        </StyledThemeProvider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    theme: PropTypes.object,
};

export default ThemeProvider;

export const ThemeSubscriber = ({ children }, context) => {
    if (!children) {
        // TODO: warning
        return null;
    }
    if (typeof children === "function") {
        return children(context["__styled-components__next__"].getTheme());
    }
    // TODO: warning
    return children;
}

ThemeSubscriber.propTypes = {
    children: PropTypes.func.isRequired,
};

ThemeSubscriber.contextTypes = StyledThemeProvider.childContextTypes;
