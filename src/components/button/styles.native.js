import AntdButton from "antd-mobile-rn/es/button";
import { css } from "styled-components/native";
import { lookup } from "../design-context/theme-provider/with_theme";
import rnStyled from "../../util/native_styled";

export default rnStyled(AntdButton, css`
    align-items: center;
    background-color: ${lookup(({ disabled, loading, type }) => (
        // eslint-disable-next-line max-len
        `${type}.${(loading && "loading") || (disabled && "disabled") || "default"}.backgroundColor`))};
    border-color: ${lookup(({ disabled, loading, type }) => (
        `${type}.${(loading && "loading") || (disabled && "disabled") || "default"}.borderColor`))};
    border-radius: ${lookup`$(size).$(type).borderRadius`};
    border-width: ${lookup`$(type).default.borderWidth`};
    height: ${lookup`$(size).$(type).height`};
    justify-content: center;
    padding: 0 ${lookup`$(size).$(type).margin.horizontal`};

    /* SPLIT HERE: DO NOT DELETE */

    #${p => p.type}Highlight {
        background-color: ${lookup`$(type).active.backgroundColor`};
        border-color: ${lookup`$(type).active.borderColor`};
    }

    #${p => p.type}HighlightText {
        color: ${lookup`$(type).active.color`}
    }

    #${p => p.type}RawText {
        color: ${lookup(({ disabled, loading, type }) => (
            // eslint-disable-next-line max-len
            `${type}.${(loading && "loading") || (disabled && "disabled") || "default"}.color`))};
        /* TODO: might need different values for each environment */
        font-family: ${lookup`$(type).default.fontFamily`};
        font-size: ${lookup`$(size).$(type).fontSize`};
        font-weight: ${lookup`$(size).$(type).weight`};
        text-transform: ${lookup`$(type).default.textTransform`};
    }

    #container {
        flex-direction: row;
    }

    #indicator {
        margin-right: 8px;
    }
`);
