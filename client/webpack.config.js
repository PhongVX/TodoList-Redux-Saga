const path = require('path');
const webpack = require('webpack')

const OUTPUT_PATH =  path.join(__dirname, '../server/public/reactClient')

// var VENDOR_LIBS = [
//     "react",
//     "react-dom",
//     "redux",
//     "react-redux"
// ]

module.exports = {
  entry: {
    bundle:"./Client.js",
    //vendor: VENDOR_LIBS
  },
  output: {
    path: OUTPUT_PATH,
    filename: "[name].js"
  },
  module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', "@babel/preset-react"]
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        }
      ]

      // {test: /\.css$/, loader: 'style-loader!css-loader'},
      // {test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader'}
  }
};



  // plugins: [
  //       // new webpack.optimize.CommonsChunkPlugin({name: 'vendor'})
  // ]