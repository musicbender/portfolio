const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
    filename: 'bundle.js',
    publicPath: '/public',
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
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: '../src/client/assets/',
              name: '[path][name].[ext]',
              outputPath: 'assets/'
            }
          }
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
      { from: 'src/client/assets/favicons', to: 'assets/favicons' },
      { from: 'src/client/assets/images/', to: 'assets/images', ignore: [ '.DS_Store' ] },
      { from: 'src/client/assets/manifests/manifest.json', to: '' }
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

module.exports = config;
