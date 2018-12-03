import Button from "./styles.web";
import { FormattedMessage } from "react-intl";
import propTypes, { defaultProps, mapPropsForWeb } from "./prop_types";
import React, { Component } from "react";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

class ButtonWrapper extends Component {
    static propTypes = propTypes;

    static defaultProps = {
        block: false,
        ...defaultProps,
    };

    render () {
        const {
            children,
            loading,
        } = this.props;

        return (
            <WithTheme themes={themes}>
                {({ lkp }) => (
                    <Button
                        lkp={lkp}
                        {...mapPropsForWeb(this.props)}
                    >
                        {(loading && <FormattedMessage id="ds.button.loading" />)
                        || children}
                    </Button>
                )}
            </WithTheme>
        );
    }
}

export default ButtonWrapper;
