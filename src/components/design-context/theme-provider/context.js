import _ from "lodash";
import React from "react";

import { theme as themeVariables } from "../../../theme";

export function ctx (themeName = "light", variables = {}) {
    return {
        theme: themeName,
        variables: _.extend({}, themeVariables.pathNotation, variables),
    };
}

const ThemeContext = React.createContext(ctx);
export default ThemeContext;
