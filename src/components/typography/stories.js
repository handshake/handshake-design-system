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
import { WhiteSpace, WingBlank } from "antd-mobile-rn";
import { withInfo } from "@storybook/addon-info";
import withStyles from "@sambego/storybook-styles";
import { withViewport } from "@storybook/addon-viewport";

// eslint-disable-next-line camelcase
import { Text as NativeText } from "../../index.native";
import themes from "./themes.json";
// eslint-disable-next-line camelcase
import { Text as WebText } from "../../index.web";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

const commonKnobs = extraKnobs => ({
    type: select("Type", ["body", "h1", "h2", "h3", "h4", "h5"], "body"),
    ...extraKnobs,
});

const render = (Text, props) => (
    <Text {...props}>
        <FormattedMessage id="This is it!" />
    </Text>
);

storiesOf("Web/Text", module)
    .addDecorator(withInfo)
    .addDecorator(withStyles({ margin: 10 }))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(themes))
    .add(
        "all",
        () => (
            <div>
                <WebText type="h1"><FormattedMessage id="H1 ABCDEFGH 0123456789" /></WebText>
                <br />
                <WebText type="h2"><FormattedMessage id="H2 ABCDEFGH 0123456789" /></WebText>
                <br />
                <WebText type="h3"><FormattedMessage id="H3 ABCDEFGH 0123456789" /></WebText>
                <br />
                <WebText type="h4"><FormattedMessage id="H4 ABCDEFGH 0123456789" /></WebText>
                <br />
                <WebText type="h5"><FormattedMessage id="H5 ABCDEFGH 0123456789" /></WebText>
                <br />
                <WebText type="body"><FormattedMessage id="Body ABCDEFGH 0123456789" /></WebText>
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

storiesOf("Mobile/Text", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(themes))
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
