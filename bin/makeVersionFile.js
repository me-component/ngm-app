#!/usr/bin/env node
// Webpack Angular расширение @ksa
const package = require('../package.json');
const path = require('path');
const fs = require('fs-extra')
const app = require('./my-app');

let pathfolderDist = path.join(__dirname, '../', 'dist', app.aliasName,'version.txt')
fs.outputFile(pathfolderDist, `${app.version}`, err => {
  console.log(err) // => null
})

