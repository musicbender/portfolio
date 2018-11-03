#!/bin/bash

export NODE_ENV=production
export PORT=3018
export DB_HOST=127.0.0.1
export DB_PORT=27017
export IS_QA=false
export IS_LIVE=true

babel-node index.js
