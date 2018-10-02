import styled from "styled-components";

// Based on (/ stolen from) styling of storybook addon panel buttons
const ButtonGroup = styled.ul`
    background: #fff;
    bottom: 0;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px 0 0;
    font-family: -apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Lucida Grande","Arial",sans-serif;
    display: flex;
    margin: 0;
    padding: 0;
    position: fixed;
    right: 0;

    li {
        border-left: 0 none;
        display: flex;
        font-size: 11px;
        height: 26px;
        list-style: none;
        padding: 0;
        position: relative;

        &:not(:first-child) {
            border-left: 1px solid rgba(0, 0, 0, 0.1);
        }
    }

    button {
        background: none;
        border-bottom: 2px solid transparent;
        border-top: 2px solid transparent;
        border: 0 none;
        letter-spacing: 1px;
        display: block;
        padding: 0 none;
        text-transform: uppercase;
    }
`;

export default ButtonGroup;
