/* eslint-disable react-intl/string-is-marked-for-translation */
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
import Text from "antd-mobile-rn/es/text";
import { WhiteSpace, WingBlank } from "antd-mobile-rn";
import { withInfo } from "@storybook/addon-info";
import withStyles from "@sambego/storybook-styles";
import { withViewport } from "@storybook/addon-viewport";

import { Spinner as NativeSpinner } from "../../index.native";
import { Spinner } from "../../index.web";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

storiesOf("Web/Spinner", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(Spinner.THEME_VARIABLES))
    .add(
        "options",
        () => (
            <div>
                Text Before
                <Spinner
                    block={boolean("Block or Inline", false)}
                    enabled={boolean("Active", true)}
                    size={select("Size", [undefined, "large", "small"], undefined)}
                    text={text("Text", undefined)}
                    toast={boolean("Toast", false)}
                />
                Text After
            </div>
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Spinner } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );

storiesOf("Mobile/Spinner", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(NativeSpinner.THEME_VARIABLES))
    .add(
        "options",
        () => (
            // 568 == height of iphone5 viewport, e.g. full screen
            // Toast centers itself vertically in its closest `relative` parent which is this View
            <WingBlank size="lg" style={boolean("Toast", false) ? { height: 568 } : {}}>
                <WhiteSpace size="lg" />
                {boolean("Block", false) ? [
                    // Text forces anything nested inside to be inline, so, our block spinner
                    // cannot be a child of a Text. On the flipside, Text itself is a block element,
                    // so, our inline spinner cannot be a sibling of a Text. Hence, splitting it out
                    // like this.
                    <Text key="before">Text Before</Text>,
                    <NativeSpinner
                        key="spinner"
                        block
                        enabled={boolean("Active", true)}
                        size={select("Size", ["large", "small"], "large")}
                        text={text("Text", undefined)}
                        toast={boolean("Toast", false)}
                    />,
                    <Text key="after">Text After</Text>,
                ] : (
                    <Text>
                        Text Before
                        <NativeSpinner
                            enabled={boolean("Active", true)}
                            size={select("Size", ["large", "small"], "large")}
                            text={text("Text", undefined)}
                            toast={boolean("Toast", false)}
                        />
                        Text After
                    </Text>
                )}
            </WingBlank>
        ),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Spinner } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );
