const path = require('path');

const BUILD_DIR = path.join(__dirname, '/src/public');
const APP_DIR = path.join(__dirname, '/src');

module.exports = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
