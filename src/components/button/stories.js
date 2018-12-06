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
import themes from "./themes.json";
import { WhiteSpace, WingBlank } from "antd-mobile-rn";
import { withInfo } from "@storybook/addon-info";
import withStyles from "@sambego/storybook-styles";
import { withViewport } from "@storybook/addon-viewport";

import { Button, Icon } from "../..";
import { Button as NativeButton } from "../../index.native";
import Text from "antd-mobile-rn/es/text";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

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
                <Button
                    block={boolean("Block", false)}
                    disabled={boolean("Disabled", false)}
                    icon={select("Icon", [undefined, ...Icon.ALL_TYPES], undefined)}
                    loading={boolean("Loading", false)}
                    onClick={action("clicked")}
                    size={select("Size", ["small", "large"], "large")}
                    type={select("Type", ["primary", "secondary", "confirm", "danger", "link"], "secondary")}
                >
                    {text("Text", "Button Intro")}
                </Button>
                <span>After</span>
            </div>
        ),
        {
            info: {
                header: false,
                propTables: [Button],
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
            const type = select("Type", ["primary", "secondary", "confirm", "danger", "link"], "secondary");
            const btn = (
                <NativeButton
                    key="btn"
                    block={boolean("Block", true)}
                    disabled={boolean("Disabled", false)}
                    icon={select("Icon", [undefined, ...Icon.ALL_TYPES], undefined)}
                    loading={boolean("Loading", false)}
                    onClick={action("clicked")}
                    size={select("Size", ["small", "large"], "large")}
                    type={type}
                >
                    {text("Text", "Button Intro")}
                </NativeButton>
            );
            return (
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    {!block || type === "link"
                        ? (
                            <Text>
                                Before
                                {btn}
                                After
                            </Text>
                        )
                        : ([
                            <Text key="before">Before</Text>,
                            btn,
                            <Text key="after">After</Text>,
                        ])
                    }
                </WingBlank>
            );
        },
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Button } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );
