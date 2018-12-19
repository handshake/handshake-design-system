import { lookup } from "../design-context/theme-provider/with_theme";
import styled, { css } from "../../util/styled.web";

export default styled("span")`
    color: ${lookup(({ type }) => (
        `${type}.default.color`
    ))};
    font-family: ${lookup(({ type }) => (
        `${type}.default.fontFamily`
    ))};
    font-size: ${lookup(({ type }) => (
        `${type}.default.size`
    ))};
    font-weight: ${lookup(({ type }) => (
        `${type}.default.weight`
    ))};
`;
