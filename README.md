# docker-wipe 🚽

Removes Docker images and containers

#####Options
=============

There are 3 options to use

`-c or --exited-containers` to remove all exited containers

`-i or --dangling-images` to remove all dangling containers

`-v or --dangling-volumes` to remove all dangling volumes


Simply run `docker-wipe`

####Things to note

* Will throw standard docker message that you need one or more if nothing is found
