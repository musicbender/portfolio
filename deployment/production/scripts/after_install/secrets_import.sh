#!/bin/sh

cd /var/www/patjacobs
node deployment/production/scripts/after_install/secrets_import.js > deployment/production/app-production.json.temp
rm deployment/production/app-production.json
mv deployment/production/app-production.json.temp deployment/production/app-production.json
