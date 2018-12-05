import _ from "lodash";
import AntdIcon from "antd/es/icon";
import getIcon from "./get_icon";
import propTypes, { ALL_TYPES, defaultProps, mapPropsForWeb } from "./prop_types";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const THEME_VARIABLES = false;

const loadingCircle = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

const Icon = styled(AntdIcon)`
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
        line-height: 1;
    }

    svg {
        display: inline-block;
    }

    .anticon-icon {
        display: block;
    }
    .anticon-spin:before {
        animation: ${loadingCircle} 1s infinite linear;
        display: inline-block;
    }
    .anticon-spin {
        animation: ${loadingCircle} 1s infinite linear;
        display: inline-block;
    }
`;

class IconWrapper extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    static THEME_VARIABLES = THEME_VARIABLES;

    static ALL_TYPES = ALL_TYPES;

    render () {
        const icon = getIcon(this.props);
        return (
            <Icon
                component={typeof icon === "string"
                    ? () => (
                        <div
                            style={{ display: "inline-block", width: "1em" }}
                            // eslint-disable-next-line react/no-danger
                            dangerouslySetInnerHTML={{ __html: icon }}
                        />)
                    : icon
                }
                {...mapPropsForWeb(this.props)}
            />
        );
    }
}

export default IconWrapper;
