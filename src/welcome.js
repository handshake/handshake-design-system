import { storiesOf } from "@storybook/react";
import React from "react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, array, boolean, button, color, date, knob, number, object, text, select } from "@storybook/addon-knobs";

storiesOf("Welcome", module)
    .add("welcome", () => (
        <div>
            <h1 style={{ textAlign: "center" }}>Welcome to the Handshake Design System</h1>
            TODO: Intro Text
        </div>
    ));