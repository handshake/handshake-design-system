import ActivityIndicator from "antd-mobile-rn/es/activity-indicator";
import React, { Component } from "react";
import styled from "styled-components";
import View from "antd-mobile-rn/es/view"; // NOTE: is a straight re-export from react-native

import PROP_TYPES, { DEFAULT_PROPS } from "./prop_types";

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
    static propTypes = PROP_TYPES;
    static defaultProps = DEFAULT_PROPS;

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
