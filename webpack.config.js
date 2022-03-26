const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: [
      path.join(__dirname, "src/index.js"),
      path.join(__dirname, "src/index.scss"),
    ],
  },
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "[name].js"
  },
  devServer: {
    static: path.join(__dirname, "src/"),
    open: true,
    hot: true,
    port: 9001
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [ 
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "User Interface Components",
      filename: "index.html",
      template: "index.html"
    }),
    new MiniCssExtractPlugin()
  ]
}