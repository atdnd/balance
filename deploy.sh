#!/usr/bin/bash

#copy with rsync
rsync -av ./public/* armitage:/var/www/balance
