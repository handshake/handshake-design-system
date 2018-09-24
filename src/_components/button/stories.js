import { action } from "@storybook/addon-actions";
import iconManifest from "@ant-design/icons/lib/manifest";
import { storiesOf } from "@storybook/react";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array, boolean, button, color, date, knob, number, object, text, select } from "@storybook/addon-knobs";
import { withViewport } from "@storybook/addon-viewport";

import { Button } from "../..";
import { Button as NativeButton } from "../../index.native";

storiesOf("AntD/Button", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add(
        "options",
        () => (
            <Button
                disabled={boolean("Disabled", false)}
                ghost={boolean("Ghost", false)}
                htmlType={select("HTML element type", ["button", "reset", "submit"], "button")}
                icon={select("Icon", [undefined, ...iconManifest.outline])}
                loading={boolean("Loading", false)}
                onClick={action("clicked")}
                size={select("Size", ["small", "default", "large"], "default")}
                type={select("Type", ["default", "primary", "dashed", "danger"], "default")}
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

storiesOf("AntD/Button/Native", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .add(
        "options",
        () => (
            <NativeButton
                disabled={boolean("Disabled", false)}
                onClick={action("clicked")}
                size={select("Size", ["small", "large"], "large")}
                type={select("Type", ["default", "primary", "ghost", "warning"], undefined)}
            >
                {text("Text", "Button Intro")}
            </NativeButton>
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