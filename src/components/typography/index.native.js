import propTypes, { defaultProps } from "./prop_types";
import React, { Component } from "react";
import StyledText from "./styles.native";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

class TextWrapper extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render () {
        const { children } = this.props;
        return (
            <WithTheme themes={themes}>
                {({ lkp }) => (
                    <StyledText
                        lkp={lkp}
                        {...this.props}
                    >
                        { children }
                    </StyledText>
                )}
            </WithTheme>
        );
    }
}

export default TextWrapper;
