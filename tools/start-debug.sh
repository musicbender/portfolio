#!/bin/bash

export NODE_DEBUG=*
export NODE_ENV=development
export IS_QA=false
export IS_LIVE=false
export PORT=3015
export DB_HOST=127.0.0.1
export DB_PORT=27017
node index.js
