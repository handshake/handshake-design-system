import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import __LESS_VARIABLES__ from "../../../theme";

const ThemeProvider = ({ children, theme }) => (
    <StyledThemeProvider
        theme={_.extend({}, __LESS_VARIABLES__, theme)}
    >
        {children}
    </StyledThemeProvider>
);

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
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
