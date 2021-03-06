var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

module.exports = function() {

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: './public'
  }).listen(8080, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log('Listening at http://localhost:8080/', result);
  });
}
