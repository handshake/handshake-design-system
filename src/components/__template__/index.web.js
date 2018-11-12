import Antd__TEMPLATE__ from "antd/es/__TEMPLATE__";
import styled, { keyframes } from "styled-components";
import propTypes, { defaultProps, mapPropsForWeb } from "./prop_types";
import React, { Component } from "react";
import antdColorPalette from "../../util/antd_color_palette";
import t from "../../util/theme_variable_helper";

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = [

];

const VARIABLE_LOOKUP = {

};

const __TEMPLATE__ = styled(Antd__TEMPLATE__)`

`;

class __TEMPLATE__Wrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        return <__TEMPLATE__ {...mapPropsForWeb(this.props)} />;
    }
}

export default __TEMPLATE__Wrapper;
