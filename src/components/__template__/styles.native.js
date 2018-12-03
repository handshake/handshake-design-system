// eslint-disable-next-line camelcase
import Antd__TEMPLATE__ from "antd/es/__TEMPLATE__";
import { lookup } from "../design-context/theme-provider/with_theme";
import styled from "styled-components/native";

export default styled(Antd__TEMPLATE__).attrs({
    // RN Styled Components doesn't support nested selectors like the web version does
    // so, we still need to provide nested styles this way:
    // eslint-disable-next-line no-empty-pattern
    styles: ({
        // props go here
    }) => ({
        // nested styles go here
    }),
})`
    /* styles go here */
`;
