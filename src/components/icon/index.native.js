import _ from "lodash";
import * as ANTD_ICONS from "@ant-design/icons/lib/dist";
import React, { Component } from "react";
import propTypes, { defaultProps, mapPropsForMobile } from "./prop_types";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons/lib/helpers";
import rnSvgParser from "@target-corp/react-native-svg-parser";
import { ThemeSubscriber } from "../design-context/theme-provider";
import colorPalette from "../../util/antd_color_palette";

// TODO: similar to antd (web) provide a mechanism to register additional icons

const THEME_VARIABLES = false;

function fillPaths (node, color) {
    if (node.tag === "path") {
        node.attrs.fill = color;
    }
    if (node.children) {
        node.children.forEach(n => fillPaths(n, color));
    }
}

const THEME_LOOKUP = {
    filled: "Fill",
    outlined: "Outline",
    twoTone: "TwoTone",
}

class IconWrapper extends Component {
    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static THEME_VARIABLES = THEME_VARIABLES;

    render () {
        let { color, pxSize, theme, type } = mapPropsForMobile(this.props);

        if (!type) {
            return null;
        }

        let iconName = `${_.upperFirst(_.camelCase(type))}${THEME_LOOKUP[theme]}`;
        const icon = _.cloneDeep(ANTD_ICONS[iconName]);

        if (typeof icon.icon === "function") {
            return rnSvgParser(renderIconDefinitionToSVGElement(icon, { placeholders: {
                primaryColor: color, 
                secondaryColor: colorPalette(color, 0),
            }}), "", { height: pxSize, width: pxSize });
        }
        fillPaths(icon.icon, color);
        return rnSvgParser(renderIconDefinitionToSVGElement(icon), "", { height: pxSize, width: pxSize });
    }
}

export default IconWrapper;
