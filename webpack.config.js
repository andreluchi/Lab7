const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/pages/pageIndex/script.js',
  output: {
    path: path.resolve(__dirname, 'dist_webpack_babel'),
    filename: 'my-first-webpack.bundle.js',
  },
  plugins:[new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: './src/pages/pageIndex/index.html',
    filename: 'index.html',
    chunks: ['index']
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
};