const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

console.log(`asset root: ${process.env.ASSET_ROOT}`);
console.log(process.env.USE_DOTENV);

if (process.env.USE_DOTENV) {
  console.log(`using dot env in webpack`);
  require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
}

const config = {
  mode: 'production',
  target: 'web',
  resolve: {
    extensions: ['.js', '.json'],
  },
  entry: {
    index: [path.join(__dirname, '/src/client/index.js')],
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.join(__dirname, '/dist/public'),
    publicPath: process.env.ASSET_ROOT || '/public',
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx*$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          'file-loader'
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.ASSET_ROOT': JSON.stringify(process.env.ASSET_ROOT)
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CopyWebpackPlugin([
      { from: 'src/client/assets/', to: 'assets', ignore: [ '.DS_Store', 'fonts/*' ] },
      { from: 'src/client/assets/manifests/site.webmanifest', to: '' }
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
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
};

console.log(config.output);

module.exports = config;
