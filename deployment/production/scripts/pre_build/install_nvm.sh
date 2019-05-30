#!/bin/bash
node --version
if [ $? -ne 0 ]
then
   curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
   . ~/.nvm/nvm.sh
   nvm install 10.13.0
fi
