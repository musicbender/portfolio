#!/bin/sh

sleep 20

if [[ $(curl -X GET --write-out "%{http_code}\n" --silent --output /dev/null "http://localhost:3005/rest-api/test") != 200 ]]; then
    echo "Test Failed" 1>&2
    exit 1
fi
