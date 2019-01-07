import _ from "lodash";
import { fnHelp, withTheme } from "../src/components/design-context/theme-provider/with_theme";
import PropTypes from "prop-types";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import ThemeContext from "../src/components/design-context/theme-provider/context";
import TinyColor from "tinycolor2";

const MAX_HISTORY = 10;

const ColorFnUI = styled.div`
    align-items: center;
    display: flex;
    min-height: 100vh;
    justify-content: center;

    & > div {
        height: 450px;
        margin: 100px 0 40px;
        width: 450px;
    }

    .row {
        position: relative;

        .expression,
        input[type=text] {
            display: block;
            font-size: 14px;
            height: 40px;
            padding: 0 15px;
            width: 100%;
        }

        .expression {
            line-height: 40px;
        }

        input[type=text] {
            appearance: none;
            background-color: rgba(255, 255, 255, 0.7);
            border: solid 1px rgba(51, 51, 51, 0.2);
            border-radius: 0;
            box-shadow: none;
            outline-color: #ff5800;
        }

        .swatch {
            display: inline-block;
            height: 20px;
            position: absolute;
            right: 10px;
            top: 10px;
            width: 20px;
        }

        .help {
            background-color: #e8e8e8;
            font-size: 14px;
            padding: 0 15px;
        }

        .autocomplete {
            border-left: solid 1px rgba(51, 51, 51, 0.2);
            border-right: solid 1px rgba(51, 51, 51, 0.2);
            box-shadow:
                0px 1px 2px rgba(51, 51, 51, 0.1),
                -2px 1px 3px rgba(51, 51, 51, 0.1),
                2px 1px 3px rgba(51, 51, 51, 0.1);
            list-style: none;
            margin: 0;
            padding: 0;
            position: absolute;
            width: 450px;
            z-index: 1;

            li {
                border-bottom: solid 1px #d6d6d6; /* original: rgba(51, 51, 51, 0.2); */

                button {
                    appearance: none;
                    background-color: #fff;
                    border: none;
                    cursor: pointer;
                    font-size: 14px;
                    height: 20px;
                    line-height: 20px;
                    padding: 0 15px;
                    text-align: left;
                    width: 100%;

                    &:hover {
                        background-color: #fafafa;
                    }
                }
            }
        }

        .error {
            background-color: #f5222d;
            color: #fff;
            font-size: 14px;
            line-height: 40px;
            padding: 0 15px;

            &.hidden {
                display: none;
            }
        }

        & + .row {
            border-bottom: solid 1px rgba(51, 51, 51, 0.2);
        }
    }
`;

export default class ColorFunctions extends Component {
    static contextType = ThemeContext;

    state = {
        autocomplete: [],
        expr: "",
        history: [],
    }

    onChange (expr) {
        let result;
        let helpText = "";
        let autocomplete = [];
        if (expr) {
            const val = this.lookup(expr);
            const fnName = expr.match(/^(\w*)\b/)[1];
            const [, a, b] = expr.match(/^\w+\(([\w.]*)|([\w.]*)/);
            const varName = a || b;
            const autocompleteFns = _.keys(fnHelp)
                .filter(fn => fn.startsWith(fnName) && fn !== fnName);
            const { variables } = this.context;
            const autocompleteVars = _.keys(variables)
                .filter(v => v.startsWith("hs")
                    && v.startsWith(varName)
                    && v !== varName,
                );

            if (fnHelp[fnName]) {
                helpText = fnHelp[fnName].desc;
                autocomplete = autocompleteVars.map(v => ({
                    text: `${fnName}(${[v, fnHelp[fnName].args.slice(1)].join(", ")})`,
                    caret: [
                        fnName.length + v.length + 3,
                        fnName.length + v.length + 3 + fnHelp[fnName].args[1].length,
                    ],
                }));
            } else {
                autocomplete = [
                    ...autocompleteFns.map(fn => ({
                        text: `${fn}(${fnHelp[fn].args.join(", ")})`,
                        caret: [
                            fn.length + 1,
                            fn.length + 1 + fnHelp[fn].args[0].length,
                        ],
                    })),
                    ...autocompleteVars.map(v => ({
                        text: v,
                        caret: [v.length, v.length],
                    })),
                ];
            }

            if (TinyColor(val)._ok) {
                result = val;
            }
        }
        this.setState({
            autocomplete,
            errorText: null,
            expr,
            helpText,
            value: result,
        });
    }

    onAutocomplete (completion) {
        this.onChange(completion.text);
        setTimeout(() => {
            // eslint-disable-next-line react/no-find-dom-node
            const inputEl = ReactDOM.findDOMNode(this).querySelector("input");
            inputEl.focus();
            inputEl.setSelectionRange(...completion.caret);
        });
    }

    onSubmit () {
        const { expr } = this.state;
        const val = this.lookup(expr);
        let errorText = "";
        if (TinyColor(val)._ok) {
            const { history } = this.state;
            history.unshift({ expr, val });
            if (history.length > MAX_HISTORY) {
                history.pop();
            }
        } else {
            errorText = `${expr} is invalid`;
        }
        this.setState({
            autocomplete: [],
            errorText,
            expr: "",
            helpText: "",
            value: "",
        });
    }

    render () {
        const {
            autocomplete,
            expr,
            errorText,
            helpText,
            history,
            value,
        } = this.state;

        if (!this.lookup) {
            const { theme: themeName, variables } = this.context;
            withTheme(
                ({ lookup }) => { this.lookup = lookup; },
                {
                    themes: {},
                    themeName,
                    variables,
                },
            );
        }

        return (
            <ColorFnUI>
                <div>
                    <div className="row">
                        <input
                            // eslint-disable-next-line jsx-a11y/no-autofocus
                            autoFocus
                            onChange={ev => this.onChange(ev.target.value)}
                            onKeyPress={ev => ev.key === "Enter" && this.onSubmit()}
                            type="text"
                            value={expr}
                        />
                        <span
                            className="swatch"
                            style={{ backgroundColor: value || "rgba(0,0,0,0)" }}
                        />
                        {helpText && <div className="help">{helpText}</div>}
                        {!!autocomplete.length && (
                            <ul className="autocomplete">
                                {autocomplete.map(ac => (
                                    <li key={ac.text}>
                                        <button
                                            type="button"
                                            onClick={() => this.onAutocomplete(ac)}
                                        >
                                            {ac.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {errorText && <div className="error">{errorText}</div>}
                    </div>
                    {history.map(({ expr: expr2, val }, i) => (
                        <div
                            className="row"
                            // eslint-disable-next-line react/no-array-index-key
                            key={`history-${i}`}
                        >
                            <span className="expression">{`${expr2} = ${val}`}</span>
                            <span className="swatch" style={{ backgroundColor: val }} />
                        </div>
                    ))}
                </div>
            </ColorFnUI>
        );
    }
}
