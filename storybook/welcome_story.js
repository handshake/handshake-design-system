/* eslint-disable react-intl/string-is-marked-for-translation */
import _ from "lodash";
import React from "react";
import { storiesOf } from "@storybook/react";
import ThemeCustomizer from "./theme_customizer/theme_customizer";
import { withOptions } from "@storybook/addon-options";
import withStyles from "@sambego/storybook-styles"

import Playground from "./playground";

// import "antd/es/style";

storiesOf("Welcome", module)
    .addDecorator(withOptions({ showAddonPanel: false }))
    .add("welcome", () => (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome to the Handshake Design System</h1>
            TODO: Intro Text
        </div>
    ))
    .addDecorator(withStyles({
        background: "rgba(255,255,255,0.89)",
        // fontFamily: 'BrandonText,\"Chinese Quote\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",\"PingFang SC\",\"Hiragino Sans GB\",\"Microsoft YaHei\",\"Helvetica Neue\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\"',
        height: "100vh",
        overflowX: "hidden",
    }))
    .add("Theme Customization", () => <ThemeCustomizer prefix="hs" />)
    .add("Playground", () => <Playground web mobile />);
