import _ from "lodash";
// import AntdIcon from "antd/es/icon";
import propTypes, { ALL_TYPES, defaultProps, mapProps } from "./prop_types";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const THEME_VARIABLES = false;

const loadingCircle = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

// const Icon = styled(AntdIcon)`
//     display: inline-block;
//     font-style: normal;
//     line-height: 0;
//     text-align: center;
//     text-rendering: optimizeLegibility;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-transform: none;
//     vertical-align: -0.125em;

//     > * {
//         line-height: 1;
//     }

//     svg {
//         display: inline-block;
//     }

//     .anticon-icon {
//         display: block;
//     }
//     .anticon-spin:before {
//         animation: ${loadingCircle} 1s infinite linear;
//         display: inline-block;
//     }
//     .anticon-spin {
//         animation: ${loadingCircle} 1s infinite linear;
//         display: inline-block;
//     }
// `;

class IconWrapper extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    static THEME_VARIABLES = THEME_VARIABLES;

    static ALL_TYPES = ALL_TYPES;

    render () {
        const {
            className,
            icon: Icon,
            iconSet,
            fillColor,
            size,
            strokeColor,
            style,
        } = mapProps(this.props);
        if (["ant", "antd"].includes(iconSet)) {
            return (
                <i
                    className={className}
                    style={{ color: fillColor, width: size, ...style }}
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: Icon({
                            fill: fillColor,
                            size,
                            stroke: strokeColor,
                        }),
                    }}
                />
            );
        }
        return (
            <i
                className={className}
                style={{ width: size, ...style }}
            >
                <Icon
                    fill={fillColor}
                    size={size}
                    stroke={strokeColor}
                />
            </i>
        );
    }
}

export default IconWrapper;
