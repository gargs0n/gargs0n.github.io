const webpack = require('webpack');
const path = require('path');

function root(...args) {
  return path.join(...[__dirname, ... args ]);
}

module.exports = {
  devtool: 'source-map',

  entry: {
    application: ['babel-polyfill', `${root('_scripts')}/application.js`]
  },

  output: {
    path: root('assets/js'),
    publicPath: '/assets/js/',
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          root('_scripts')
        ],
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.ts'],
    modules: [root('_scripts'), "node_modules"]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
