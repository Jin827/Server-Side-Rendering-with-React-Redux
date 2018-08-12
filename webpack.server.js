const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we're building a bundle for nodeJS, rather than for the browser
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  // Not bundle node module libraries into the server side bundle ( make node modules require at server runtime) to reduce the initial webpack startup time
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);