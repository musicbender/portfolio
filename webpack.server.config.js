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
  entry: path.join(__dirname, './src/server/server.js'),
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
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              camelCase: 'dashes',
              localIdentName: '[folder]__[local]___[hash:base64:5]'
            }
          },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/server/views/', to: 'views', flatten: true },
    ])
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
