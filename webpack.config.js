var webpack = require('webpack');
module.exports = {
  entry: [
    // 'babel-polyfill',
    // 'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: [
          ['transform-runtime'],
          ["import", { "libraryName": "antd-mobile", "style": "css" }]
        ],
        presets: ['es2015', 'react', 'stage-2']
      }
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.scss$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }, {
        test: /\.(jpg|png|svg)$/,
        use: {
            loader: "url-loader",
            options: {
                limit: 25000,
            },
        },
    }]
  }
};

