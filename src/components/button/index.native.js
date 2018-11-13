import _ from "lodash";
import { Button, Link } from "./styles.native";
import { FormattedMessage } from "react-intl";
import React, { Component } from "react";
import Text from "antd-mobile-rn/es/text";
import Icon from "../icon/index.native";
import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

// TODO: `link` type && icons don't use `active` color

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
        const ButtonOrLink = (type === "link" ? Link : Button);
        const content = (
            <WithTheme themes={themes}>
                {({ lkp, lookup }) => (
                    <ButtonOrLink
                        lkp={lkp}
                        {...mapPropsForMobile(this.props)}
                    >
                        {(type === "link" && loading && [
                            <Icon
                                key="icon"
                                color={lookup(
                                    `${type}.${disabled ? "disabled" : "default"}.color`
                                )}
                                size={parseInt(lookup(`${size}.fontSize`))}
                                spin
                                type="loading"
                            />,
                            <Text key="gap">&nbsp;&nbsp;</Text>,
                            <FormattedMessage key="text" id={"ds.button.loading"} />,
                        ])
                        || (loading && <FormattedMessage id={"ds.button.loading"} />)
                        || (icon && [
                            <Icon
                                key="icon"
                                color={lookup(
                                    `${type}.${disabled ? "disabled" : "default"}.color`
                                )}
                                size={parseInt(lookup(`${size}.fontSize`))}
                                type={icon}
                            />,
                            <Text key="gap">&nbsp;&nbsp;</Text>,
                            <span key="text">{children}</span>,
                        ])
                        || children}
                    </ButtonOrLink>
                )}
            </WithTheme>
        );
        return block ? content : <Text>{content}</Text>;
    }
}

export default ButtonWrapper;
