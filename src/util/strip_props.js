import _ from "lodash";
import React from "react";

const stripProps = (Component, ...omitProps) => (
    function PropStripper (props) {
        return <Component {..._.omit(props, omitProps, "lookup")} />;
    }
);

export default stripProps;
