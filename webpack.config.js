const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{ 
    main:'./src/pages/pageIndex/script.js',
    Bel: './src/pages/PageLibroBel/bel.js',
    hist:'./src/pages/pageMiabue/miabue.js',
    newl:'./src/pages/pageNewL/scriptLN.js',
    Cond: './src/pages/PageLibroMonte/cond.js',
    Don: './src/pages/PageLibroDON/don.js',
        },
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
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
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
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/pageIndex/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/PageLibroBel/Libro-detalles-BelAmi.html',
      filename: 'Libro-detalles-BelAmi.html',
      chunks: ['Bel'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/PageLibroDON/Libro-detalles-DonJuan.html',
      filename: 'Libro-detalles-DonJuan.html',
      chunks: ['Don'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/PageLibroMonte/Libro-detalles-Montecristo.html',
      filename: 'Libro-detalles-Montecristo.html',
      chunks: ['Cond'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/pageNewL/nuevos-lanzamientos.html',
      filename: 'nuevos-lanzamientos.html',
      chunks: ['newl'],
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/pageMiabue/MiAbuelo.html',
      filename: 'MiAbuelo.html',
      chunks: ['hist'],
    }),

    new MiniCssExtractPlugin(),
  ],
};