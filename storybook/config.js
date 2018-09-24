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

function loadStories() {
    require("../src/stories");
}

configure(loadStories, module);
