#! /usr/bin/env node
const sys = require('util');
const cmder = require('commander');
const exec = require('child_process').exec;

cmder
	.version('1.0.1')
	.option('-c, --exited-containers', 'Remove all exited containers')
	.option('-i, --dangling-images', 'Remove all dangling images')
	.option('-v, --dangling-volumes', 'DANGER: Data loss. Remove all dangling volumes.')
	.parse(process.argv);

function puts(error, stdout, stderr) {
    if(error) console.log(error);
    sys.puts(stdout)
}

const exitedContainers = "docker ps --no-trunc -aqf \"status=exited\" | xargs docker rm";
const danglingImages = "docker images --no-trunc -aqf \"dangling=true\" | xargs docker rmi";
const danglingVolumes = "docker volume ls -qf \"dangling=true\" | xargs docker volume rm";

if (!cmder.exitedContainers && !cmder.danglingImages && !cmder.danglingVolumes)
	console.log("You need to add some parameters. Use docker-wipe --help to see available ones");
else
	console.log("Cleaning Docker images");
if(cmder.exitedContainers)
	exec(exitedContainers, puts);
if(cmder.danglingImages)
	exec(danglingImages, puts);
if(cmder.danglingVolumes)
	exec(danglingVolumes, puts);