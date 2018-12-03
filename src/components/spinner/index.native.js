import ActivityIndicator from "antd-mobile-rn/es/activity-indicator";
import React, { Component } from "react";
import styled from "styled-components";
import { ThemeSubscriber } from "../design-context/theme-provider";
import View from "antd-mobile-rn/es/view"; // NOTE: is a straight re-export from react-native

import propTypes, { defaultProps } from "./prop_types";

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = [
    "borderColorSplit",
    "borderRadiusSm",
    "colorTextBase",
    "colorTextBaseInverse",
    "componentBackground",
    "fontSizeBase",
    "hSpacingMd",
    "radiusMd",
    "toastFill",
    "toastZindex",
    "vSpacingSm",
];

function styles (theme) {
    return {
        container: {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "transparent",
            zIndex: theme.toastZindex,
        },
        innerContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
        },
        wrapper: {
            alignItems: "center",
            justifyContent: "center",
            width: 89,
            height: 89,
            borderRadius: theme.radiusMd,
            backgroundColor: theme.toastFill,
        },
        tip: {
            color: theme.colorTextBase,
            fontSize: theme.fontSizeBase,
            marginLeft: theme.hSpacingMd,
        },
        toast: {
            color: theme.colorTextBaseInverse,
            fontSize: theme.fontSizeBase,
            marginTop: theme.vSpacingSm,
        },
        spinner: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
        },
    };
}

const SpinnerBox = styled(View)`
    align-items: center;
    background-color: ${({ theme }) => theme.componentBackground};
    border-color: ${({ theme }) => theme.borderColorSplit};
    border-radius: ${({ theme }) => theme.borderRadiusSm};
    border-width: 1px;
    flex: 1;
    justify-content: center;
    min-height: 200px;
`;

const SpinnerFrame = styled(View)`
    flex: 1;
`;

export default class Spinner extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        const {
            enabled = true,
            block,
            size,
            style,
            text,
            toast,
        } = this.props;

        if (!enabled) {
            return null;
        }

        if (block && !toast) {
            return (
                <SpinnerFrame>
                    <SpinnerBox>
                        <ThemeSubscriber>
                            {({ theme }) => (
                                <ActivityIndicator
                                    size={size || "large"}
                                    style={style}
                                    styles={styles(theme)}
                                    text={text}
                                />
                            )}
                        </ThemeSubscriber>
                    </SpinnerBox>
                </SpinnerFrame>
            );
        }

        return (
            <ThemeSubscriber>
                {({ theme }) => (
                    <ActivityIndicator
                        size={size || "small"}
                        style={style}
                        styles={styles(theme)}
                        text={text}
                        toast={toast}
                    />
                )}
            </ThemeSubscriber>
        );
    }
}
