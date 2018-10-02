import ActivityIndicator from "antd-mobile-rn/es/activity-indicator";
import React, { Component } from "react";
import styled from "styled-components";
import View from "antd-mobile-rn/es/view"; // NOTE: is a straight re-export from react-native

import propTypes, { defaultProps } from "./prop_types";

// List of all theme variables this component uses.
// Eventually, I'd like to automate generating this data.
// This is currently only used by the Storybook Theme Customizer Addon Panel,
// but there are other potential use cases, so, I'm putting this here instead of
// hard coding it in the the stories file.
const THEME_VARIABLES = [
    "componentBackground",
    "borderColorSplit",
    "borderRadiusSm",
    // TODO: incomplete
];

// TODO: style ActivityIndicator

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
        const { enabled = true, block, size, text, toast } = this.props;
        
        if (!enabled) {
            return null;
        }

        if (block && !toast) {
            return (
                <SpinnerFrame>
                    <SpinnerBox>
                        <ActivityIndicator
                            size={size || "large"}
                            text={text}
                        />
                    </SpinnerBox>
                </SpinnerFrame>
            );
        }

        return (
            <ActivityIndicator
                size={size || "small"}
                text={text}
                toast={toast}
            />
        );
    }
}
