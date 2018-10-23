export function t (v, theme, ...extra) {
    if (typeof v === "string") {
        return theme[v];
    }
    return v(theme, ...extra);
}