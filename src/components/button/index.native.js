import _ from "lodash";
import { FormattedMessage } from "react-intl";
import { getStandardProps } from "../../util/props";
import Icon from "../icon/index.native";
import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import React, { Component } from "react";
import StyledButton from "./styles.native";
import Text from "@ant-design/react-native/lib/text";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

// FIXME: icons don't use `active` color; only an issue for `secondary` type

class Button extends Component {
    static propTypes = propTypes;

    static defaultProps = {
        block: true,
        ...defaultProps,
    };

    render () {
        const {
            block,
            children,
            disabled,
            icon,
            iconType,
            loading,
            loadingText,
            size,
            type,
        } = this.props;
        const props = {
            ...mapPropsForMobile(this.props),
            ...getStandardProps(this.props, ["children"]),
        };

        const content = (
            <WithTheme themes={themes}>
                {({ lookup }) => (
                    <StyledButton
                        lookup={lookup}
                        {...props}
                    >
                        {(loading && [
                            <Icon
                                key="icon"
                                color={lookup(`${type}.loading.color`)}
                                size={parseInt(lookup(`${size}.${type}.fontSize`))}
                                spin
                                style={{ verticalAlign: "middle" }}
                                icon="loading"
                            />,
                            <Text key="gap">&nbsp;&nbsp;</Text>,
                            loadingText
                                ? <span key="text">{loadingText}</span>
                                : children,
                        ])
                        || (icon && [
                            <Icon
                                key="icon"
                                color={lookup(
                                    `${type}.${disabled ? "disabled" : "default"}.color`,
                                )}
                                size={parseInt(lookup(`${size}.${type}.fontSize`))}
                                style={{ verticalAlign: "middle" }}
                                icon={icon}
                                type={iconType}
                            />,
                            <Text key="gap">&nbsp;&nbsp;</Text>,
                            <span key="text">{children}</span>,
                        ])
                        || children}
                    </StyledButton>
                )}
            </WithTheme>
        );
        return (block && type !== "link") ? content : <Text>{content}</Text>;
    }
}

export default Button;
