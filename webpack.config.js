const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: "./src/index.js",
  module: {
    rules: [
        {
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },
        {
          test: /\.html$/,
          loader: "html-loader",
          options: {
            minimize: true,
          },
        },
    ]
  },
  output: {
    filename: "cloudUi.js",
  },
  plugins: [
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
};