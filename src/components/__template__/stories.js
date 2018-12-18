import { action } from "@storybook/addon-actions";
import {
    array,
    boolean,
    button,
    color,
    date,
    knob,
    number,
    object,
    select,
    text,
    withKnobs,
} from "@storybook/addon-knobs";
import React from "react";
import { storiesOf } from "@storybook/react";
import { WhiteSpace, WingBlank } from "antd-mobile-rn";
import { withInfo } from "@storybook/addon-info";
import withStyles from "@sambego/storybook-styles";
import { withViewport } from "@storybook/addon-viewport";

// eslint-disable-next-line camelcase
import { __TEMPLATE__ as Native__TEMPLATE__ } from "../../index.native";
import themes from "./themes.json";
// eslint-disable-next-line camelcase
import { __TEMPLATE__ as Web__TEMPLATE__ } from "../../index.web";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

const commonKnobs = extraKnobs => ({
    // TODO
    ...extraKnobs,
});

const render = (__TEMPLATE__, props) => (
    // eslint-disable-next-line react/jsx-pascal-case
    <__TEMPLATE__ {...props} />
);

storiesOf("__TEMPLATE__", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(themes))
    .add(
        "options",
        () => (
            render(Web__TEMPLATE__, commonKnobs())
        ),
        {
            info: {
                header: false,
                propTables: [Web__TEMPLATE__],
                text: `
                    ### Usage
                    ~~~js
                    import { __TEMPLATE__ } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );

storiesOf("__TEMPLATE__/Native", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(Native__TEMPLATE__.THEME_VARIABLES))
    .add(
        "options",
        () => (
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                {render(Native__TEMPLATE__, commonKnobs())}
            </WingBlank>
        ),
        {
            info: {
                header: false,
                propTables: [Native__TEMPLATE__],
                text: `
                    ### Usage
                    ~~~js
                    import { __TEMPLATE__ } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );
