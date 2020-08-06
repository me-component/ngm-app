#!/usr/bin/env node

const {spawn} = require('child_process');
const app = require('./my-app');


// sudo /home/ksa/.npm-global/bin/npx servor dist/ 8080 --reload --browse --static --secure
const sp = spawn('npx', ['servor', `dist/`,  '8080', '--reload', '--browse', '--static'], {
  stdio: ['inherit', 'inherit', 'inherit'],
  shell: true,
  // cwd: r.pathTo
})

sp.on('close', _ => {
  console.log("run");
  return
})
