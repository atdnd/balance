#!/usr/bin/bash

#clean up
rm -Rf ./public/*

#run build
grunt prod

#chmod images
chmod -R 775 ./public/img/*

#copy with rsync
rsync -azv  --progress ./public/* balancerobot@andrestechera.com:/var/www/balance
