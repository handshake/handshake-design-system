import AntdIcon from "antd/es/icon";
import styled, { keyframes } from "styled-components";
import propTypes, { defaultProps, mapPropsForWeb } from "./prop_types";
import React, { Component } from "react";

const THEME_VARIABLES = false;

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