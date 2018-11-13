import AntdButton from "antd/es/button";
import { lookup } from "../design-context/theme-provider/with_theme";
import styled, { keyframes } from "styled-components";

const loadingCircle = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const Button = styled(AntdButton)`
    background-color: ${lookup`$(type).default.backgroundColor`};
    background-image: none;
    border:
        ${lookup`$(type).default.borderWidth`}
        ${lookup`$(type).default.borderStyle`}
        ${lookup`$(type).default.borderColor`};
    border-radius: ${lookup`$(size).borderRadius`};
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    color: ${lookup`$(type).default.color`};
    cursor: pointer;
    display: inline-block;
    font-family: ${lookup`$(type).default.fontFamily`};
    font-size: ${lookup`$(size).fontSize`};
    font-weight: ${lookup`$(size).weight`};
    height: ${lookup`$(size).height`};
    line-height: ${lookup`$(size).lineHeight`};
    padding:
        ${lookup`$(size).margin.vertical`}
        ${lookup`$(size).margin.horizontal`}
        ${lookup`$(size).margin.vertical`}
        ${lookup(({ size, loading }) => loading
            ? `${size}.margin.loading`
            : `${size}.margin.horizontal`)};
    pointer-events: ${({ loading }) => loading ? "none" : "auto"};
    position: relative;
    text-align: center;
    text-transform: ${lookup`$(type).default.textTransform`};
    touch-action: manipulation;
    transition: all ${lookup`hs-transition-duration`} ${lookup`hs-transition-easing`};
    user-select: none;
    white-space: nowrap;
    width: ${({ block }) => block ? "100%" : "auto"};

    &,
    &:active,
    &:focus {
        outline: 0;
    }

    &:hover,
    &:focus,
    &:active,
    &.active {
        text-decoration: none;
    }

    /* http://stackoverflow.com/a/21281554/3040605 */
    &:focus > span,
    &:active > span {
        position: relative;
    }

    &:hover {
        background-color: ${lookup`$(type).hover.backgroundColor`};
        border-color: ${lookup`$(type).hover.borderColor`};
        color: ${lookup`$(type).hover.color`};
    }

    &:focus,
    &:active,
    &.active {
        background-color: ${lookup`$(type).active.backgroundColor`};
        border-color: ${lookup`$(type).active.borderColor`};
        color: ${lookup`$(type).active.color`};
    }

    &:not([disabled]):hover {
        text-decoration: none;
    }

    &:not([disabled]):active {
        box-shadow: none;
        outline: 0;
        transition: none;
    }

    &.disabled,
    &[disabled] {
        cursor: not-allowed;

        &,
        &:hover,
        &:focus,
        &:active,
        &.active {
            background-color: ${lookup`$(type).disabled.backgroundColor`};
            border-color: ${lookup`$(type).disabled.borderColor`};
            box-shadow: none;
            color: ${lookup`$(type).disabled.color`};
            text-shadow: none;
        }

        > * {
            pointer-events: none;
        }
    }

    &:before {
        background: #fff;
        border-radius: inherit;
        bottom: -1px;
        content: '';
        display: ${({ loading }) => loading ? "block" : "none"};
        left: -1px;
        opacity: 0.35;
        pointer-events: none;
        position: absolute;
        right: -1px;
        top: -1px;
        transition: opacity 0.2s;
        z-index: 1;
    }

    &-two-chinese-chars:first-letter {
        letter-spacing: 0.34em;
    }

    &-two-chinese-chars > * {
        letter-spacing: 0.34em;
        margin-right: -0.34em;
    }

    .anticon {
        display: inline-block;
        font-style: normal;
        line-height: 1;
        margin-left: ${lookup(({ size, loading }) => loading
            ? `${size}.margin.loadingIcon`
            : 0)};
        vertical-align: -0.125em;
        text-align: center;
        text-transform: none;
        text-rendering: optimizeLegibility;
        transition: margin-left ${lookup`hs-transition-duration`} ${lookup`hs-transition-easing`};

        > * {
            line-height: 1;
        }

        svg {
            display: inline-block;
        }

        svg:not(:root) {
            overflow: hidden;
        }

        .anticon-spin {
            animation: ${loadingCircle} 1s infinite linear;
        }
    }

    /* To ensure that a space will be placed between character and Icon. */
    > .anticon + span,
    > span + .anticon {
        margin-left: 8px;
    }

    /* a inside Button which only work in Chrome
    * http://stackoverflow.com/a/17253457
    */
    > a:only-child {
        color: currentColor;
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: transparent;
        }
    }

    > i,
    > span {
        pointer-events: none;
    }
`;

export const Link = styled.a`
    color: ${lookup`$(type).default.color`};
    cursor: pointer;
    font-family: ${lookup`$(type).default.fontFamily`};
    font-size: ${lookup`$(size).size`};
    font-weight: ${lookup`$(size).weight`};
    pointer-events: ${({ loading }) => loading ? "none" : "auto"};
    text-transform: ${lookup`$(type).default.textTransform`};
    touch-action: manipulation;
    transition: all ${lookup`hs-transition-duration`} ${lookup`hs-transition-easing`};
    
    &,
    &:active,
    &:focus {
        outline: 0;
    }

    &,
    &:hover,
    &:focus,
    &:active,
    &.active {
        text-decoration: none;
    }

    &:hover {
        color: ${lookup`$(type).hover.color`};
    }

    &:focus,
    &:active,
    &.active {
        color: ${lookup`$(type).active.color`};
    }

    &.disabled,
    &[disabled] {
        cursor: not-allowed;

        &,
        &:hover,
        &:focus,
        &:active,
        &.active {
            color: ${lookup`$(type).disabled.color`};
        }

        > * {
            pointer-events: none;
        }
    }

    .anticon {
        color: inherit;
        display: inline-block;
        font-size: inherit;
        font-style: normal;
        line-height: 1;
        margin-left: 0
        vertical-align: -0.125em;
        text-align: center;
        text-transform: none;
        text-rendering: optimizeLegibility;
        transition: margin-left ${lookup`hs-transition-duration`} ${lookup`hs-transition-easing`};

        > * {
            line-height: 1;
        }

        svg {
            display: inline-block;
        }

        svg:not(:root) {
            overflow: hidden;
        }
    }

    /* To ensure that a space will be placed between character and Icon. */
    > .anticon + span,
    > span + .anticon {
        margin-left: 8px;
    }

    > i,
    > span {
        pointer-events: none;
    }
`;
