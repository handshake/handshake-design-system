import _ from "lodash";
import __TEMPLATE__ from "./styles.native";
import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import React, { Component } from "react";
import themes from "./themes.json";
import WithTheme from "../design-context/theme-provider/with_theme";

// eslint-disable-next-line camelcase
class __TEMPLATE__Wrapper extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    render () {
        return (
            <WithTheme themes={themes}>
                {({ lkp }) => (
                    // eslint-disable-next-line react/jsx-pascal-case
                    <__TEMPLATE__
                        lkp={lkp}
                        {...mapPropsForMobile(this.props)}
                    />
                )}
            </WithTheme>
        );
    }
}

// eslint-disable-next-line camelcase
export default __TEMPLATE__Wrapper;
