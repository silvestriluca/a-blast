var webpack = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

var minimize = false;
var MINIMIZER = [];
if (process.env.NODE_ENV === 'production') {
  minimize = true;
  MINIMIZER.push(new TerserPlugin());
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'build/build.js'
  },
  optimization: {
    minimize: minimize,
    minimizer: MINIMIZER
  },
  devServer: {
    static:[__dirname],
    allowedHosts: 'auto'
  }
};
