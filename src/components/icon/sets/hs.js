import _ from "lodash";
import { iconPropTypes } from "../prop_types";
import React from "react";
import registry from "../registry";

import loading from "./hs_icons/loading.svg"; // copied from Ant
import logo from "./hs_icons/handshake-logo.svg";

const ICONS = {
    loading: { outlined: loading },
    logo: { outlined: logo },
};

const factory = (displayName, type, SvgIcon) => {
    const Icon = ({ size, stroke }) => (
        <SvgIcon
            width={size}
            style={{ color: stroke }}
        />
    );
    Icon.displayName = displayName;
    Icon.propTypes = iconPropTypes;
    Icon.iconType = type;
    return Icon;
};

registry.register("hs", _.mapValues(ICONS, (icons, name) => _.mapValues(icons, (icon, type) => (
    factory(`Handshake${_.upperFirst(_.camelCase(name))}${_.upperFirst(type)}`, type, icon))),
), {
    aliases: _.mapValues(ICONS, (__, iconName) => `hs-${iconName}`),
    colorMaps: {
        outlined: {
            fill: ["fillColor", "strokeColor", "color"],
        },
    },
});
