import AntdButton from "antd-mobile-rn/es/button";
import React from "react";
import styled from "styled-components/native";
import Text from "antd-mobile-rn/es/text";
import themes from "./themes.json";
import WithTheme, { lookup } from "../design-context/theme-provider/with_theme";

export const Button = props => {
    const { loading, size, type } = props;
    return (
        <WithTheme themes={themes}>
            {({ lookup }) =>
                <AntdButton
                    styles={{
                        [`${type}Raw`]: {
                            backgroundColor: lookup(`${type}.${loading ? "loading" : "default"}.backgroundColor`),
                            borderColor: lookup(`${type}.${loading ? "loading" : "default"}.borderColor`),
                        },
                        [`${type}Highlight`]: {
                            backgroundColor: lookup(`${type}.active.backgroundColor`),
                            borderColor: lookup(`${type}.active.borderColor`),
                        },
                        [`${type}DisabledRaw`]: {
                            backgroundColor: lookup(`${type}.disabled.backgroundColor`),
                            borderColor: lookup(`${type}.disabled.borderColor`),
                        },
                        [`${type}RawText`]: {
                            color: lookup(`${type}.default.color`),
                            fontFamily: lookup(`${type}.default.fontFamily`), // TODO: might need different values for each environment
                            textTransform: lookup(`${type}.default.textTransform`),
                        },
                        [`${type}HighlightText`]: {
                            color: lookup(`${type}.active.color`),
                        },
                        [`${type}DisabledRawText`]: {
                            color: lookup(`${type}.${loading ? "loading" : "disabled"}.color`)
                        },
                        [`${size}Raw`]: {
                            height: lookup(`${size}.height`),
                            paddingLeft: lookup(`${size}.margin.horizontal`),
                            paddingRight: lookup(`${size}.margin.horizontal`),
                        },
                        [`${size}RawText`]: {
                            fontSize: lookup(`${size}.fontSize`),
                            fontWeight: lookup(`${size}.weight`),
                        },
                        container: {
                            flexDirection: "row",
                        },
                        wrapperStyle: {
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: lookup(`${size}.borderRadius`),
                            borderWidth: lookup(`${type}.default.borderWidth`),
                        },
                        indicator: {
                            marginRight: "8px",
                        },
                    }}
                    {...props}
                />
            }
        </WithTheme>
    );
};

const StyledLink = styled(Text)`
    color: ${lookup`$(type).default.color`};
`;

export const Link = ({ loading, ...props }) => (<StyledLink {...props} />);