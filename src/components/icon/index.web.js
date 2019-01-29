import _ from "lodash";
import propTypes, { defaultProps, mapProps } from "./prop_types";
import React, { Component } from "react";
import styled, { css, keyframes } from "../../util/styled.web";

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
    vertical-align: 50%;

    ${({ flip, rotate }) => (flip || rotate) && css`
        transform: ${() => (
            (flip === "horizontal" && "scaleX(-1)")
            || (flip === "vertical" && "scaleY(-1)")
            || ""
        )} ${() => (
            // eslint-disable-next-line prefer-template
            rotate && "rotate(" + rotate + "deg)")
            || ""};
    `}

    > * {
        display: inline-block;

        ${({ spin }) => (spin ? css`
            animation: ${spinning} 1s infinite linear;
        ` : "")}
    }
`;

class Icon extends Component {
    static propTypes = propTypes;

    static defaultProps = {
        color: "currentColor",
        ...defaultProps,
    };

    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        const {
            className,
            colors,
            flip,
            icon: ActualIcon,
            rotate,
            size,
            spin,
            style,
        } = mapProps(this.props);
        return (
            <IconWrapper
                className={className}
                flip={flip}
                rotate={rotate}
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
