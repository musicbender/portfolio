#!/bin/sh

echo 1
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
source ~/.bashrc
source /home/ubuntu/.profile
cd /var/www/portfolio
/home/ubuntu/.nvm/versions/node/v10.13.0/bin/pm2 kill
