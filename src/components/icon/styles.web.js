// import { lookup } from "../design-context/theme-provider/with_theme";
import { stripProps } from "../../util/props";
import styled, { css, keyframes } from "../../util/styled.web";

const spinning = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export default styled(stripProps("i", "flip", "rotate", "size", "spin"))`
    display: inline-block;
    font-style: normal;
    line-height: 0;
    text-align: center;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-transform: none;
    vertical-align: 50%;

    ${({ flip, rotate }) => (flip || rotate) && css`
        transform: ${() => (
            (flip === "horizontal" && "scaleX(-1)")
            || (flip === "vertical" && "scaleY(-1)")
            || ""
        )} ${() => (
            // eslint-disable-next-line prefer-template
            rotate && "rotate(" + rotate + "deg)")
            || ""};
    `}

    > * {
        display: inline-block;

        ${({ spin }) => (spin ? css`
            animation: ${spinning} 1s infinite linear;
        ` : "")}
    }
`;
