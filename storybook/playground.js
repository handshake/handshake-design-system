import AceEditor from "react-ace";
import JSXParser from "react-jsx-parser";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { WhiteSpace, WingBlank } from "@ant-design/react-native/lib";

import "brace/mode/jsx";
import "brace/theme/github";

import * as mobileComponents from "../src/index.native";
import * as webComponents from "../src/index.web";

// style (mostly) borrowed from storybook viewport addon
const WebWrapper = styled.div`
    box-sizing: border-box;
    width: 100%;

    & > div {
        background: #f5f5f9;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 60px 12px;
        margin-bottom: 10px;
        min-height: 200px;
        padding: 20px;
    }
`;

const MobileWrapper = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 650px;
    justify-items: center;
    overflow: auto;
    position: relative;
    width: 100%;

    & > div {
        background: #f5f5f9;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 60px 12px;
        cursor: pointer;
        height: 568px;
        margin: auto;
        overflow: auto;
        width: 320px;
    }
`;

class ErrorBoundary extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    componentDidCatch (error, info) {
        console.error(error, info.componentStack);
    }

    render () {
        const { children } = this.props;
        return children;
    }
}

// eslint-disable-next-line react/no-multi-comp
export default class Playground extends Component {
    static propTypes = {
        mobile: PropTypes.bool,
        web: PropTypes.bool,
    };

    state = {
        jsx: "",
    }

    render () {
        const { mobile, web } = this.props;
        const { jsx } = this.state;
        return (
            <div>
                <AceEditor
                    mode="jsx"
                    onChange={newJsx => this.setState({ jsx: newJsx })}
                    style={{ borderBottom: "1px solid #f0f0f0", height: 200, width: "100%" }}
                    theme="github"
                    value={jsx}
                />
                <ErrorBoundary>
                    {web
                        ? (
                            <WebWrapper>
                                <div>
                                    <ErrorBoundary>
                                        <JSXParser
                                            components={webComponents}
                                            jsx={jsx}
                                        />
                                    </ErrorBoundary>
                                </div>
                            </WebWrapper>)
                        : null
                    }
                    {mobile
                        ? (
                            <MobileWrapper>
                                <div>
                                    <WingBlank>
                                        <WhiteSpace size="lg" />
                                        <ErrorBoundary>
                                            <JSXParser
                                                allowUnknownElements={false}
                                                components={mobileComponents}
                                                componentsOnly
                                                jsx={jsx}
                                                renderInWrapper={false}
                                            />
                                        </ErrorBoundary>
                                    </WingBlank>
                                </div>
                            </MobileWrapper>)
                        : null
                    }
                </ErrorBoundary>
            </div>
        );
    }
}
