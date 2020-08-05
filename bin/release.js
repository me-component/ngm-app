#!/usr/bin/env node

const {spawn} = require('child_process');
const app = require('./my-app');



// standard-version --release-as 11.6.2 --prerelease && git push --follow-tags origin master
const sp = spawn('standard-version', ['--release-as', app.version, '--prerelease', '&&', 'git', 'push', '--follow-tags', 'origin', 'master'], {
  stdio: ['inherit', 'inherit', 'inherit'],
  shell: true,
  // cwd: r.pathTo
})

sp.on('close', _ => {
  console.log("run");
  return
})
