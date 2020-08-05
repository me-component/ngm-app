#!/usr/bin/env node
// Webpack Angular расширение @ksa
const package = require('../package.json');
const webpack = require('webpack');
const app = require('./my-app');


console.log('version', app.version);
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      VERSION: app.version,
    })
  ]
}

