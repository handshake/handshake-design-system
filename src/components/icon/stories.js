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

import { Icon } from "../..";
import { Icon as NativeIcon } from "../../index.native";
import registry from "./registry";

// import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

import "./sets/ant";
import "./sets/fa";
import "./sets/fi";
import "./sets/go";
import "./sets/io";
import "./sets/md";
import "./sets/ti";

const ALL_ICONS = registry.keys();

storiesOf("Web/Icon", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    // .addDecorator(withThemeVariables(Icon.THEME_VARIABLES))
    .add(
        "options",
        () => (
            <Icon
                color={color("Color", "#ff0000")}
                size={select("Size", ["default", "large", "small"], "default")}
                spin={boolean("Spin", false)}
                type={select("Type", ["filled", "outlined", "twoTone"], "outlined")}
                icon={select("Icon", ALL_ICONS, "logo")}
            />
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Icon } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );

storiesOf("Mobile/Icon", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    // .addDecorator(withThemeVariables(NativeIcon.THEME_VARIABLES))
    .add(
        "options",
        () => (
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                <NativeIcon
                    color={color("Color", "#ff0000")}
                    size={select("Size", ["default", "large", "small"])}
                    spin={boolean("Spin", false)}
                    type={select("Type", ["filled", "outlined", "twoTone"], "outlined")}
                    icon={select("Icon", ALL_ICONS, "logo")}
                />
            </WingBlank>
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Icon } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );
