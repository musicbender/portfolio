#!/bin/bash
mocha \
  --compilers js:babel-core/register \
  --require test/setup.js \
  test/integration/**/*.test.js
