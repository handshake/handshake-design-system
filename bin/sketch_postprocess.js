#!/usr/bin/env node

const _ = require("lodash");
const fs = require("fs");
const original = require("../stories.asketch.json");

const NAME_SPLITTER = "/💎/";
const COLUMN_GUTTER = 200;
const DESIGN_SYSTEM_NAME = "Handshake Design System";

function deepMap (obj, iterator, context) {
    return _.transform(obj, (result, val, key) => {
        // eslint-disable-next-line no-param-reassign
        result[key] = _.isObject(val)
            ? deepMap(val, iterator, context)
            : iterator.call(context, val, key, obj);
    });
}

// eslint-disable-next-line
const uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>((a^require("crypto").randomBytes(1)[0]*16>>a/4).toString(16))[0])

// Step 1: Pull out the Symbols and get a blank page we can make copies of
const symbols = original.layers;
const blankPage = original;
blankPage.layers = [];

// Step 2: Separate the Symbols into distinct sets
const symbolSets = {};
symbols.forEach((s) => {
    const setName = s.name.split(NAME_SPLITTER)[0];
    if (!symbolSets[setName]) {
        symbolSets[setName] = [];
    }
    symbolSets[setName].push(s);
});

Object.keys(symbolSets).forEach((setName) => {
    // Step 3: Make a new page for each set
    const page = _.cloneDeep(blankPage);
    page.do_objectID = uuid();
    page.name = `${DESIGN_SYSTEM_NAME}: ${setName}`;
    page.layers = symbolSets[setName];

    // Step 4: Split the Symbols into groups based on their type (first token of name)
    const groups = {};
    page.layers.forEach((s) => {
        const type = s.name.split(NAME_SPLITTER)[1].split(/\b/)[0];
        if (!groups[type]) {
            groups[type] = [];
        }
        groups[type].push(s);
    });

    // Step 5: Render each set of Symbols in a column
    let offset = 0;
    const rowYs = [];
    Object.keys(groups).forEach((type) => {
        let minY = Infinity;
        let maxWidth = 0;
        groups[type].forEach((s, i) => {
            rowYs[i] = Math.max(0, s.frame.y);
            minY = Math.min(minY, s.frame.y);
        });
        groups[type].forEach((s) => {
            s.frame.x += offset; // eslint-disable-line no-param-reassign
            s.frame.y -= minY; // eslint-disable-line no-param-reassign
            maxWidth = Math.max(maxWidth, s.frame.width);
        });
        offset += maxWidth + COLUMN_GUTTER;
    });

    // Step 5b: align symbols into rows
    Object.keys(groups).forEach(type => groups[type].forEach((s, i) => {
        s.frame.y = rowYs[i]; // eslint-disable-line no-param-reassign
    }));

    // Step 6: Write each page to a separate file
    fs.writeFileSync(`./${setName.replace("/", "-")}.asketch.json`,
        JSON.stringify(
            deepMap(page, (val, key) => {
                if (key === "fontFamily" && val === "BrandonText") {
                    return "Brandon Text";
                }
                return val;
            }),
        ),
    );
});
