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
import { WhiteSpace, WingBlank } from "@ant-design/react-native/lib";
import { withInfo } from "@storybook/addon-info";
import withStyles from "@sambego/storybook-styles";
import { withViewport } from "@storybook/addon-viewport";

import { Icon as NativeIcon } from "../../index.native";
import registry from "./registry";
// import themes from "./themes.json";
import { Icon as WebIcon } from "../..";

// import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

import "./sets/ant";
import "./sets/fa";
import "./sets/fi";
import "./sets/go";
import "./sets/io";
import "./sets/md";
import "./sets/ti";

const ALL_ICONS = registry.keys();

const commonKnobs = extraKnobs => ({
    color: color("Color", "#ff0000"),
    flip: select("Flip", [undefined, "horizontal", "vertical"], undefined),
    icon: select("Icon", ALL_ICONS, "logo"),
    rotate: number("Rotate", 0),
    size: select("Size", ["default", "large", "small"], "default"),
    spin: boolean("Spin", false),
    type: select("Type", ["filled", "outlined", "twoTone"], "outlined"),
    ...extraKnobs,
});

const render = (Icon, props) => (
    // eslint-disable-next-line react/jsx-pascal-case
    <Icon {...props} />
);

storiesOf("Web/Icon", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    // .addDecorator(withThemeVariables(themes))
    .add(
        "options",
        () => (
            render(WebIcon, commonKnobs())
        ),
        {
            info: {
                header: false,
                propTables: [WebIcon],
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
    // .addDecorator(withThemeVariables(themes))
    .add(
        "options",
        () => (
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                {render(NativeIcon, commonKnobs())}
            </WingBlank>
        ),
        {
            info: {
                header: false,
                propTables: [NativeIcon],
                text: `
                    ### Usage
                    ~~~js
                    import { Icon } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );
