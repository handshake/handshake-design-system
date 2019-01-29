import { getStandardProps } from "../../util/props";
import propTypes, { defaultProps, mapPropsForWeb } from "./prop_types";
import React, { Component } from "react";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

import StyledSpinner, { SpinnerCard, Toast, Toaster } from "./styles.web";

export default class Spinner extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render () {
        const {
            block,
            enabled = true,
            toast,
        } = this.props;
        const props = {
            ...mapPropsForWeb(this.props),
            ...getStandardProps(this.props, ["children"]),
        };

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
                                    lookup={lookup}
                                    {...props}
                                />
                            </Toast>
                        </Toaster>
                    ))
                    || (block && (
                        <SpinnerCard>
                            <StyledSpinner
                                lookup={lookup}
                                {...props}
                            />
                        </SpinnerCard>
                    ))
                    || (
                        <StyledSpinner
                            lookup={lookup}
                            {...props}
                        />
                    )
                )}
            </WithTheme>
        );
    }
}
