import { FormattedMessage } from "react-intl";
import { getStandardProps } from "../../util/props";
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
            iconPlacement,
            iconType,
            loading,
            loadingText,
            size,
            type,
        } = this.props;
        let { children, icon } = this.props;
        const props = {
            ...mapPropsForWeb(this.props),
            ...getStandardProps(this.props, ["children"]),
        };

        if (loading) {
            icon = "loading";
            children = loadingText
                ? <span key="text">{loadingText}</span>
                : children;
        }

        return (
            <WithTheme themes={themes}>
                {({ lookup }) => (
                    <StyledButton
                        lookup={lookup}
                        {...props}
                    >
                        {(icon && iconPlacement === "left" && [
                            <Icon
                                key="icon"
                                size={parseInt(lookup(`${size}.${type}.fontSize`))}
                                icon={icon}
                                type={iconType}
                            />,
                            <span key="gap">&nbsp;&nbsp;</span>,
                            <span key="text">{children}</span>,
                        ])
                        || (icon && iconPlacement === "right" && [
                            <span key="text">{children}</span>,
                            <span key="gap">&nbsp;&nbsp;</span>,
                            <Icon
                                key="icon"
                                size={parseInt(lookup(`${size}.${type}.fontSize`))}
                                icon={icon}
                                type={iconType}
                            />,
                        ])
                        || children}
                    </StyledButton>
                )}
            </WithTheme>
        );
    }
}

export default Button;
