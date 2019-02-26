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
import { FormattedMessage } from "react-intl";
import React from "react";
import { storiesOf } from "@storybook/react";
import { WhiteSpace, WingBlank } from "@ant-design/react-native/lib";
import { withInfo } from "@storybook/addon-info";
import withStyles from "@sambego/storybook-styles";
import { withViewport } from "@storybook/addon-viewport";

import { Text as NativeText } from "../../index.native";
import themes from "./themes.json";
import { Text as WebText } from "../../index.web";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

const commonKnobs = extraKnobs => ({
    type: select("Type", ["h1", "h2", "h3", "h4", "h5", "body"], "h1"),
    textContent: text("Text Content", "Sample text"),
    ...extraKnobs,
});

const render = (Text, props) => {
    // eslint-disable-next-line react/prop-types
    const { textContent } = props;
    return (
        <Text {...props}>
            <FormattedMessage id={textContent} />
        </Text>
    );
};

storiesOf("Web/Typography", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(themes))
    .add(
        "all",
        () => (
            <div>
                <WebText.H1><FormattedMessage id="H1 ABCDEFGH 0123456789" /></WebText.H1>
                <WebText.H2><FormattedMessage id="H2 ABCDEFGH 0123456789" /></WebText.H2>
                <WebText.H3><FormattedMessage id="H3 ABCDEFGH 0123456789" /></WebText.H3>
                <WebText.H4><FormattedMessage id="H4 ABCDEFGH 0123456789" /></WebText.H4>
                <WebText.H5><FormattedMessage id="H5 ABCDEFGH 0123456789" /></WebText.H5>
                <WebText.P><FormattedMessage id="Body ABCDEFGH 0123456789" /></WebText.P>
                <WebText.P>
                    <WebText.Span><FormattedMessage id="Span inline text 1." /></WebText.Span>
                    <WebText.Span><FormattedMessage id="Span inline text 2." /></WebText.Span>
                </WebText.P>
            </div>
        ),
        {
            info: {
                header: false,
                propTables: [WebText],
                text: `
                    ### Usage
                    ~~~js
                    import { Text } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    )
    .add(
        "options",
        () => (
            render(WebText, commonKnobs())
        ),
        {
            info: {
                header: false,
                propTables: [WebText],
                text: `
                    ### Usage
                    ~~~js
                    import { Text } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );

storiesOf("Mobile/Typography", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(themes))
    .add(
        "all",
        () => (
            <WingBlank>
                <NativeText.H1><FormattedMessage id="H1 ABCDEFGH 0123456789" /></NativeText.H1>
                <NativeText.H2><FormattedMessage id="H2 ABCDEFGH 0123456789" /></NativeText.H2>
                <NativeText.H3><FormattedMessage id="H3 ABCDEFGH 0123456789" /></NativeText.H3>
                <NativeText.H4><FormattedMessage id="H4 ABCDEFGH 0123456789" /></NativeText.H4>
                <NativeText.H5><FormattedMessage id="H5 ABCDEFGH 0123456789" /></NativeText.H5>
                <NativeText.P><FormattedMessage id="Body ABCDEFGH 0123456789" /></NativeText.P>
                <NativeText.P>
                    <NativeText.Span><FormattedMessage id="Span inline text 1." /></NativeText.Span>
                    <NativeText.Span><FormattedMessage id="Span inline text 2." /></NativeText.Span>
                </NativeText.P>
            </WingBlank>
        ),
        {
            info: {
                header: false,
                propTables: [WebText],
                text: `
                    ### Usage
                    ~~~js
                    import { Text } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    )
    .add(
        "options",
        () => (
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                {render(NativeText, commonKnobs())}
            </WingBlank>
        ),
        {
            info: {
                header: false,
                propTables: [NativeText],
                text: `
                    ### Usage
                    ~~~js
                    import { Text } from "@handshake/design-system";
                    ~~~
                `,
            },
        },
    );
