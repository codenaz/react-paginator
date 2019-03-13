const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/lib/index.js',
  mode: 'production',
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'react-hooks-paginator': path.resolve(__dirname, './src/lib')
    },
    extensions: ['*', '.js', '.jsx']
  },
  externals: {
    react: 'commonjs react'
  }
};
