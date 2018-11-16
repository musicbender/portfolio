#!/bin/bash

rm -rf dist &&

export NODE_ENV=production
export IS_QA=false
export IS_LIVE=false
export PORT=3001
export DB_HOST=127.0.0.1
export DB_PORT=27017
node ./node_modules/@babel/cli/bin/babel-node.js --presets env tools/build-client.js &&

export NODE_ENV=production
export IS_QA=false
export IS_LIVE=false
export PORT=3001
export DB_HOST=127.0.0.1
export DB_PORT=27017
node ./node_modules/@babel/cli/bin/babel-node.js --presets env tools/build-server.js
