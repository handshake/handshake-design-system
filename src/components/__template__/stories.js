import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { WhiteSpace, WingBlank } from "antd-mobile-rn";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array, boolean, button, color, date, knob, number, object, text, select } from "@storybook/addon-knobs";
import withStyles from "@sambego/storybook-styles"
import { withViewport } from "@storybook/addon-viewport";

import { __TEMPLATE__ } from "../..";
import { __TEMPLATE__ as Native__TEMPLATE__ } from "../../index.native";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

storiesOf("__TEMPLATE__", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(__TEMPLATE__.THEME_VARIABLES))
    .add(
        "options",
        () => (
            <__TEMPLATE__ />
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { __TEMPLATE__ } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    );

storiesOf("__TEMPLATE__/Native", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(Native__TEMPLATE__.THEME_VARIABLES))
    .add(
        "options",
        () => (
            <WingBlank  size="lg">
                <WhiteSpace size="lg" />
                <Native__TEMPLATE__ />
            </WingBlank>
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { __TEMPLATE__ } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    );