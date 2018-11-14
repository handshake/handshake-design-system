#!/usr/bin/env node
const _ = require("lodash");
const fs = require("fs");
const stories = require("../stories.asketch.json");

function deepMap (obj, iterator, context) {
    return _.transform(obj, function(result, val, key) {
        result[key] = _.isObject(val)
            ? deepMap(val, iterator, context)
            : iterator.call(context, val, key, obj);
    });
}

// The purpose of this file is to correct some rounding issues that are output
// from story2sketch; in particular widths need to be rounded up to avoid silly
// situations like a button that looks like:
//    +----------+
//    |  Primar  |
//    |  y       |
//    +----------+
// instead of:
//    +-----------+
//    |  Primary  |
//    +-----------+

fs.writeFileSync("./stories.asketch.json",
    JSON.stringify(
        deepMap(stories, (val, key) => (key === "width" || key === "height")
            ? Math.ceil(val)
            : val
        ),
        null, 4
    )
);