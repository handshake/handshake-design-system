import _ from "lodash";
import * as ANTD_ICONS from "@ant-design/icons/lib/dist";
import colorPalette from "../../util/antd_color_palette";
import * as FA_ICONS from "react-icons/fa/index";
import * as FI_ICONS from "react-icons/fi/index";
import * as GO_ICONS from "react-icons/go/index";
import * as HS_ICONS from "./icons/index";
import iconManifest from "@ant-design/icons/lib/manifest";
import * as IO_ICONS from "react-icons/io/index";
import * as MD_ICONS from "react-icons/md/index";
import PropTypes from "prop-types";
import React from "react";
import { renderIconDefinitionToSVGElement } from "@ant-design/icons/lib/helpers";
import * as TI_ICONS from "react-icons/ti/index";

const ALL_REACT_ICON_SETS = {
    fa: FA_ICONS,
    fi: FI_ICONS,
    go: GO_ICONS,
    io: IO_ICONS,
    md: MD_ICONS,
    ti: TI_ICONS,
};

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

const AntIconFactory = (icon) => {
    const Wrapper = ({ fill, size, stroke }) => {
        if (typeof icon.icon === "function") {
            return renderIconDefinitionToSVGElement(icon, {
                extraSVGAttrs: { width: size },
                placeholders: {
                    primaryColor: stroke,
                    secondaryColor: fill,
                },
            });
        }
        fillPaths(icon.icon, stroke);
        return renderIconDefinitionToSVGElement(icon, {
            extraSVGAttrs: { width: size },
        });
    };
    Wrapper.propTypes = {
        fill: PropTypes.string,
        size: PropTypes.number,
        stroke: PropTypes.string,
    };
    return Wrapper;
};

const ReactIconFactory = (Icon) => {
    const Wrapper = ({ fill, size, stroke }) => (
        <Icon
            fill={fill}
            size={size}
            stroke={stroke}
        />
    );
    Wrapper.propTypes = {
        fill: PropTypes.string,
        size: PropTypes.number,
        stroke: PropTypes.string,
    };
    return Wrapper;
};

const HSIconFactory = (Icon) => {
    const Wrapper = ({ fill, size, stroke }) => (
        <Icon
            // fill={fill}
            width={size}
            // stroke={stroke}
            style={{ color: stroke }}
        />
    );
    Wrapper.propTypes = {
        fill: PropTypes.string,
        size: PropTypes.number,
        stroke: PropTypes.string,
    };
    return Wrapper;
};

export default function getIcon (props) {
    const {
        iconSet,
        iconName,
        theme,
    } = props;
    switch (iconSet) {
    case "ant":
    case "antd": {
        return AntIconFactory(_.cloneDeep(ANTD_ICONS[`${
            _.upperFirst(_.camelCase(iconName))}${THEME_LOOKUP[theme]}`]));
    }
    case "fa":
    case "fi":
    case "go":
        return ReactIconFactory(ALL_REACT_ICON_SETS[iconSet][_.upperFirst(_.camelCase(
            `${iconSet}-${iconName}`,
        ))]);
    case "io":
    case "md":
    case "ti":
        return ReactIconFactory(ALL_REACT_ICON_SETS[iconSet][_.upperFirst(_.camelCase(
            `${iconSet}-${iconName}-${theme === "outlined" ? "outline" : ""}`,
        ))]);
    case "hs":
    default:
        return HSIconFactory(HS_ICONS[iconName]);
    }
}
