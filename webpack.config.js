const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
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
        test: /\.(css|scss)$/,
        use: [ 
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                sourceMap: true,
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "User Interface Components",
      filename: "index.html",
      template: "index.html"
    }),
    // new StyleLintPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
  ]
}