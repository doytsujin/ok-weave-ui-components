const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProduction = process.env.NODE_ENV === 'production' || process.env.RELEASE === 'true';

const config = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    docs: isProduction
      ? './docs/js/main'
      : [
          'webpack-dev-server/client?http://0.0.0.0:8080',
          'webpack/hot/only-dev-server',
          './docs/js/main',
        ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/docs'),
    filename: '[name].js',
    publicPath: '/',
  },
  devtool: isProduction ? false : 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  resolveLoader: {
    alias: {
      'react-docs': path.resolve(__dirname, 'src/loaders/react-docs.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules|vendor/,
        use: ['babel-loader', 'stylelint-custom-processor-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, './node_modules/bourbon-neat')],
              },
            },
          },
        ],
      },
      {
        test: /\.(otf|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: isProduction
    ? {
        minimizer: [new TerserPlugin()],
      }
    : undefined,
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['docs'],
      template: 'docs/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZE_BUNDLE ? 'server' : 'disabled',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
      openAnalyzer: true,
    }),
    ...(isProduction ? [] : [new webpack.HotModuleReplacementPlugin()]),
  ],
};

module.exports = config;
