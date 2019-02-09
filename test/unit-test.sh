#!/bin/bash
mocha \
  --compilers js:babel-core/register \
  --require test/setup.js \
  $(find src test -name '*.test.js'  -not -path 'node_modules/*' -not -path 'test/integration/*')
