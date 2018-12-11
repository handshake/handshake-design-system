import _ from "lodash";
import { iconPropTypes } from "../prop_types";
import React from "react";
import registry from "../registry";

import * as ICONS from "react-icons/fa/index";

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

registry.register("fa", _.fromPairs(
    _.map(ICONS, (icon, iconName) => {
        const displayName = iconName.replace(/^Fa/, "");
        return [_.kebabCase(displayName), {
            filled: factory(`FontAwesome${displayName}Filled`, "filled", icon),
        }];
    }),
));
