#!/bin/bash

export NODE_ENV=production; export USE_DOTENV=true;
rm -rf dist &&
babel-node tools/build-client.js &&
babel-node tools/build-server.js
