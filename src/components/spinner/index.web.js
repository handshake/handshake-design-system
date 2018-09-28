import Card from "antd/es/card";
import Spin from "antd/es/spin";
import React, { Component } from "react";
import styled from "styled-components";

import "antd/es/card/style";
import "antd/es/spin/style";

import propTypes, { defaultProps } from "./prop_types";

const SpinnerCard = styled(Card)`
    align-items: center;
    display: flex;
    flex: 1;
    height: 200px;
    justify-content: center;
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

    render () {
        const { enabled = true, block, size, text, toast } = this.props;

        if (!enabled) {
            return null;
        }

        if (toast) {
            return (
                <Toaster>
                    <Toast>
                        <Spin
                            size={size || "large"}
                            tip={text}
                        />
                    </Toast>
                </Toaster>
            )
        }

        if (block) {
            return (
                <SpinnerCard>
                    <Spin
                        size={size || "large"}
                        tip={text}
                    />
                </SpinnerCard>
            );
        }

        return (
            <Spin
                size={size || "small"}
                tip={text}
            />
        );
    }
}
