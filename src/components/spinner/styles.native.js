import ActivityIndicator from "@ant-design/react-native/lib/activity-indicator";
// import { lookup } from "../design-context/theme-provider/with_theme";
import { stripProps } from "../../util/props";
import styled, { css } from "../../util/styled.native";
import View from "@ant-design/react-native/lib/view"; // NOTE: is a straight re-export from react-native

export default styled(stripProps(ActivityIndicator))`
    ${({ toast }) => (toast ? css`
        background-color: transparent;
        bottom: 0;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        z-index: 1999;
    ` : css`
        align-items: center;
        flex-direction: row;
        justify-content: center;
    `)}

    .innerContainer {
        background-color: transparent;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .wrapper {
        align-items: center;
        background-color: rgba(0, 0, 0, .8);
        border-radius: 5px;
        height: 89px;
        justify-content: center;
        width: 89px;
    }

    .toast {
        color: #ffffff;
        font-size: 14px;
        margin-top: 6px;
    }

    .tip {
        color: #000000;
        font-size: 14px;
        margin-left: 8px;
    }
`;

const SpinnerBox = styled.View`
    align-items: center;
    background-color: #ffffff;
    border-color: #e8e8e8;
    border-radius: 2px;
    border-width: 1px;
    flex: 1;
    justify-content: center;
    min-height: 200px;
`;

const SpinnerFrame = styled.View`
    flex: 1;
`;

export {
    SpinnerBox,
    SpinnerFrame,
};
