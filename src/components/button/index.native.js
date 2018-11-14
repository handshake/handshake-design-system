import _ from "lodash";
import Button from "./styles.native";
import { FormattedMessage } from "react-intl";
import React, { Component } from "react";
import Text from "antd-mobile-rn/es/text";
import Icon from "../icon/index.native";
import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

// FIXME: icons don't use `active` color; only an issue for `secondary` type

class ButtonWrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = {
        block: true,
        ...defaultProps
    };

    render () {
        const {
            block,
            children,
            disabled,
            icon,
            loading,
            size,
            type,
        } = this.props;
        const content = (
            <WithTheme themes={themes}>
                {({ lkp, lookup }) => (
                    <Button
                        lkp={lkp}
                        {...mapPropsForMobile(this.props)}
                    >
                        {(loading && [
                            <Icon
                                key="icon"
                                color={lookup(`${type}.${disabled ? "disabled" : "default"}.color`)}
                                size={parseInt(lookup(`${size}.${type}.fontSize`))}
                                spin
                                style={{ verticalAlign: "middle" }}
                                type="loading"
                            />,
                            <Text key="gap">&nbsp;&nbsp;</Text>,
                            <FormattedMessage key="text" id={"ds.button.loading"} />,
                        ])
                        || (icon && [
                            <Icon
                                key="icon"
                                color={lookup(
                                    `${type}.${disabled ? "disabled" : "default"}.color`
                                )}
                                size={parseInt(lookup(`${size}.${type}.fontSize`))}
                                style={{ verticalAlign: "middle" }}
                                type={icon}
                            />,
                            <Text key="gap">&nbsp;&nbsp;</Text>,
                            <span key="text">{children}</span>,
                        ])
                        || children}
                    </Button>
                )}
            </WithTheme>
        );
        return (block && type !== "link") ? content : <Text>{content}</Text>;
    }
}

export default ButtonWrapper;
