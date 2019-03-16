#!/bin/bash
mocha \
  --compilers js:@babel/register \
  --require test/setup.js \
  test/integration/**/*.test.js
