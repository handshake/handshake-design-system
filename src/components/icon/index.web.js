import _ from "lodash";
import { getStandardProps } from "../../util/props";
import propTypes, { defaultProps, mapProps } from "./prop_types";
import React, { Component } from "react";
import StyledIcon from "./styles.web";

import "./sets/hs";

class Icon extends Component {
    static propTypes = propTypes;

    static defaultProps = {
        color: "currentColor",
        ...defaultProps,
    };

    render () {
        const {
            colors,
            icon: ActualIcon,
            size,
            ...otherProps
        } = mapProps(this.props);
        const props = {
            ...otherProps,
            ...getStandardProps(this.props, ["children"]),
        };
        
        return (
            <StyledIcon
                size={size}
                {...props}
            >
                <ActualIcon
                    size={size}
                    {...colors}
                />
            </StyledIcon>
        );
    }
}

export default Icon;
