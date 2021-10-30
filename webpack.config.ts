import * as path from 'path';

module.exports = {
  mode: 'development',
  cache: true,
  entry: {
    'main': [path.join(__dirname, 'src', 'main.ts')],
  },
  output: {
    path: path.join(__dirname, 'game', 'script', 'bundle'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
      },
    ],
  },
  watchOptions: {
    ignored: [/node_modules/]
  }
};
