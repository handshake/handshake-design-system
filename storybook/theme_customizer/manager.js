import addons from "@storybook/addons";
import {
    ADDON_ID,
    EVENT_GET_THEME_NAME,
    EVENT_SET_THEME_NAME,
    EVENT_GET_THEME_VARIABLES,
    EVENT_SET_THEME_VARIABLES,
} from "./constants";
import Panel from "./panel";
import React from "react";

addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel();

    let themeName = "light";
    channel.on(EVENT_SET_THEME_NAME, (newThemeName) => {
        themeName = newThemeName;
    });

    channel.on(EVENT_GET_THEME_NAME, () => {
        channel.emit(EVENT_SET_THEME_NAME, themeName);
    });

    let variables = {};
    channel.on(EVENT_SET_THEME_VARIABLES, (newVariables) => {
        variables = newVariables;
    });

    channel.on(EVENT_GET_THEME_VARIABLES, () => {
        channel.emit(EVENT_SET_THEME_VARIABLES, variables);
    });

    addons.addPanel(ADDON_ID, {
        title: "Theme",
        render: ({ active }) => (
            <Panel
                channel={channel}
                api={api}
                key="theme-panel"
                active={active}
            />
        ),
    });
});