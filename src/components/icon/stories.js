import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array, boolean, button, color, date, knob, number, object, text, select } from "@storybook/addon-knobs";
import withStyles from "@sambego/storybook-styles"
import { withViewport } from "@storybook/addon-viewport";

import { Icon } from "../..";
import { Icon as NativeIcon, WingBlank, WhiteSpace } from "../../index.native";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

storiesOf("Icon", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(Icon.THEME_VARIABLES))
    .add(
        "options",
        () => {
            return (
                <Icon
                    color={color("Color", "#ff0000")}
                    size={select("Size", ["default", "large", "small"], "default")}
                    spin={boolean("Spin", false)}
                    theme={select("Theme", ["filled", "outlined", "twoTone"], "outlined")}
                    type={select("Type", Icon.ALL_TYPES, Icon.ALL_TYPES[0])}
                />
            );
        },
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Icon } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    );

storiesOf("Icon/Native", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(NativeIcon.THEME_VARIABLES))
    .add(
        "options",
        () => {
            return (
                <WingBlank  size="lg">
                    <WhiteSpace size="lg" />
                    <NativeIcon
                        color={color("Color", "#ff0000")}
                        size={select("Size", ["default", "large", "small"])}
                        spin={boolean("Spin", false)}
                        theme={select("Theme", ["filled", "outlined", "twoTone"], "outlined")}
                        type={select("Type", NativeIcon.ALL_TYPES, NativeIcon.ALL_TYPES[0])}
                    />
                </WingBlank>
            );
        },
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Icon } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    );