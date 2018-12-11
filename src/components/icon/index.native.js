import _ from "lodash";
import { Text as AnimatableText } from "react-native-animatable";
import propTypes, { defaultProps, mapProps } from "./prop_types";
import React, { Component } from "react";
import Text from "antd-mobile-rn/es/text";

import "./sets/hs";

const THEME_VARIABLES = false;

class Icon extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        const {
            colors,
            icon: ActualIcon,
            size,
            spin,
            style,
        } = mapProps(this.props);
        const content = (
            <ActualIcon
                size={size}
                {...colors}
            />
        );

        if (spin) {
            return (
                <AnimatableText
                    animation="rotate"
                    easing="linear"
                    iterationCount="infinite"
                    style={{ width: size, display: "inline-block", ...style }} // display bit is a hack for web preview only
                >
                    {content}
                </AnimatableText>
            );
        }
        return <Text style={style}>{content}</Text>;
    }
}

export default Icon;
