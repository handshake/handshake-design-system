// import { decorateAction } from "@storybook/addon-actions";
import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, boolean, object, select, text } from "@storybook/addon-knobs/react";
// import { withState } from "@dump247/storybook-state";

import { DatePicker } from "../..";

storiesOf("AntD/DatePicker", module)
    .addDecorator(withKnobs)
    .add(
        "Basic Options",
        withInfo({
            header: false,
            text: `
                ![support level F](https://img.shields.io/badge/support level-F-red.svg)
                ### Usage
                ~~~js
                import { DatePicker } from "@handshake/design-system";
                ~~~
            `,
        })(() => (
            <DatePicker
                disabled={boolean("Disabled", false)}
                format={text("Format", "YYYY-MM-DD")}
                open={boolean("Open", false)}
                placeholder={text("Placeholder")}
                popupStyle={object("Pop-up Style", {})}
                mode={select("Mode", ["date", "time", "month", "year"], "date")}
                showTime={boolean("Show TimePicker Also", false)}
                size={select("Size", ["large", "default", "small"], "default")}
                style={object("Style", {})}
                transitionName={select("Transition", [
                    // all transitions are found in antd/lib/style/core/motion
                    "fade",
                    "move-down", "move-left", "move-right", "move-up",
                    "slide-down", "slide-left", "slide-right", "slide-up",
                    "swing",
                    "zoom", "zoom-big", "zoom-big-fast",
                    "zoom-down", "zoom-left", "zoom-right", "zoom-up",
                ], "slide-up")}
            />
        )),
    );
