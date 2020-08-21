#!/usr/bin/env node

const {spawn} = require('child_process');
const app = require('./my-app');
const git = require('local-git-sync');


// standard-version --release-as 11.6.2 --prerelease && git push --follow-tags origin master
const sp = spawn('standard-version', ['--release-as', app.version, '--prerelease', '&&', 'git', 'push', '--follow-tags', 'origin', git.branch()], {
  stdio: ['inherit', 'inherit', 'inherit'],
  shell: true,
  // cwd: r.pathTo
})

sp.on('close', _ => {
  console.log(`Сборка ${version[0]}.${version[1]} готова`)
})
