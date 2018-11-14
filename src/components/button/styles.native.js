import AntdButton from "antd-mobile-rn/es/button";
import styled from "styled-components/native";
import { lookup } from "../design-context/theme-provider/with_theme";

export default styled(AntdButton).attrs({
    // RN Styled Components doesn't support nested selectors like the web version does
    // so, we still need to provide nested styles this way:
    styles: ({ disabled, loading, lkp: { fn: lookup }, size, type }) => ({
        [`${type}Highlight`]: {
            backgroundColor: lookup(`${type}.active.backgroundColor`),
            borderColor: lookup(`${type}.active.borderColor`),
        },
        [`${type}HighlightText`]: {
            color: lookup(`${type}.active.color`),
        },
        [`${type}RawText`]: {
            color: lookup(`${type}.${(loading && "loading") || (disabled && "disabled") || "default"}.color`),
            fontFamily: lookup(`${type}.default.fontFamily`), // TODO: might need different values for each environment
            fontSize: lookup(`${size}.${type}.fontSize`),
            fontWeight: lookup(`${size}.${type}.weight`),
            textTransform: lookup(`${type}.default.textTransform`),
        },
        container: {
            flexDirection: "row",
        },
        indicator: {
            marginRight: "8px",
        },
    }),
})`
    align-items: center;
    background-color: ${lookup(({ disabled, type, loading }) =>
        `${type}.${(loading && "loading") || (disabled && "disabled") || "default"}.backgroundColor`)};
    border-color: ${lookup(({ disabled, type, loading }) =>
        `${type}.${(loading && "loading") || (disabled && "disabled") || "default"}.borderColor`)};
    border-radius: ${lookup`$(size).$(type).borderRadius`};
    border-width: ${lookup`$(type).default.borderWidth`};
    height: ${lookup`$(size).$(type).height`};
    justify-content: center;
    padding: 0 ${lookup`$(size).$(type).margin.horizontal`};
`;
