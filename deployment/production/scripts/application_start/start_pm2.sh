#!/bin/sh

cd /var/www/portfolio
pm2 start deployment/production/app-production.config.js --interpreter node_modules/@babel/node/lib/babel-node.js
