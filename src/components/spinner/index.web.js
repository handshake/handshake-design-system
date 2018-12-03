
import AntdSpin from "antd/es/spin";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import t from "../../util/theme_variable_helper";

import propTypes, { defaultProps } from "./prop_types";

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = [
    "easeInOutCirc",
    "fontFamily",
    "fontSizeBase",
    "lineHeightBase",
    "primaryColor",
    "spinDotSize",
    "spinDotSizeLg",
    "spinDotSizeSm",
];

const VARIABLE_LOOKUP = {
    dotSize: {
        default: "spinDotSize",
        large: "spinDotSizeLg",
        small: "spinDotSizeSm",
    },
    dotSizeI: {
        default: () => "9px",
        large: () => "14px",
        small: () => "6px",
    },
};

const antSpinMove = keyframes`
    to {
        opacity: 1;
    }
`;

const antRotate = keyframes`
    to {
        transform: rotate(405deg);
    }
`;

// Unimplemented CSS:
// nested content (nested-loading, container, blur)

const Spin = styled(AntdSpin)`
    box-sizing: border-box;
    color: ${({ theme }) => theme.primaryColor};
    display: inline-block;
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSizeBase};
    font-variant: tabular-nums;
    line-height: ${({ theme }) => theme.lineHeightBase};
    list-style: none;
    margin: 0;
    opacity: 1;
    padding: 0;
    position: static;
    text-align: center;
    transition: transform 0.3s ${({ theme }) => theme.easeInOutCirc};
    vertical-align: middle;

    .ant-spin-dot {
        display: inline-block;
        font-size: ${({ size, theme }) => t(VARIABLE_LOOKUP.dotSize[size || "default"], theme)};
        height: ${({ size, theme }) => t(VARIABLE_LOOKUP.dotSize[size || "default"], theme)};
        position: relative;
        width: ${({ size, theme }) => t(VARIABLE_LOOKUP.dotSize[size || "default"], theme)};

        &-spin {
            animation: ${antRotate} 1.2s infinite linear;
            transform: rotate(45deg);
        }

        i {
            animation: ${antSpinMove} 1s infinite linear alternate;
            background-color: ${({ theme }) => theme.primaryColor};
            border-radius: 100%;
            display: block;
            height: ${({ size, theme }) => t(VARIABLE_LOOKUP.dotSizeI[size || "default"], theme)};
            opacity: 0.3;
            position: absolute;
            transform: scale(0.75);
            transform-origin: 50% 50%;
            width: ${({ size, theme }) => t(VARIABLE_LOOKUP.dotSizeI[size || "default"], theme)};

            &:nth-child(1) {
                left: 0;
                top: 0;
            }

            &:nth-child(2) {
                animation-delay: 0.4s;
                right: 0;
                top: 0;
            }

            &:nth-child(3) {
                animation-delay: 0.8s;
                bottom: 0;
                right: 0;
            }

            &:nth-child(4) {
                animation-delay: 1.2s;
                bottom: 0;
                left: 0;
            }
        }
    }

    .ant-spin-text {
        display: block;
    }
`;

// TODO: replace with `div` so we're not using default antd Card styles here
const SpinnerCard = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.componentBackground};
    border-color: ${({ theme }) => theme.borderColorSplit};
    border-radius: ${({ theme }) => theme.borderRadiusSm};
    border-style: solid;
    border-width: 1px;
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 200px;
`;

const Toaster = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

const Toast = styled.div`
    align-items: center;
    background-color: rgba(58, 58, 58, 0.9);
    border-radius: 7px;
    display: inline-flex;
    justify-content: center;
    padding: 15px;
    text-align: center;
`;

export default class Spinner extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        const {
            className,
            block,
            enabled = true,
            size,
            style,
            text,
            toast,
        } = this.props;

        if (!enabled) {
            return null;
        }

        if (toast) {
            return (
                <Toaster>
                    <Toast>
                        <Spin
                            className={className}
                            size={size || "large"}
                            style={style}
                            tip={text}
                        />
                    </Toast>
                </Toaster>
            );
        }

        if (block) {
            return (
                <SpinnerCard>
                    <Spin
                        className={className}
                        size={size || "large"}
                        style={style}
                        tip={text}
                    />
                </SpinnerCard>
            );
        }

        return (
            <Spin
                className={className}
                size={size || "small"}
                style={style}
                tip={text}
            />
        );
    }
}
