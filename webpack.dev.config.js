const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PORT = require('./server/config').PORT;

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  target: 'web',
  resolve: {
    extensions: ['.js', '.json', '.graphql'],
  },
  entry: {
    index: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '/client/index.js'),
    ]
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'dist.js',
    publicPath: 'http://localhost:' + PORT + '/',
  },
  watchOptions: {
    ignored: ['server/temp/*', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx*$/,
        include: path.join(__dirname, '/client'),
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '/client'),
        loader: "style-loader!css-loader!sass-loader",
      },
      {
        test: /\.css$/,
        loader: "css-loader/locals?module&localIdentName=[name]__[local]___[hash:base64:5]",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=[path][name].[ext]"
      },
      {
        test: /\.pug/,
        loader: "pug-loader",
      },
      {
        test: /\.graphql$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'LIVE': false,
        'NODE_ENV': JSON.stringify('development'),
        'BABEL_ENV': JSON.stringify('development'),
        'PORT': 3015,
        'BASE_URL': JSON.stringify('http://localhost'),
        'MOCK_DATA': process.env.MOCK_DATA
      },
    }),
    new CopyWebpackPlugin([
      { from: 'server/config.js', to: path.resolve(__dirname, 'dist'), flatten: true},
    ])
  ],
};

module.exports = config;
