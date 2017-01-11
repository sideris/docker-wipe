#! /usr/bin/env node
const sys = require('sys')
const exec = require('child_process').exec;
function puts(error, stdout, stderr) {
    if(error) throw error
    sys.puts(stdout)
}
exec(`docker rmi $(docker images | grep '^<none>' | awk '{print $3}')`, puts);