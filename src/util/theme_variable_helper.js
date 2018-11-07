// NOTE: this file is deprecated
import _ from "lodash";

export default function t (v, theme, ...extra) {
    if (typeof v === "string") {
        return theme[v];
    }
    return v(theme, ...extra);
}
