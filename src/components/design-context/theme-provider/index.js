import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import ThemeContext, { ctx } from "./context";

const ThemeProvider = ({ children, theme, variables }) => (
    <ThemeContext.Provider
        value={ctx(theme, variables)}
    >
        <ThemeContext.Consumer>
            {({ variables: themeVariables }) => (
                <StyledThemeProvider
                    theme={themeVariables}
                >
                    {children}
                </StyledThemeProvider>
            )}
        </ThemeContext.Consumer>
    </ThemeContext.Provider>
);

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string,
    variables: PropTypes.object,
};

ThemeProvider.defaultProps = {
    theme: "light",
};

export default ThemeProvider;

export const ThemeSubscriber = ThemeContext.Consumer;
