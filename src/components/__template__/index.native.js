import _ from "lodash";
import __TEMPLATE__ from "antd-mobile-rn/es/button";
import React, { Component } from "react";
import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import { ThemeSubscriber } from "../design-context/theme-provider";

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = [
    
];

// original: antd-mobile-rn/es/__TEMPLATE__/style/index.native.js
// maintenance task: check ^^ for changes anytime we update antd-mobile-rn
function styles (theme) {
    return {

    };
}

class __TEMPLATE__Wrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        return (
            <ThemeSubscriber>
                {theme => (
                    <__TEMPLATE__
                        styles={styles(theme)}
                        {...mapPropsForMobile(this.props)}
                    />
                )}
            </ThemeSubscriber>
        );
    }
}

export default __TEMPLATE__Wrapper;
