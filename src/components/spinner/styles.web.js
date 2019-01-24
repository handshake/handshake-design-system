import AntdSpin from "antd/es/spin";
import { lookup } from "../design-context/theme-provider/with_theme";
import stripProps from "../../util/strip_props";
import styled, { keyframes } from "../../util/styled.web";

const antSpinMove = keyframes`
    to {
        opacity: 1;
    }
`;

const antRotate = keyframes`
    to {
        transform: rotate(405deg);
    }
`;

export default styled(stripProps(AntdSpin))`
    box-sizing: border-box;
    color: #1890ff;
    display: inline-block;
    font-family: ${lookup`hs.typography.font.body`};
    font-size: ${lookup`hs.typography.size.body1`};
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    margin: 0;
    opacity: 1;
    padding: 0;
    position: static;
    text-align: center;
    transition: transform ${lookup`hs.transition.duration`} ${lookup`hs.transition.easing`};
    vertical-align: middle;

    .ant-spin-dot {
        display: inline-block;
        font-size: ${lookup`$(size).dotSize.outer`};
        height: ${lookup`$(size).dotSize.outer`};
        position: relative;
        width: ${lookup`$(size).dotSize.outer`};

        &-spin {
            animation: ${antRotate} 1.2s infinite linear;
            transform: rotate(45deg);
        }

        i {
            animation: ${antSpinMove} 1s infinite linear alternate;
            background-color: #1890ff;
            border-radius: 100%;
            display: block;
            height: ${lookup`$(size).dotSize.inner`};
            opacity: 0.3;
            position: absolute;
            transform: scale(0.75);
            transform-origin: 50% 50%;
            width: ${lookup`$(size).dotSize.inner`};

            &:nth-child(1) {
                left: 0;
                top: 0;
            }

            &:nth-child(2) {
                animation-delay: 0.4s;
                right: 0;
                top: 0;
            }

            &:nth-child(3) {
                animation-delay: 0.8s;
                bottom: 0;
                right: 0;
            }

            &:nth-child(4) {
                animation-delay: 1.2s;
                bottom: 0;
                left: 0;
            }
        }
    }

    .ant-spin-text {
        display: block;
    }
`;

const SpinnerCard = styled.div`
    align-items: center;
    background-color: #ffffff;
    border-color: #e8e8e8;
    border-radius: 2px;
    border-style: solid;
    border-width: 1px;
    display: flex;
    flex: 1;
    justify-content: center;
    min-height: 200px;
`;

const Toaster = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`;

const Toast = styled.div`
    align-items: center;
    background-color: rgba(58, 58, 58, 0.9);
    border-radius: 7px;
    display: inline-flex;
    justify-content: center;
    padding: 15px;
    text-align: center;
`;

export {
    SpinnerCard,
    Toast,
    Toaster,
};
