import { storiesOf } from "@storybook/react";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array, boolean, button, color, date, knob, number, object, text, select } from "@storybook/addon-knobs";
import { withViewport } from "@storybook/addon-viewport";

import { Spinner } from "../../index.web";
import { Spinner as NativeSpinner, View, Text } from "../../index.native";

storiesOf("Spinner", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
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
            }
        }
    );

storiesOf("Spinner/Native", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .add(
        "options",
        () => (
            // 568 == height of iphone5 viewport, e.g. full screen
            // Toast centers itself vertically in its closest `relative` parent which is this View
            <View style={boolean("Toast", false) ? { height: 568 } : {}}>
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
            </View>
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
            }
        }
    );