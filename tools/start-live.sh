#!/bin/bash

export NODE_ENV=production;
export IS_QA=false
export IS_LIVE=true
export PORT=3021;
export DB_HOST=127.0.0.1
export DB_PORT=27017
nodemon index.js
