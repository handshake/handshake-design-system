import { FormattedMessage } from "react-intl";
import Icon from "../icon";
import propTypes, { defaultProps, mapPropsForWeb } from "./prop_types";
import React, { Component } from "react";
import StyledButton from "./styles.web";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

class Button extends Component {
    static propTypes = propTypes;

    static defaultProps = {
        block: false,
        ...defaultProps,
    };

    render () {
        const {
            children,
            disabled,
            icon,
            loading,
            size,
            type,
        } = this.props;

        return (
            <WithTheme themes={themes}>
                {({ lkp, lookup }) => (
                    <StyledButton
                        lkp={lkp}
                        {...mapPropsForWeb(this.props)}
                    >
                        {(loading && [
                            <Icon
                                key="icon"
                                color={lookup(`${type}.${disabled ? "disabled" : "default"}.color`)}
                                size={parseInt(lookup(`${size}.${type}.fontSize`))}
                                spin
                                style={{ verticalAlign: "middle" }}
                                icon="loading"
                            />,
                            <span key="gap">&nbsp;&nbsp;</span>,
                            <FormattedMessage key="text" id="ds.button.loading" />,
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
                            />,
                            <span key="gap">&nbsp;&nbsp;</span>,
                            <span key="text">{children}</span>,
                        ])
                        || children}
                    </StyledButton>
                )}
            </WithTheme>
        );
    }
}

export default Button;
