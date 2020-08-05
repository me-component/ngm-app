#!/usr/bin/env node

const {spawn} = require('child_process');
const app = require('./my-app');



// ./node_modules/.bin/ng build --prod --base-href /switchingOperations/ --progress --output-path=dist/switchingOperations
const sp = spawn('./node_modules/.bin/ng', [
  'build', '--prod', '--base-href', `/${app.aliasName}/`, '--progress ', `--output-path=dist/${app.aliasName}`,
], {
  stdio: ['inherit', 'inherit', 'inherit'],
  shell: true,
  // cwd: r.pathTo
})

sp.on('close', _ => {
  console.log("run");
  return
})
