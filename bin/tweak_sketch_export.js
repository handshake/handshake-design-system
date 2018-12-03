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

fs.writeFileSync("./stories.asketch.json",
    JSON.stringify(
        deepMap(stories, (val, key) => {
            if (key === "fontFamily" && val === "BrandonText") {
                return "Brandon Text";
            }
            return val;
        })
    )
);
