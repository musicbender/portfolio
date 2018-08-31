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
    alias: {
	     "~": path.join(__dirname, './client'),
	  },
    extensions: ['.js', '.json']
  },
  entry: path.join(__dirname, './server/server.js'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'server.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: 'css-loader/locals?modules&loacalIdentName=[name]--[local]--[hash:base64:5]!sass-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'LIVE': process.env.LIVE,
        'PORT': process.env.PORT,
      }
    }),
    new CopyWebpackPlugin([
      { from: 'server/views/', to: 'views', flatten: true },
      { from: 'server/temp/', to: 'temp', flatten: true }
    ])
  ],
  optimization: {
    minimizer: {
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: true,
          ecma: 6,
          output: {
            comments: false
          }
        }
      }),
    }
  }
};
