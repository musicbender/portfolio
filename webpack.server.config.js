const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  target: "node",
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [ nodeExternals() ],
  cache: false,
  resolve: {
    extensions: ['.js', '.json']
  },
  entry: path.join(__dirname, './server/server.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'server/views/', to: 'views', flatten: true },
    ]),
    new BundleAnalyzerPlugin({ analyzerMode: 'disabled' })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          ecma: 6,
          output: {
            comments: false
          }
        }
      })
    ]
  }
};
