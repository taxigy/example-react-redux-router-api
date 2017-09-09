module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }],
  },
};
