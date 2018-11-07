import _ from "lodash";
import { ActionBar, ActionButton } from "@storybook/components";
import addons from "@storybook/addons";
import knobs from "@storybook/addon-knobs/dist/components/types";
import PropTypes from "prop-types";
import React, { Component } from "react";
import tinycolor from "tinycolor2";
import ButtonGroup from "./button_group";
import KnobLine from "./knob_line";
import styled from "styled-components";
import { ThemeSubscriber } from "../../src/components/design-context/theme-provider";
import THEME, { base } from "../../src/theme";

import { EVENT_SET_THEME_VARIABLES } from "./constants";

const objDiff = (a, b) => _.omitBy(b, (v, k) => a[k] === v);

const CSS_UNIT_RE = /^(\.\d+|\d+\.\d+|\d+)(\w+)$/;

const ColorPicker = styled(knobs.color)`
    color: transparent;
    flex-grow: 0;
`;

class ThemeCustomizer extends Component {
    static propTypes = {
        variables: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.bool,
        ]),
    }

    constructor (props) {
        super(props);
        this.channel = addons.getChannel();
    }

    themeVariablesChanged (themeVariables) {
        const diff = objDiff(THEME, themeVariables);
        this.channel.emit(EVENT_SET_THEME_VARIABLES, diff);
    }
    
    resetThemeVariables () {
        this.channel.emit(EVENT_SET_THEME_VARIABLES, {});
    }
    
    copyThemeVariables (themeVariables) {
        const diff = objDiff(base.camelCase, themeVariables);
        navigator.clipboard.writeText(JSON.stringify(_.extend({
            "$comment": "Restart Storybook after any change to this file; it will not be picked up automatically.",
        }, _.mapKeys(diff, (__, key) => _.kebabCase(key))), null, 4));
        console.log("Copied theme overrides to clipboard!");
    }

    render () {
        const inPanel = !!(this.props.variables && this.props.variables.length);

        if (this.props.variables === false) {
            return null;
        }

        return (
            <ThemeSubscriber>
                {({ variables: themeVariables }) => {
                    const variables = this.props.variables || _.keys(themeVariables);
                    return [
                        <form key="knobs">
                            {_.map(variables, key => {
                                let KnobType = knobs.text;
                                let value = themeVariables[key];
                                let onChange = (val) => {
                                    themeVariables[key] = val;
                                    this.themeVariablesChanged(themeVariables);
                                };
                                let extra = null;

                                if (typeof value === "boolean") {
                                    KnobType = knobs.boolean;
                                } else if (typeof value === "number") {
                                    KnobType = knobs.number;
                                } else if (typeof value === "string") {
                                    if (tinycolor(value)._ok) {
                                        // KnobType = knobs.color;
                                        extra = (
                                            <ColorPicker
                                                knob={{
                                                    name: key,
                                                    value,
                                                }}
                                                onChange={onChange}
                                            />
                                        );
                                        // TODO: try to format value to hex
                                    } else if (CSS_UNIT_RE.test(value)) {
                                        const [__, cssValue, cssUnit] = value.match(CSS_UNIT_RE);
                                        value = _.toNumber(cssValue);
                                        KnobType = knobs.number;
                                        extra = <div>{value}{cssUnit}</div>;
                                        onChange = (val) => {
                                            themeVariables[key] = `${val}${cssUnit}`;
                                            this.themeVariablesChanged(themeVariables);
                                        };
                                    }
                                    // TODO?: arrays of numbers and other composites
                                    // TODO?: font picker
                                    // TODO?: bezier curve editor
                                }

                                return (
                                    <KnobLine key={key} inPanel={inPanel}>
                                        <span><span>{_.words(_.startCase(key)).join(" ")}</span></span>
                                        <div>
                                            <KnobType
                                                knob={{
                                                    name: key,
                                                    value,
                                                }}
                                                onChange={onChange}
                                            />
                                            {extra}
                                        </div>
                                    </KnobLine>
                                );
                            })}
                        </form>,
                        inPanel ?
                            // ActionBar renders best in the addon panel
                            <ActionBar key="buttons">
                                <ActionButton onClick={() => this.copyThemeVariables(themeVariables)}>COPY</ActionButton>
                                <ActionButton onClick={() => this.resetThemeVariables()}>RESET</ActionButton>
                            </ActionBar>
                        :
                            // but it is missing some css when rendered in the main panel
                            <ButtonGroup key="buttons">
                                <li>
                                    <button onClick={() => this.copyThemeVariables(themeVariables)}>Copy</button>
                                </li>
                                <li>
                                    <button onClick={() => this.resetThemeVariables()}>Reset</button>
                                </li>
                            </ButtonGroup>
                    ];
                }}
            </ThemeSubscriber>
        );
    }
}

export default ThemeCustomizer;