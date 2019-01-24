import propTypes, { defaultProps } from "./prop_types";
import React, { Component } from "react";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

import StyledSpinner, { SpinnerCard, Toast, Toaster } from "./styles.web";

export default class Spinner extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render () {
        const {
            className,
            block,
            enabled = true,
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
                {({ lookup }) => (
                    (toast && (
                        <Toaster>
                            <Toast>
                                <StyledSpinner
                                    className={className}
                                    lookup={lookup}
                                    size={size || "large"}
                                    style={style}
                                    tip={text}
                                />
                            </Toast>
                        </Toaster>
                    ))
                    || (block && (
                        <SpinnerCard>
                            <StyledSpinner
                                className={className}
                                lookup={lookup}
                                size={size || "large"}
                                style={style}
                                tip={text}
                            />
                        </SpinnerCard>
                    ))
                    || (
                        <StyledSpinner
                            className={className}
                            lookup={lookup}
                            size={size || "small"}
                            style={style}
                            tip={text}
                        />
                    )
                )}
            </WithTheme>
        );
    }
}
