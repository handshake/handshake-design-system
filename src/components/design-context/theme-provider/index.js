import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import __LESS_VARIABLES__ from "../../../theme";

// Research notes on build-time RN theme customization:
// At load time, we can modify antd variables by importing "antd-mobile-rn/es/style/themes/default.native"
// and then modifying values. However, once any antd-mobile-rn Component has been imported, it is
// too late to change this. Which means we can't do this inside of ThemeProvider below.

// Research notes on run-time RN theme customization:
// RN Components have a defaultProp named `styles` which is a RN StyleSheet that returns a key/value
// map of style names -> int; the values can be passed into ReactNativePropRegistry.getByID
// (from "react-native-web/dist/modules/ReactNativePropRegistry") to get a frozen copy of the styles
// but it can't be modified at runtime :(

// Research notes on run-time Web theme customization:
// we can override the build-time css for antd by following this approach:
// https://ant.design/docs/react/customize-theme#Customize-in-less-file
// and re-compiling the less client side

// Based on the above research, I think the best way to achieve run-time customization for antd
// components is to replace the styles of all antd components using styled-components, which has
// built-in support for run-time theme changing.

const ThemeProvider = ({ children, theme }) => {
    return (
        <StyledThemeProvider
            theme={_.extend({}, __LESS_VARIABLES__, theme)}
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
