import React from "react";
import iconManifest from "@ant-design/icons/lib/manifest";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array, boolean, button, color, date, knob, number, object, text, select } from "@storybook/addon-knobs";
import { withViewport } from "@storybook/addon-viewport";
import styled from "styled-components";

import { Icon } from "../..";
import { Icon as NativeIcon } from "../../index.native";
import { ThemeSubscriber } from "../../components/design-context/theme-provider";

import withThemeVariables from "../../../storybook/theme_customizer/with_theme_variables";

import "./anticon.less";

// TODO: implement svg icons for RN, then this list will be replaced by the iconManifest above
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

const IconWrapper = styled.div`
    background-color: ${({ theme }) => theme.componentBackground};
    border: 1px solid ${({ theme }) => theme.borderColorSplit};
    border-radius: ${({ theme }) => theme.borderRadiusBase};
    display: inline-block;
    margin: 5px;
    padding: 10px;
    text-align: center;
    width: 160px; /* minimum needed to render longest icon name */
`;

const NativeIconWrapper = styled(IconWrapper)`
    width: 140px;
`;

function allIconsOfType (manifestType, themeType) {
    return _.map(iconManifest[manifestType],
        type => (
            <IconWrapper
                key={`${manifestType}-${type}`}
            >
                <ThemeSubscriber>
                    {theme => (
                        <Icon
                            spin={boolean("Spin", false)}
                            style={{
                                fontSize: 40,
                            }}
                            theme={themeType}
                            twoToneColor={color("Two Tone Color", theme.cardHeadBackground)}
                            type={type}
                        />
                    )}
                </ThemeSubscriber>
                <div>{type}</div>
            </IconWrapper>
        )
    )
}

function allNativeIcons () {
    return _.map(nativeIcons,
        type => (
            <NativeIconWrapper
                key={type}
            >
                <ThemeSubscriber>
                    {theme => (
                        <NativeIcon
                            size={select("Size", ["xxs", "xs", "sm", "md", "lg"], "lg")}
                            color={color("Color", theme.cardHeadBackground)}
                            type={type}
                        />
                    )}
                </ThemeSubscriber>
                <div>{type}</div>
            </NativeIconWrapper>
        )
    )
}

storiesOf("AntD/Icon", module)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(["cardHeadBackground"]))
    .add(
        "Outlined",
        () => allIconsOfType("outline", "outlined"),
        {
            header: false,
            text: `
                ![support level A](https://img.shields.io/badge/support level-A-brightgreen.svg)
                ### Usage
                ~~~js
                import { Icon } from "@handshake/design-system";
                ~~~
            `,
        }
    )
    .add(
        "Filled",
        () => allIconsOfType("fill", "filled"),
        {
            header: true,
            text: `
                ### Usage
                ~~~js
                import { Icon } from "@handshake/design-system";
                ~~~
            `,
        }
    )
    .add(
        "Two Tone",
        () => allIconsOfType("twotone", "twoTone"),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Icon } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    );

storiesOf("AntD/Icon/Native", module)
    .addDecorator(withInfo)
    .addDecorator(withViewport("iphone5"))
    .addDecorator(withKnobs)
    .addDecorator(withThemeVariables(["placeholder"]))
    .add(
        "All",
        () => allNativeIcons(),
        {
            info: {
                header: false,
                text: `
                    ### Usage
                    ~~~js
                    import { Icon } from "@handshake/design-system";
                    ~~~
                `,
            }
        }
    )
    .add(
        "svg experiment",
        () => {
            // TODO: reimplement native Icon using SVG icons from web:
            const Alibaba = require("@ant-design/icons/svg/outline/alibaba.svg");
            return <Alibaba />
        }
    );