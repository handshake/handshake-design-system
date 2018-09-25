require("@babel/register")();
const path = require("path");
const webpack = require("webpack");

const { __LESS_VARIABLES__ } = require("../src/theme");

module.exports = (storybookBaseConfig, configType) => {
    storybookBaseConfig.resolve = {
        extensions: [".web.js", ".native.js", ".js", ".json", ".web.jsx", ".native.jsx", ".jsx"],
        alias: {
            "react-native/Libraries/StyleSheet/setNormalizedColorAlpha": "react-native-web/dist/modules/normalizeColor",
            "react-native": "react-native-web",
            "@storybook/react-native": "@storybook/react",
        }
    };
    // FIXME: this next bit is very evil;
    // some (specifically react-native-menu) was failing on load due to:
    // > Cannot assign to read only property 'exports' of object '#<Object>'
    // I couldn't find an immediately solution, and I needed to demo this, so, I'm stubbing out these
    // dependencies of dependencies that were not actually using YET. A real solution is still needed.
    storybookBaseConfig.externals = {
        "react-native-camera-roll-picker": "{}",
        "react-native-collapsible": "{}",
        "react-native-menu": "{}",
    };
    const babelLoaderRule = storybookBaseConfig.module.rules[0];
    babelLoaderRule.exclude =
        /node_modules\/(?!(react-native-camera-roll-picker|react-native-collapsible|react-native-menu)\/).*/;
    storybookBaseConfig.module.rules.push(
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
                        modifyVars: __LESS_VARIABLES__,
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
        }
    );
    storybookBaseConfig.plugins.push(
        new webpack.IgnorePlugin(/\.d\.ts$/),
        new webpack.DefinePlugin({
            "process.env.PLATFORM": `"${process.env.PLATFORM || "web"}"`,
        }),
        new webpack.NormalModuleReplacementPlugin(
            /antd-mobile-rn\/(es|lib)\/style\/themes\/default\.native\.js/,
            path.resolve(__dirname, "../src/theme/antd_mobile_rn_variables.js")
        ),
    );

    return storybookBaseConfig;
};
