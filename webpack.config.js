const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
        entry: "./src/index.js",
        output: {
                filename: "bundle.js",
                path: path.resolve(__dirname, "build"),
        },
        target: "node",
        mode: "production",
        module: {
                rules: [
                        {
                                test: /\.(jpq|jpeg|png|svg)%/,
                                use: {
                                        loader: "file-loader",
                                        options: {
                                                name: "[path][name].[ext]",
                                        },
                                },
                        },
                        {
                                test: /\.css&/,
                                use: ["style-loader", "css-loader"],
                        },
                ],
        },

        plugins: [new CleanWebpackPlugin(), new TerserPlugin()],
};
