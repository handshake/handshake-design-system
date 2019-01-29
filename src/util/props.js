import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

// Standard props:
// on* - event listeners
// as - styled-components prop that allows changing the underlying tag
// children - standard react prop for child node(s)
// className - standard react-dom prop for html `class`
// style = standard react prop for inline styling

const STANDARD_PROPS_RE = /^(on[A-Z]\w+|as|children|className|style)$/;

export const stripProps = (Component, ...omitProps) => (
    function PropStripper (props) {
        return <Component {..._.omit(props, omitProps, "lookup")} />;
    }
);

export function getStandardProps (props, except = [], extra = []) {
    return _.pickBy(
        props,
        (__, key) => (
            (STANDARD_PROPS_RE.test(key) && !except.includes(key))
            || extra.includes(key)
        ),
    );
}

export const STANDARD_PROPS = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};

export const STANDARD_LEAF_PROPS = {
    className: PropTypes.string,
    style: PropTypes.object,
};
