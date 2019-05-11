const path = require('path');
const SRC_DIR = path.join(__dirname, "/client");
const DIST_DIR = path.join(__dirname, "/public/dist");

module.exports = {
  entry:`${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presents: [
              '@babel/present-env',
              '@babel/present-react'
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
      },
    ],
  },
};