var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemaps',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'public', 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules')
      },
      { test: /\.scss$/, loaders: ["style", "css", "sass"] },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.png|svg|jpg$/, loader: 'url-loader?limit=1024' },
      { test: /\.(otf|eot|ttf|woff|woff2)$/, loader: 'file' }
    ]
  },
};
