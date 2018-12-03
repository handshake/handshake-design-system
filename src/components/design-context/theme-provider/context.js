import _ from "lodash";
import React from "react";

import LESS_VARIABLES from "../../../theme";

export function ctx (theme = "light", variables = {}) {
    return {
        theme,
        variables: _.extend({}, LESS_VARIABLES, variables),
    };
}

const ThemeContext = React.createContext(ctx);
export default ThemeContext;
