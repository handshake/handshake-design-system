import { action } from "@storybook/addon-actions";
import iconManifest from "@ant-design/icons/lib/manifest";
import { storiesOf } from "@storybook/react";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array, boolean, button, color, date, knob, number, object, text, select } from "@storybook/addon-knobs";
import withStyles from "@sambego/storybook-styles"
import { withViewport } from "@storybook/addon-viewport";

import { Button } from "../..";
import { Button as NativeButton, WingBlank, WhiteSpace } from "../../index.native";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

storiesOf("Button", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(Button.THEME_VARIABLES))
    .add(
        "options",
        () => (
            <Button
                block={boolean("Block", false)}
                disabled={boolean("Disabled", false)}
                // ghost={boolean("Ghost", false)}
                webHtmlType={select("HTML element type", ["button", "reset", "submit"], "button")}
                icon={select("Icon", [undefined, ...iconManifest.outline], undefined)}
                loading={boolean("Loading", false)}
                onClick={action("clicked")}
                // shape={select("Shape", ["circle", "circle-outline"], undefined)}
                size={select("Size", ["small", "default", "large"], "default")}
                type={select("Type", ["default", "primary", "ghost", "warning"], "default")}
            >
                {text("Text", "Button Intro")}
            </Button>
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Button } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    );

// TODO: implement svg icons for RN, then this list will be replaced by the iconManifest above
import "../../_components/icon/anticon.less";
const nativeIcons = [
    "check-circle",
    "check",
    "check-circle-o",
    "cross-circle",
    "cross",
    "cross-circle-o",
    "up",
    "down",
    "left",
    "right",
    "ellipsis",
    "loading",
];

storiesOf("Button/Native", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(NativeButton.THEME_VARIABLES))
    .add(
        "options",
        () => (
            <WingBlank  size="lg">
                <WhiteSpace size="lg" />
                <NativeButton
                    block={boolean("Block", true)}
                    disabled={boolean("Disabled", false)}
                    icon={select("Icon", [undefined, ...nativeIcons], undefined)}
                    loading={boolean("Loading", false)}
                    onClick={action("clicked")}
                    size={select("Size", ["small", "large"], "large")}
                    type={select("Type", ["default", "primary", "ghost", "warning"], "default")}
                >
                    {text("Text", "Button Intro")}
                </NativeButton>
            </WingBlank>
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Button } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    );