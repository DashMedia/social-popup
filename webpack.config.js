const webpack = require('webpack');
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: './src/social-popup.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'social-popup.js',
    library: 'SocialPopup',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      // exclude: [/node_modules/],
      options: {
        presets: ['es2015']
      }
    }],
  },
  plugins: [
    new MinifyPlugin(),
  ]
}
