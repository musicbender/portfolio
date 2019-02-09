const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  mode: 'development',
  target: 'web',
  resolve: {
    extensions: ['.js', '.json', '.graphql'],
  },
  entry: {
    index: [
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '/src/client/index.js'),
    ],
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:' + process.env.PORT + '/',
    chunkFilename: '[name].bundle.js'
  },
  watchOptions: {
    ignored: ['server/temp/*', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx*$/,
        include: path.join(__dirname, '/src/client'),
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '/src/client'),
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
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
      'process.env.MOCK_DATA': process.env.MOCK_DATA
    }),
    new CopyWebpackPlugin([
      { from: 'src/client/assets/images/', to: 'assets/images', ignore: [ '.DS_Store' ] },
      { from: 'src/client/assets/svg/', to: 'assets/svg', ignore: [ '.DS_Store' ] },
    ])
  ],
  optimization: {
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
  }
};

module.exports = config;
