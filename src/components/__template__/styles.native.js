// eslint-disable-next-line camelcase
import Antd__TEMPLATE__ from "antd/es/__TEMPLATE__";
import { lookup } from "../design-context/theme-provider/with_theme";
import { stripProps } from "../../util/props";
import styled, { css } from "../../util/styled.native";

export default styled(stripProps(Antd__TEMPLATE__))`
    /* styles go here */
`;
