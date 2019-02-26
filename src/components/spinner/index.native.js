import { getStandardProps } from "../../util/props";
import React, { Component } from "react";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import StyledSpinner, { SpinnerBox, SpinnerFrame } from "./styles.native";

export default class Spinner extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render () {
        const {
            enabled = true,
            block,
            toast,
        } = this.props;
        const props = {
            ...mapPropsForMobile(this.props),
            ...getStandardProps(this.props, ["children"]),
        };

        if (!enabled) {
            return null;
        }

        return (
            <WithTheme themes={themes}>
                {({ lookup }) => ((block && !toast)
                    ? (
                        <SpinnerFrame>
                            <SpinnerBox>
                                <StyledSpinner
                                    lookup={lookup}
                                    {...props}
                                />
                            </SpinnerBox>
                        </SpinnerFrame>
                    )
                    : (
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
