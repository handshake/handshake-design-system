import AntdIcon from "antd/es/icon";
import styled, { keyframes } from "styled-components";
import propTypes, { defaultProps, mapPropsForWeb } from "./prop_types";
import React, { Component } from "react";

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = [
    "placeholder",
];

const Icon = styled(AntdIcon)`

`;

class IconWrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        return <Icon {...mapPropsForWeb(this.props)} />;
    }
}

export default IconWrapper;