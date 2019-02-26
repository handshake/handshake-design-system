/* global navigator */
import _ from "lodash";
import { ActionBar, ActionButton } from "@storybook/components";
import addons from "@storybook/addons";
import ButtonGroup from "./button_group";
import KnobLine from "./knob_line";
import knobs from "@storybook/addon-knobs/dist/components/types";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import THEME, { base, variableTypes } from "../../src/theme";
import { ThemeSubscriber } from "../../src/components/design-context/theme-provider";
import tinycolor from "tinycolor2";
import { unflatten } from "flat";

import { EVENT_SET_THEME_VARIABLES } from "./constants";

const objDiff = (a, b) => _.omitBy(b, (v, k) => a[k] === v);

const CSS_UNIT_RE = /^(\.\d+|\d+\.\d+|\d+)(\w+)$/;

const ColorPicker = styled(knobs.color)`
    color: transparent;
    flex-grow: 0;
`;

function inferType (value) {
    if (typeof value === "boolean") {
        return "boolean";
    }
    if (typeof value === "number") {
        return "number";
    }
    if (typeof value === "string") {
        if (tinycolor(value)._ok) {
            return "color";
        }
        if (CSS_UNIT_RE.test(value)) {
            return "unit";
        }
    }
    return "string";
}

class VariableEditor extends Component {
    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.any,
        onChange: PropTypes.func,
    }

    state = {
        type: "string",
    }

    static getDerivedStateFromProps (nextProps, prevState) {
        return {
            type: variableTypes[nextProps.name] || inferType(nextProps.value) || prevState.type,
        };
    }

    render () {
        const { name, value, onChange } = this.props;
        const { type } = this.state;

        switch (type) {
        case "boolean": {
            const Knob = knobs.boolean;
            return (
                <Knob
                    knob={{ name, value }}
                    onChange={onChange}
                />
            );
        }
        case "number": {
            const Knob = knobs.number;
            return (
                <Knob
                    knob={{ name, value }}
                    onChange={onChange}
                />
            );
        }
        case "unit": {
            const Knob = knobs.number;
            const [cssValue, cssUnit] = value.match(CSS_UNIT_RE).slice(1);
            return [
                <Knob
                    key={`${name}-number`}
                    knob={{ name, value: _.toNumber(cssValue) }}
                    onChange={val => onChange(`${val}${cssUnit}`)}
                />,
                <div key={`${name}-unit`}>
                    <span style={{ color: "transparent" }}>{value}</span>
                    {cssUnit}
                </div>,
            ];
        }
        case "color": {
            const Knob = knobs.text;
            return [
                <Knob
                    key={`${name}-text`}
                    knob={{ name, value }}
                    onChange={onChange}
                />,
                <ColorPicker
                    key={`${name}-color`}
                    knob={{ name, value }}
                    onChange={onChange}
                />,
            ];
        }
        // TODO?: arrays of numbers and other composites
        // TODO?: font picker
        // TODO?: bezier curve editor
        case "string":
        default: {
            const Knob = knobs.text;
            return (
                <Knob
                    knob={{ name, value }}
                    onChange={onChange}
                />
            );
        }
        }
    }
}

// eslint-disable-next-line react/no-multi-comp
class ThemeCustomizer extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        // themeName: PropTypes.string, // not used yet
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
        navigator.clipboard.writeText(JSON.stringify(unflatten(_.extend({
            $comment: "Restart Storybook after any change to this file; it will not be picked up automatically.",
        }, _.mapKeys(diff, (__, key) => _.kebabCase(key))), { delimiter: "-" }), null, 4));
        console.log("Copied theme overrides to clipboard!");
    }

    render () {
        const { prefix, variables: propVariables } = this.props;
        const inPanel = !!(propVariables && propVariables.length);

        if (propVariables === false) {
            return null;
        }

        return (
            <ThemeSubscriber>
                {({ variables: themeVariables }) => {
                    const variables = (propVariables || _.keys(themeVariables))
                        .filter(k => k.startsWith(prefix))
                        .map(_.camelCase);
                    return [
                        <form key="knobs">
                            {_.map(variables, (key) => {
                                const value = themeVariables[key];
                                const onChange = (val) => {
                                    // eslint-disable-next-line no-param-reassign
                                    themeVariables[key] = val;
                                    this.themeVariablesChanged(themeVariables);
                                };

                                return (
                                    <KnobLine key={key} inPanel={inPanel}>
                                        <span>
                                            <span>
                                                {
                                                    _.words(_.startCase(
                                                        key.replace(new RegExp(`^${prefix}-?`), ""),
                                                    )).join(" ")
                                                }
                                            </span>
                                        </span>
                                        <VariableEditor
                                            name={key}
                                            value={value}
                                            onChange={onChange}
                                        />
                                    </KnobLine>
                                );
                            })}
                        </form>,
                        inPanel
                            ? ( // ActionBar renders best in the addon panel
                                <ActionBar key="buttons">
                                    <ActionButton
                                        onClick={() => this.copyThemeVariables(themeVariables)}
                                        // eslint-disable-next-line react-intl/string-is-marked-for-translation
                                    >
                                        COPY
                                    </ActionButton>
                                    <ActionButton
                                        onClick={() => this.resetThemeVariables()}
                                        // eslint-disable-next-line react-intl/string-is-marked-for-translation
                                    >
                                        RESET
                                    </ActionButton>
                                </ActionBar>)
                            : ( // but it is missing some css when rendered in the main panel
                                <ButtonGroup key="buttons">
                                    <li>
                                        <button
                                            onClick={() => this.copyThemeVariables(themeVariables)}
                                            type="button"
                                            // eslint-disable-next-line react-intl/string-is-marked-for-translation
                                        >
                                            Copy
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => this.resetThemeVariables()}
                                            type="button"
                                            // eslint-disable-next-line react-intl/string-is-marked-for-translation
                                        >
                                            Reset
                                        </button>
                                    </li>
                                </ButtonGroup>),
                    ];
                }}
            </ThemeSubscriber>
        );
    }
}

export default ThemeCustomizer;
