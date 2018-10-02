import addons from "@storybook/addons";
import { ADDON_ID, EVENT_GET_THEME, EVENT_SET_THEME } from "./constants";
import Panel from "./panel";
import React from "react";

addons.register(ADDON_ID, (api) => {
    const channel = addons.getChannel();

    let theme = {};
    channel.on(EVENT_SET_THEME, (newTheme) => {
        theme = newTheme;
    });

    channel.on(EVENT_GET_THEME, () => {
        channel.emit(EVENT_SET_THEME, theme);
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