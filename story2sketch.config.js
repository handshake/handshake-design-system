require("@babel/register")();
module.exports = {
    logo: "small",
    output: "stories.asketch.json",
    url: "http://localhost:9001/iframe.html",
    concurrency: 1,
    viewports: {
        standard: {
            width: 1920,
            height: 1200,
            symbolPrefix: "",
        },
    },
    pageTitle: "Handshake Design System",
    stories: [
        {
            kind: "Web/Button/💎",
            // stories: [{ name: require("./src/components/button/sketch_stories").default[0] }],
            stories: require("./src/components/button/sketch_stories").default
                .map(name => ({ name })),
        },
    ],
};
