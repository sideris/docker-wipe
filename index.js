const sys = require('sys')
const exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec(`docker rmi $(docker images | grep '^<none>' | awk '{print $3}')`, puts);