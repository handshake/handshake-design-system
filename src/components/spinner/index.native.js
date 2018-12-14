import React, { Component } from "react";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

import propTypes, { defaultProps } from "./prop_types";
import StyledSpinner, { SpinnerBox, SpinnerFrame } from "./styles.native";

export default class Spinner extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render () {
        const {
            enabled = true,
            block,
            size,
            style,
            text,
            toast,
        } = this.props;

        if (!enabled) {
            return null;
        }

        return (
            <WithTheme themes={themes}>
                {({ lkp }) => ((block && !toast)
                    ? (
                        <SpinnerFrame>
                            <SpinnerBox>
                                <StyledSpinner
                                    lkp={lkp}
                                    size={size || "large"}
                                    style={style}
                                    text={text}
                                />
                            </SpinnerBox>
                        </SpinnerFrame>
                    )
                    : (
                        <StyledSpinner
                            lkp={lkp}
                            size={size || "small"}
                            style={style}
                            text={text}
                            toast={toast}
                        />
                    )
                )}
            </WithTheme>
        );
    }
}
