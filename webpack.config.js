var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public')
  },
  devServer: {
    contentBase: './public',
    port: '10101',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};