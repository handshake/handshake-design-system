import { action } from "@storybook/addon-actions";
import iconManifest from "@ant-design/icons/lib/manifest";
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
            const theme = select("Theme", ["filled", "outlined", "twoTone"], "outlined");
            let types;
            switch (theme) {
            case "filled":
                types = iconManifest.fill;
                break;
            case "twoTone":
                types = iconManifest.twotone;
                break;
            default:
            case "outlined":
                types = iconManifest.outline;
            }
            return (
                <Icon
                    color={color("Color", "#ff0000")}
                    size={select("Size", ["default", "large", "small"], "default")}
                    theme={theme}
                    type={select("Type", types, types[0])}
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
            const theme = select("Theme", ["filled", "outlined", "twoTone"], "outlined");
            let types;
            switch (theme) {
            case "filled":
                types = iconManifest.fill;
                break;
            case "twoTone":
                types = iconManifest.twotone;
                break;
            default:
            case "outlined":
                types = iconManifest.outline;
            }
            return (
                <WingBlank  size="lg">
                    <WhiteSpace size="lg" />
                    <NativeIcon
                        color={color("Color", "#ff0000")}
                        size={select("Size", ["default", "large", "small"])}
                        theme={theme}
                        type={select("Type", types, types[0])}
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