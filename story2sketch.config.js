require("@babel/register")();

const _ = require("lodash");
const glob = require("glob");

const COMPONENT_NAME_RE = /^\.\/src\/components\/([\w-]+)\/sketch_stories.js/;

module.exports = {
    logo: "small",
    // input: "storybook-static/iframe.html", // kinda broken :(
    output: "stories.asketch.json",
    url: "http://localhost:9001/iframe.html",
    // concurrency: 4,
    viewports: {
        standard: {
            width: 1920,
            height: 1200,
            symbolPrefix: "",
        },
    },
    pageTitle: "Handshake Design System",
    stories: _.flatten(glob.sync("./src/components/*/sketch_stories.js")
        .filter(path => path.match(COMPONENT_NAME_RE)[1] !== "__template__")
        .map(path => (
            require(path).envs || ["Web", "Mobile"]).map(env => ({
                kind: `${env}/${_.upperFirst(_.camelCase(path.match(COMPONENT_NAME_RE)[1]))}/💎`,
                stories: require(path).default.map(name => ({ name })),
            }),
        )),
    ),
};
