// const path = require("path")
// const webpack = require("webpack")

// module.exports = {
//   entry: "./src/js/index.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist")
//   },
//   mode: "development",
//   module: {
//     rules: [
//       {
        
//       }
//     ]
//   },
//   plugins: []
// }

const path = require('path');
const webpack = require("webpack")

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // filename: 'main.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
};
