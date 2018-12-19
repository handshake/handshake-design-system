import { lookup } from "../design-context/theme-provider/with_theme";
import styled, { css } from "../../util/styled.native";
import { Text } from "react-native";

// TODO: Handle font-family
export default styled(Text)`
    color: ${lookup(({ type }) => (
        `${type}.default.color`
    ))};
    font-size: ${lookup(({ type }) => (
        `${type}.default.size`
    ))};
    font-weight: ${lookup(({ type }) => (
        `${type}.default.weight`
    ))};
`;
