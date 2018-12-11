import _ from "lodash";
import { iconPropTypes } from "../prop_types";
import React from "react";
import registry from "../registry";

import * as ICONS from "react-icons/md/index";

const factory = (displayName, type, ActualIcon) => {
    const Icon = ({ fill, size, stroke }) => (
        <ActualIcon
            fill={fill}
            size={size}
            stroke={stroke}
        />
    );
    Icon.displayName = displayName;
    Icon.propTypes = iconPropTypes;
    Icon.iconType = type;
    return Icon;
};

registry.register("md", _.fromPairs(
    _.compact(_.map(ICONS, (icon, iconName) => {
        if (/Outline$/.test(iconName)) {
            return null;
        }

        const displayName = iconName.replace(/^Md/, "");

        const icons = {
            filled: factory(`MaterialDesign${displayName}Filled`, "filled", icon),
        };

        if (ICONS[`${iconName}Outline`]) {
            icons.outlined = factory(`MaterialDesign${displayName}Outlined`,
                "outlined", ICONS[`${iconName}Outline`]);
        }

        return [_.kebabCase(displayName), icons];
    })),
), {
    colorMaps: {
        outlined: {
            fill: ["fillColor", "strokeColor", "color"],
        },
    },
});
