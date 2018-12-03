import { addDecorator, configure } from "@storybook/react";
import { withOptions } from "@storybook/addon-options";
import React from "react";
import DesignContextDecorator from "./design_context_decorator";

import "@handshake/design-system-fonts/BrandonText.less";

// Customize options for our storybook UI
addDecorator(withOptions({
    name: "Handshake Design System",
    url: "https://github.com/handshake/handshake-design-system/",
    addonPanelInRight: true,
}));

addDecorator(storyFn => (
    <DesignContextDecorator>
        {storyFn()}
    </DesignContextDecorator>
));

function importAll (req) {
    req.keys().forEach(filename => req(filename));
}

function loadStories () {
    require("./welcome_story");
    importAll(require.context(
        "../src/components",
        true,
        /(\b(?!__template__|__tests__)[\w-]+\/)stories\.js$/),
    );
    importAll(require.context(
        "../src/components",
        true,
        /(\b(?!__template__|__tests__)[\w-]+\/)sketch_stories\.js$/),
    );
}

configure(loadStories, module);
