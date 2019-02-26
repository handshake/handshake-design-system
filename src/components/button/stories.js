/* eslint-disable react-intl/string-is-marked-for-translation */
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
import Text from "@ant-design/react-native/lib/text";
import themes from "./themes.json";
import { WhiteSpace, WingBlank } from "@ant-design/react-native/lib";
import { withInfo } from "@storybook/addon-info";
import withStyles from "@sambego/storybook-styles";
import { withViewport } from "@storybook/addon-viewport";

import { Button as NativeButton } from "../../index.native";
import { Button as WebButton } from "../../index.web";

import registry from "../icon/registry";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

import "../icon/sets/ant";
import "../icon/sets/fa";
import "../icon/sets/fi";
import "../icon/sets/go";
import "../icon/sets/io";
import "../icon/sets/md";
import "../icon/sets/ti";

const ALL_ICONS = registry.keys();

const commonKnobs = extraKnobs => ({
    children: text("Text", "Button Intro"),
    disabled: boolean("Disabled", false),
    icon: select("Icon", [undefined, ...ALL_ICONS], undefined),
    iconPlacement: select("Icon Placement", ["left", "right"], "left"),
    iconType: select("Icon Type", ["filled", "outlined", "twoTone"], "outlined"),
    loading: boolean("Loading", false),
    loadingText: text("Loading Text"),
    onClick: action("clicked"),
    size: select("Size", ["small", "large"], "large"),
    type: select("Type", ["primary", "secondary", "confirm", "danger", "link"], "secondary"),
    ...extraKnobs,
});

const render = (Button, props) => (
    <Button {...props} />
);

storiesOf("Web/Button", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(themes))
    .add(
        "options",
        () => (
            <div>
                <span>Before</span>
                {render(WebButton, commonKnobs({ block: boolean("Block", false) }))}
                <span>After</span>
            </div>
        ),
        {
            info: {
                header: false,
                propTables: [WebButton],
                text: `
                    ### Usage
                    ~~~js
                    import { Button } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );

storiesOf("Mobile/Button", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(themes))
    .add(
        "options",
        () => {
            const block = boolean("Block", true);
            const knobs = commonKnobs({ block, key: "btn" });
            const { type } = knobs;
            return (
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    {!block || type === "link"
                        ? (
                            <Text>
                                Before
                                {render(NativeButton, knobs)}
                                After
                            </Text>
                        )
                        : ([
                            <Text key="before">Before</Text>,
                            render(NativeButton, knobs),
                            <Text key="after">After</Text>,
                        ])
                    }
                </WingBlank>
            );
        },
        {
            info: {
                header: false,
                propTables: [NativeButton],
                text: `
                    ### Usage
                    ~~~js
                    import { Button } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );
