const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CommonConfig = require("./webpack.config.common");

const DevConfig = {
  mode: "development",
  devtool: "inline-source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html")
    })
  ]
};

module.exports = merge(CommonConfig, DevConfig);