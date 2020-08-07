#!/usr/bin/env node

const package = require('../package.json');

const version = `'${package.version.replace(/\-/, '.').toString()}'`;

module.exports = {
  name: package.name,
  title: package.title,
  aliasName: package.aliasName,
  version: version,
  versionOriginal: package.version
}

