#!/usr/bin/bash

#chmod images
chmod -R 775 ./public/img/*

#copy with rsync
rsync -azv  --progress ./public/* balancerobot@andrestechera.com:/var/www/balance
