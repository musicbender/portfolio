#!/bin/sh

source /home/ubuntu/.bash_profile
cd /var/www/portfolio
pm2 start deployment/production/app-production.json --interpreter node_modules/babel-cli/bin/babel-node.js
