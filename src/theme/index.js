import _ from "lodash";
import ANTD_LESS_VARIABLES from "./antd_less_variables.json";
import ANTD_MOBILE_LESS_VARIABLES from "./antd_mobile_less_variables.json";
import ANTD_RN_VARIABLES from "./antd_mobile_rn_variables.json";
import flatten from "flat";
import HS_LESS_VARIABLES from "./handshake_less_variables.json";
import variableTypes from "./variable_types.json";

let baseVariables = _.omit(
    _.extend(
        {},
        ANTD_MOBILE_LESS_VARIABLES,
        _.mapKeys(ANTD_RN_VARIABLES, (__, key) => _.kebabCase(key)),
        ANTD_LESS_VARIABLES,
    ),
    "$comment",
    "comment",
);
baseVariables = _.fromPairs(_.sortBy(_.toPairs(baseVariables, 0)));

let themeVariables = _.omit(
    _.extend(
        {},
        baseVariables,
        flatten(HS_LESS_VARIABLES, { delimiter: "-" }),
    ),
    "$comment",
    "comment",
);
themeVariables = _.fromPairs(_.sortBy(_.toPairs(themeVariables, 0)));

const base = {
    camelCase: _.mapKeys(baseVariables, (__, key) => _.camelCase(key)),
    kebabCase: baseVariables,
    snakeCase: _.mapKeys(baseVariables, (__, key) => _.snakeCase(key)),
    pathNotation: _.mapKeys(baseVariables, (__, key) => key.split("-").join(".")),
};
const theme = {
    camelCase: _.mapKeys(themeVariables, (__, key) => _.camelCase(key)),
    kebabCase: themeVariables,
    snakeCase: _.mapKeys(themeVariables, (__, key) => _.snakeCase(key)),
    pathNotation: _.mapKeys(themeVariables, (__, key) => key.split("-").join(".")),
};

export default theme.camelCase;
export { base, theme, variableTypes };
