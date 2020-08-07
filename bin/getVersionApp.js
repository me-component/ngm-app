#!/usr/bin/env node
// Webpack Angular расширение @ksa
const package = require('../package.json');
const webpack = require('webpack');
const app = require('./my-app');

console.log('app.aliasName', app.aliasName)
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      VERSION: `${app.version}` || `''`,
      'ALIAS_NAME': `'${app.aliasName}'` || `''`,
      'TITLE': `'${app.title}'` || `''`
    })
  ]
}

