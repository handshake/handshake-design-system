import { Button, Link } from "./styles.web";
import { FormattedMessage } from "react-intl";
import Icon from "../icon";
import propTypes, { defaultProps, mapPropsForWeb } from "./prop_types";
import React, { Component } from "react";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

class ButtonWrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = {
        block: false,
        webHtmlType: "button",
        ...defaultProps
    };

    render () {
        const { children, icon, loading, type } = this.props;
        const ButtonOrLink = (type === "link" ? Link : Button);
        return (
            <WithTheme themes={themes}>
                {({ lkp }) => (
                    <ButtonOrLink
                        lkp={lkp}
                        {...mapPropsForWeb(this.props)}
                    >
                        {(type === "link" && loading && [
                            <Icon key="icon" type="loading" />,
                            <FormattedMessage key="text" id={"ds.button.loading"} />,
                        ])
                        || (loading && <FormattedMessage id={"ds.button.loading"} />)
                        || (type === "link" && icon && [
                            <Icon key="icon" type={icon} />,
                            <span key="text">{children}</span>,
                        ])
                        || children}
                    </ButtonOrLink>
                )}
            </WithTheme>
        );
    }
}

export default ButtonWrapper;
