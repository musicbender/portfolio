#!/bin/sh

cd /var/www/patjacobs
pm2 start deployment/production/app-production.json --interpreter node_modules/babel-cli/bin/babel-node.js
