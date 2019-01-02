#!/usr/bin/env node
require("@babel/register")();
const _ = require("lodash");
const fs = require("fs");
const antdRnVariables = require("@ant-design/react-native/lib/style/themes/default");
const extract = require("../src/theme/extract_less_variables").default;

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
