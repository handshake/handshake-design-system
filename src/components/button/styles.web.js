import AntdButton from "antd/es/button";
import { lookup } from "../design-context/theme-provider/with_theme";
import styled, { css, keyframes } from "../../util/styled.web";

const loadingCircle = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export default styled(AntdButton)`
    background-color: ${lookup(({ hsLoading, type }) => (
        `${type}.${hsLoading ? "loading" : "default"}.backgroundColor`))};
    background-image: none;
    border:
        ${lookup`$(type).default.borderWidth`}
        ${lookup`$(type).default.borderStyle`}
        ${lookup(({ hsLoading, type }) => (
            `${type}.${hsLoading ? "loading" : "default"}.borderColor`))};
    border-radius: ${lookup`$(size).$(type).borderRadius`};
    box-shadow: ${lookup`$(type).default.boxShadow`};
    color: ${lookup`$(type).default.color`};
    cursor: pointer;
    display: inline-block;
    font-family: ${lookup`$(type).default.fontFamily`};
    font-size: ${lookup`$(size).$(type).fontSize`};
    font-weight: ${lookup`$(size).$(type).weight`};
    height: ${lookup`$(size).$(type).height`};
    line-height: ${lookup`$(size).$(type).lineHeight`};
    padding:
        ${lookup`$(size).$(type).margin.vertical`}
        ${lookup`$(size).$(type).margin.horizontal`}
        ${lookup`$(size).$(type).margin.vertical`}
        ${lookup(({ hsLoading, size, type }) => (hsLoading
            ? `${size}.${type}.margin.loading`
            : `${size}.${type}.margin.horizontal`))};
    pointer-events: ${({ hsLoading }) => (hsLoading ? "none" : "auto")};
    position: relative;
    text-align: center;
    text-transform: ${lookup`$(type).default.textTransform`};
    touch-action: manipulation;
    transition: all ${lookup`hs.transition.duration`} ${lookup`hs.transition.easing`};
    user-select: none;
    white-space: nowrap;
    width: ${({ block }) => (block ? "100%" : "auto")};

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
            background-color: ${lookup(({ hsLoading, type }) => (
                `${type}.${hsLoading ? "loading" : "disabled"}.backgroundColor`))};
            border-color: ${lookup(({ hsLoading, type }) => (
                `${type}.${hsLoading ? "loading" : "disabled"}.borderColor`))};
            box-shadow: none;
            color: ${lookup(({ hsLoading, type }) => (
                `${type}.${hsLoading ? "loading" : "disabled"}.color`))};
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
        display: ${({ hsLoading }) => (hsLoading ? "block" : "none")};
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
        margin-left: ${lookup(({ size, hsLoading }) => (hsLoading
            ? `${size}.$(type).margin.loadingIcon`
            : 0))};
        vertical-align: -0.125em;
        text-align: center;
        text-transform: none;
        text-rendering: optimizeLegibility;
        transition: margin-left ${lookup`hs.transition.duration`} ${lookup`hs.transition.easing`};

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
