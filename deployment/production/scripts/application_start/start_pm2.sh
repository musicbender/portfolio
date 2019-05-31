#!/bin/sh

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
cd /var/www/portfolio
pm2 start deployment/production/app-production.json --interpreter node_modules/babel-cli/bin/babel-node.js
