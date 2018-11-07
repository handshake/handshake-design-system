import _ from "lodash";
import React from "react";

import LESS_VARIABLES from "../../../theme";

export function ctx (theme = "light", variables = {}) {
    return {
        theme,
        variables: _.extend({}, LESS_VARIABLES, variables),
    };
}

export default ThemeContext = React.createContext(ctx);
