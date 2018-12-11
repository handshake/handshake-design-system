import _ from "lodash";
import propTypes, { defaultProps, mapProps } from "./prop_types";
import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components";

import "./sets/hs";

const THEME_VARIABLES = false;

const spinning = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const IconWrapper = styled.i`
    display: inline-block;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: none;
    vertical-align: -0.125em;

    > * {
        display: inline-block;

        ${({ spin }) => (spin ? css`
            animation: ${spinning} 1s infinite linear;
        ` : "")}
    }
`;

class Icon extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        const {
            className,
            colors,
            icon: ActualIcon,
            size,
            spin,
            style,
        } = mapProps(this.props);
        return (
            <IconWrapper
                className={className}
                size={size}
                spin={spin}
                style={{ ...style }}
            >
                <ActualIcon
                    size={size}
                    {...colors}
                />
            </IconWrapper>
        );
    }
}

export default Icon;
