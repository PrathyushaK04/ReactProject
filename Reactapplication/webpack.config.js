const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
      test: /(\.css|\.scss)$/,
      exclude: [path.resolve(__dirname, "node_modules")], 
      use: ExtractTextPlugin.extract({
        use: [
          {
            loader: "css-loader",
            options: {sourceMap: true}
          }, {
            loader: "postcss-loader",
            options: {sourceMap: true, plugins: () => [autoprefixer]}
          }, {
            loader: "sass-loader",
            options: {sourceMap: true}
          }
        ]
      })
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin("[name].css")
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  }
};