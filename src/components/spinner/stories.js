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
import Text from "@ant-design/react-native/lib/text";
import { WhiteSpace, WingBlank } from "@ant-design/react-native/lib";
import { withInfo } from "@storybook/addon-info";
import withStyles from "@sambego/storybook-styles";
import { withViewport } from "@storybook/addon-viewport";

import { Spinner as NativeSpinner } from "../../index.native";
import themes from "./themes.json";
import { Spinner as WebSpinner } from "../../index.web";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

const commonKnobs = extraKnobs => ({
    block: boolean("Block or Inline", false),
    enabled: boolean("Active", true),
    size: select("Size", [undefined, "large", "small"], undefined),
    text: text("Text", undefined),
    toast: boolean("Toast", false),
    ...extraKnobs,
});

const render = (Spinner, props) => (
    // eslint-disable-next-line react/jsx-pascal-case
    <Spinner {...props} />
);

storiesOf("Web/Spinner", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(themes))
    .add(
        "options",
        () => (
            <div>
                Text Before
                {render(WebSpinner, commonKnobs())}
                Text After
            </div>
        ),
        {
            info: {
                header: false,
                propTables: [WebSpinner],
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
    .addDecorator(withThemeVariables(themes))
    .add(
        "options",
        () => {
            const knobs = commonKnobs({ key: "spinner" });
            const { block, toast } = knobs;
            return (
                // 568 == height of iphone5 viewport, e.g. full screen
                // Toast centers itself vertically in its closest `relative`
                // parent which is this View
                <WingBlank size="lg" style={toast ? { height: 568 } : {}}>
                    <WhiteSpace size="lg" />
                    {block ? [
                        // Text forces anything nested inside to be inline, so, our block spinner
                        // cannot be a child of a Text. On the flipside, Text itself is a block
                        // element, so, our inline spinner cannot be a sibling of a Text.
                        // Hence, splitting it out like this.
                        <Text key="before">Text Before</Text>,
                        render(NativeSpinner, knobs),
                        <Text key="after">Text After</Text>,
                    ] : (
                        <Text>
                            Text Before
                            {render(NativeSpinner, knobs)}
                            Text After
                        </Text>
                    )}
                </WingBlank>
            );
        },
        {
            info: {
                header: false,
                propTables: [NativeSpinner],
                text: `
                    ### Usage
                    ~~~js
                    import { Spinner } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );
