import React from "react";

export default function (svg) {
    return (
        <i
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: svg,
            }}
        />
    );
}
