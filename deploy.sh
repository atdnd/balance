#!/usr/bin/bash

#chmod images
chmod -R 775 ./public/img/*

#copy with rsync
rsync -av ./public/* armitage:/var/www/balance
