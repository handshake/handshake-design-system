import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider as StyledThemeProvider, ThemeConsumer as ThemeSubscriber } from "styled-components";

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
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
};

export default ThemeProvider;

export {
    ThemeSubscriber
};
