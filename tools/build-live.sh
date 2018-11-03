#!/bin/bash

rm -rf dist &&
babel-node tools/build-client.js &&
babel-node tools/build-server.js
