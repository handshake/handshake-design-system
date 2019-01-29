import _ from "lodash";
import { Text as AnimatableText } from "react-native-animatable";
import propTypes, { defaultProps, mapProps } from "./prop_types";
import React, { Component } from "react";
import Text from "@ant-design/react-native/lib/text";

import "./sets/hs";

const THEME_VARIABLES = false;

class Icon extends Component {
    static propTypes = propTypes;

    static defaultProps = {
        color: "#000",
        ...defaultProps,
    };

    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        const {
            colors,
            flip,
            icon: ActualIcon,
            rotate,
            size,
            spin,
            style,
        } = mapProps(this.props);
        const transform = [];
        if (flip) {
            transform.push(
                (flip === "horizontal" && { scaleX: -1 })
                || (flip === "vertical" && { scaleY: -1 }),
            );
        }
        if (rotate) {
            transform.push({ rotate: `${rotate}deg` });
        }
        if (transform.length) {
            style.transform = transform;
        }
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
                    // display bit is a hack for web preview only
                    style={{ width: size, display: "inline-block", ...style }}
                >
                    {content}
                </AnimatableText>
            );
        }
        return <Text style={{ width: size, ...style }}>{content}</Text>;
    }
}

export default Icon;
