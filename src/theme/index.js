import _ from "lodash";
import __ANTD_LESS_VARIABLES__ from "./antd_less_variables.json";
import __ANTD_MOBILE_LESS_VARIABLES__ from "./antd_mobile_less_variables.json";
import __HS_LESS_VARIABLES__ from "./handshake_less_variables.json";

export default _.omit(
    _.extend(
        _.mapKeys(__ANTD_MOBILE_LESS_VARIABLES__, (__, key) => _.camelCase(key)),
        _.mapKeys(__ANTD_LESS_VARIABLES__, (__, key) => _.camelCase(key)),
        _.mapKeys(__HS_LESS_VARIABLES__, (__, key) => _.camelCase(key)),
    ),
    "comment",
)
