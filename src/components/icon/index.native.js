import _ from "lodash";
import { Text as AnimatableText } from "react-native-animatable";
import * as ANTD_ICONS from "@ant-design/icons/lib/dist";
import colorPalette from "../../util/antd_color_palette";
import propTypes, { ALL_TYPES, defaultProps, mapPropsForMobile } from "./prop_types";
import React, { Component } from "react";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons/lib/helpers";
import rnSvgParser from "@target-corp/react-native-svg-parser";
import Text from "antd-mobile-rn/es/text";

// TODO: similar to antd (web) provide a mechanism to register additional icons

const THEME_VARIABLES = false;

function fillPaths (node, color) {
    if (node.tag === "path") {
        node.attrs.fill = color; // eslint-disable-line no-param-reassign
    }
    if (node.children) {
        node.children.forEach(n => fillPaths(n, color));
    }
}

const THEME_LOOKUP = {
    filled: "Fill",
    outlined: "Outline",
    twoTone: "TwoTone",
};

class IconWrapper extends Component {
    static propTypes = propTypes;

    static defaultProps = defaultProps;

    static THEME_VARIABLES = THEME_VARIABLES;

    static ALL_TYPES = ALL_TYPES;

    render () {
        const {
            color,
            pxSize,
            spin,
            style,
            theme,
            type,
        } = mapPropsForMobile(this.props);

        if (!type) {
            return null;
        }

        const iconName = `${_.upperFirst(_.camelCase(type))}${THEME_LOOKUP[theme]}`;
        const icon = _.cloneDeep(ANTD_ICONS[iconName]);

        let content;
        if (typeof icon.icon === "function") {
            content = rnSvgParser(renderIconDefinitionToSVGElement(icon, {
                placeholders: {
                    primaryColor: color,
                    secondaryColor: colorPalette(color, 0),
                },
            }), "", { height: pxSize, width: pxSize });
        } else {
            fillPaths(icon.icon, color);
            content = rnSvgParser(renderIconDefinitionToSVGElement(icon), "", { height: pxSize, width: pxSize });
        }

        if (spin) {
            return (
                <AnimatableText
                    animation="rotate"
                    easing="linear"
                    iterationCount="infinite"
                    style={{ width: pxSize, display: "inline-block", ...style }} // display bit is a hack for web preview only
                >
                    {content}
                </AnimatableText>
            );
        }
        return <Text style={style}>{content}</Text>;
    }
}

export default IconWrapper;
