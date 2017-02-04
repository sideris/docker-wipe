# docker-clean-images
Removes all `<none>` images from Docker

Simply run `docker-clean`

####Things to note

* Does not remove images that containers depend upon
* Might throw an error, but the images will have been cleared
