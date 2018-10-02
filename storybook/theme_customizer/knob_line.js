import styled from "styled-components";

const KnobLine = styled.label`
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    margin: 8px 0;
    padding: 0 8px 8px;
    width: 100%;

    > span {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        line-height: 16px;
        margin-right: 16px;
        min-height: 32px;
        min-width: 170px;
    }

    > div {
        display: inline-flex;
        position: relative;
        width: 100%;

        > input[type=checkbox] {
            margin-top: 6px;
        }

        > div {
            font-family: sans-serif;
            font-size: ${({ inPanel }) => inPanel ? 11 : 14}px;
            left: ${({ inPanel }) => inPanel ? 11 : 10}px;
            opacity: 0.3;
            pointer-events: none;
            position: absolute;
            top: ${({ inPanel }) => inPanel ? 11 : 6}px;
        }
    }
`;

export default KnobLine;
