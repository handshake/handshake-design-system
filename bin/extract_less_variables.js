#!/usr/bin/env node
require("@babel/register")();
const fs = require("fs");
const _ = require("lodash");
const extract = require("../src/theme/extract_less_variables").default;
const antdRnVariables = require("antd-mobile-rn/lib/style/themes/default.native");

const extractToFile = (from, to) => 
    extract(from)
        .then(theme => fs.writeFileSync(to, JSON.stringify(
            _.extend(
                {
                    $comment: "Do not modify this file. It is generated on startup.",
                },
                theme,
            ), null, 4)))
        .catch(console.error); // eslint-disable-line no-console

extractToFile(
    "./node_modules/antd/es/style/themes/default.less",
    "./src/theme/antd_less_variables.json"
);

extractToFile(
    "./node_modules/antd-mobile/es/style/themes/default.less",
    "./src/theme/antd_mobile_less_variables.json"
);

fs.writeFileSync("./src/theme/antd_mobile_rn_variables.json",
    JSON.stringify(
        _.extend(
            {
                $comment: "Do not modify this file. It is generated on startup.",
            },
            antdRnVariables
        )
    , null, 4)
);
