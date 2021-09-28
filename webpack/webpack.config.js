const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const isDevelopment = process.eventNames.NODE_ENV !== 'production';

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'build'),
  },
  mode: 'development',
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
  ],
};