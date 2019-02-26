import _ from "lodash";
import { iconPropTypes } from "../prop_types";
import registry from "../registry";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons/lib/helpers";
import svg2react from "../svg2react";

import iconManifest from "@ant-design/icons/lib/manifest";
import * as ICONS from "@ant-design/icons/lib/index";

function fillPaths (node, color) {
    if (node.tag === "path") {
        node.attrs.fill = color; // eslint-disable-line no-param-reassign
    }
    if (node.children) {
        node.children.forEach(n => fillPaths(n, color));
    }
}

const factory = (displayName, type, icon) => {
    const Icon = ({ fill, size, stroke }) => {
        if (typeof icon.icon === "function") {
            return svg2react(renderIconDefinitionToSVGElement(icon, {
                extraSVGAttrs: { width: size },
                placeholders: {
                    primaryColor: stroke,
                    secondaryColor: fill,
                },
            }), size);
        }
        fillPaths(icon.icon, stroke);
        return svg2react(renderIconDefinitionToSVGElement(icon, {
            extraSVGAttrs: { width: size },
        }), size);
    };
    Icon.displayName = displayName;
    Icon.propTypes = iconPropTypes;
    Icon.iconType = type;
    return Icon;
};

registry.register("ant", _.fromPairs(_.union(
    iconManifest.fill,
    iconManifest.outline,
    iconManifest.twotone,
).map((iconName) => {
    const icons = {};
    const displayName = _.upperFirst(_.camelCase(iconName));
    if (iconManifest.fill.includes(iconName)) {
        const name = `${displayName}Fill`;
        icons.filled = factory(`Ant${name}`, "filled", ICONS[name]);
    }
    if (iconManifest.outline.includes(iconName)) {
        const name = `${displayName}Outline`;
        icons.outlined = factory(`Ant${name}`, "outlined", ICONS[name]);
    }
    if (iconManifest.twotone.includes(iconName)) {
        const name = `${displayName}TwoTone`;
        icons.twoTone = factory(`Ant${name}`, "twoTone", ICONS[name]);
    }
    return [iconName, icons];
})));
