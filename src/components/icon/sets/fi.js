import _ from "lodash";
import { iconPropTypes } from "../prop_types";
import React from "react";
import registry from "../registry";

import * as ICONS from "react-icons/fi/index";

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

registry.register("fi", _.fromPairs(
    _.map(ICONS, (icon, iconName) => {
        const displayName = iconName.replace(/^Fi/, "");
        return [_.kebabCase(displayName), {
            outlined: factory(`Feather${displayName}Outlined`, "outlined", icon),
            filled: factory(`Feather${displayName}Filled`, "filled", icon),
            twoTone: factory(`Feather${displayName}TwoTone`, "twoTone", icon),
        }];
    }),
));
