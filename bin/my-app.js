#!/usr/bin/env node

const package = require('../package.json');

const version = `'${package.version.replace(/\-/, '.').toString()}'`;

module.exports = {
  name: package.name,
  aliasName: package.aliasName,
  version: version,
  versionOriginal: package.version
}

