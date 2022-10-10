const { resolve } = require("path");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/App.js",
  output: {
    path:path-resolve(__dirname, "./src"),
    filename: "App.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
      },
      {test: /\html$/,loader: "html"},
      {test: /\css$/,loader: "style!css"},
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ],
devTool: "source-map",
};