#!/bin/bash

testtype="$1"
export NODE_ENV=test
bash test/${testtype}-test.sh
