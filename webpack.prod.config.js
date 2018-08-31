const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  target: 'web',
  resolve: {
    extensions: ['.js', '.json'],
  },
  entry: {
    index: [path.join(__dirname, '/client/index.js')],
    vendor: ['react', 'react-dom', 'react-router-dom'],
  },
  output: {
    path: path.join(__dirname, '/dist/public'),
    filename: 'dist.js',
    publicPath: '/public',
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=[path][hash].[ext]"
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'LIVE': process.env.LIVE,
      }
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    })
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
    },
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    },
  }
};

module.exports = config;
