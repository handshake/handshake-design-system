require("@babel/register")();
const path = require("path");
const webpack = require("webpack");
// const { StatsWriterPlugin } = require("webpack-stats-plugin");

const { kebabCase: LESS_VARIABLES } = require("../src/theme").theme;

module.exports = (storybookBaseConfig, configType) => {
    storybookBaseConfig.resolve = {
        extensions: [".web.js", ".native.js", ".js", ".json", ".web.jsx", ".native.jsx", ".jsx"],
        alias: {
            "react-native/Libraries/StyleSheet/setNormalizedColorAlpha": "react-native-web/dist/modules/normalizeColor",
            "react-native": "react-native-web",
            "react-native-svg": "react-native-svg-web",
            "@storybook/react-native": "@storybook/react",
        },
    };
    const babelLoaderRule = storybookBaseConfig.module.rules[0];
    babelLoaderRule.exclude =
        /node_modules\/(?!(react-native-camera-roll-picker|react-native-collapsible|react-native-animatable|@ant-design\/react-native\/es|@ant-design\/react-native\/node_modules\/(react-native-collapsible)|@bang88\/react-native-ultimate-listview)\/).*/;
    storybookBaseConfig.module.rules.push(
        {
            enforce: "pre",
            test: /handshake-design-system\/src\/.*(?!\/__tests__\/).+\.js$/,
            use: [{
                loader: "eslint-loader",
            }, {
                loader: "stylelint-custom-processor-loader",
            }],
        },
        {
            test: /\.js$/,
            include: /node_modules\/react-native-menu/,
            use: [
                {
                    loader: "babel-loader",
                    options: {
                        babelrc: false,
                        presets: ["module:metro-react-native-babel-preset"],
                    },
                },
            ],
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: "url-loader",
                },
            ],
        },
        {
            test: /\.less$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader", // @import and url() resolution in css
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: "less-loader", // compile less to css
                    options: {
                        javascriptEnabled: true,
                        modifyVars: LESS_VARIABLES,
                        sourceMap: true,
                    },
                },
            ],
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader", // @import and url() resolution in css
                    options: {
                        sourceMap: true,
                    },
                },
            ],
        },
        {
            test: /\.(otf|woff2?|ttf|eot)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/",
                    },
                },
            ],
        },
        {
            test: /\.svg$/,
            use: [
                "babel-loader",
                {
                    loader: "react-svg-loader",
                    options: {
                        jsx: true, // true outputs JSX tags
                    },
                },
            ],
        },
    );
    storybookBaseConfig.plugins.push(
        new webpack.IgnorePlugin(/\.d\.ts$/),
        new webpack.NormalModuleReplacementPlugin(
            /@ant-design\/react-native\/(es|lib)\/style\/themes\/default\.js/,
            path.resolve(__dirname, "../src/theme/antd_mobile_rn_variables.js"),
        ),
        // uncomment this in order to generate stats (localhost:9001/stats.json)
        // that can be visualized using https://chrisbateman.github.io/webpack-visualizer/
        // recomment it at the end, because it's QUITE slow
        // new StatsWriterPlugin({
        //     fields: null,
        // }),
    );

    return storybookBaseConfig;
};
