#!/bin/sh

cd /var/www/portfolio
/home/ubuntu/.nvm/versions/node/v10.13.0/bin/pm2 start deployment/production/app-production.json --interpreter node_modules/babel-cli/bin/babel-node.js
