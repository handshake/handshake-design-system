import _ from "lodash";
import * as ANTD_ICONS from "@ant-design/icons/lib/dist";
import colorPalette from "../../util/antd_color_palette";
import * as HS_ICONS from "./icons/index";
import iconManifest from "@ant-design/icons/lib/manifest";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons/lib/helpers";

const THEME_LOOKUP = {
    filled: "Fill",
    outlined: "Outline",
    twoTone: "TwoTone",
};

function fillPaths (node, color) {
    if (node.tag === "path") {
        node.attrs.fill = color; // eslint-disable-line no-param-reassign
    }
    if (node.children) {
        node.children.forEach(n => fillPaths(n, color));
    }
}

export function fallbackAntTheme (theme, type) {
    if (theme === "twoTone" && iconManifest.fill.includes(type)) {
        console.warn("There is no TwoTone Icon for %s, defaulting to Filled", type);
        return "filled";
    }
    if (theme === "twoTone" && iconManifest.outline.includes(type)) {
        console.warn("There is no TwoTone Icon for %s, defaulting to Outlined", type);
        return "outline";
    }
    if (theme === "filled" && iconManifest.outline.includes(type)) {
        console.warn("There is no Filled Icon for %s, defaulting to Outlined", type);
        return "outlined";
    }
    if (theme === "outlined" && iconManifest.fill.includes(type)) {
        console.warn("There is no Outlined Icon for %s, defaulting to Filled", type);
        return "filled";
    }
    console.error("There is no Icon for %s", type);
    return false;
}

export default function getIcon (props) {
    const { color, type } = props;
    let { theme } = props;
    const prefix = type.split("-")[0];
    let unprefixedType = type.replace(/^\w+-/, "");
    switch (prefix) {
    case "ant":
    case "antd": {
        const manifestType = (() => ({
            filled: "fill",
            outlined: "outline",
            twoTone: "twotone",
        }[theme]))();
        if (!iconManifest[manifestType].includes(unprefixedType)) {
            theme = fallbackAntTheme(theme, unprefixedType);
        }
        const iconName = `${
            _.upperFirst(_.camelCase(unprefixedType))}${THEME_LOOKUP[theme]}`;
        const icon = _.cloneDeep(ANTD_ICONS[iconName]);

        let content;
        if (typeof icon.icon === "function") {
            content = renderIconDefinitionToSVGElement(icon, {
                placeholders: {
                    primaryColor: color,
                    secondaryColor: colorPalette(color, 0),
                },
            });
        } else {
            fillPaths(icon.icon, color);
            content = renderIconDefinitionToSVGElement(icon);
        }
        return content;
    }
    case "hs":
    default:
        if (prefix !== "hs") {
            unprefixedType = type;
        }
        return HS_ICONS[unprefixedType];
    }
}
