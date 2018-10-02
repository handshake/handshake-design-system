import _ from "lodash";
import { storiesOf } from "@storybook/react";
import React from "react";
import { withOptions } from "@storybook/addon-options";
import withStyles from "@sambego/storybook-styles"
import ThemeCustomizer from "./theme_customizer/theme_customizer";

storiesOf("Welcome", module)
    .addDecorator(withOptions({ showAddonPanel: false }))
    .add("welcome", () => (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome to the Handshake Design System</h1>
            TODO: Intro Text
        </div>
    ))
    .addDecorator(withStyles({
        overflowX: "hidden",
    }))
    .add("Theme Customization", () => {
        return <ThemeCustomizer/>;
    });