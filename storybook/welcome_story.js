import _ from "lodash";
import React from "react";
import { storiesOf } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import withStyles from "@sambego/storybook-styles"
import ThemeCustomizer from "./theme_customizer/theme_customizer";

import Playground from "./playground";

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
        height: "100vh",
        overflowX: "hidden",
    }))
    .add("Theme Customization", () => <ThemeCustomizer />)
    .add("Playground", () => <Playground web mobile />);