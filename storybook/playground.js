import AceEditor from "react-ace";
import JSXParser from "react-jsx-parser";
import React, { Component } from "react";
import styled from "styled-components";

import "brace/mode/jsx";

import * as web from "../src/index.web";
import * as mobile from "../src/index.native";

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
        height: 568px;
        margin: auto;
        overflow: hidden;
        width: 320px;
    }
`;

class ErrorBoundary extends Component {
    componentDidCatch (error, info) {
        console.error(error, info.componentStack);
    }

    render () {
        return this.props.children;
    }
}

export default class Playground extends Component {
    state = {
        jsx: ""
    }

    render () {
        return (
            <div>
                <AceEditor
                    mode="jsx"
                    onChange={(jsx) => this.setState({ jsx })}
                    style={{ borderBottom: "1px solid #f0f0f0", height: 200, width: "100%" }}
                    value={this.state.jsx}
                />
                <ErrorBoundary>
                    {this.props.web ?
                        <WebWrapper>
                            <div>
                                <web.DesignContext>
                                    <ErrorBoundary>
                                        <JSXParser
                                            components={web}
                                            jsx={this.state.jsx}
                                        />
                                    </ErrorBoundary>
                                </web.DesignContext>
                            </div>
                        </WebWrapper> : null
                    }
                    {this.props.mobile ?
                        <MobileWrapper>
                            <div>
                                <mobile.DesignContext>
                                    <mobile.WingBlank>
                                        <mobile.WhiteSpace size="lg" />
                                        <ErrorBoundary>
                                            <JSXParser
                                                allowUnknownElements={false}
                                                components={mobile}
                                                componentsOnly
                                                jsx={this.state.jsx}
                                                renderInWrapper={false}
                                            />
                                        </ErrorBoundary>
                                    </mobile.WingBlank>
                                </mobile.DesignContext>
                            </div>
                        </MobileWrapper> : null
                    }
                </ErrorBoundary>
            </div>
        );
    }
}
