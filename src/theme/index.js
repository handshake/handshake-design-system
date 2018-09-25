import _ from "lodash";
import __ANTD_LESS_VARIABLES__ from "./antd_less_variables.json";
import __ANTD_MOBILE_LESS_VARIABLES__ from "./antd_mobile_less_variables.json";
import __HS_LESS_VARIABLES__ from "./handshake_less_variables.json";

const __LESS_VARIABLES__ = _.omit(
    _.extend(
        __ANTD_MOBILE_LESS_VARIABLES__,
        __ANTD_LESS_VARIABLES__,
        __HS_LESS_VARIABLES__,
    ),
    "$comment",
);

export default _.mapKeys(__LESS_VARIABLES__, (__, key) => _.camelCase(key));
export { __LESS_VARIABLES__ };
