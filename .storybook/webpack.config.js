const path = require('path');
const custom = require('../webpack.dev.config.js');

module.exports = async ({ config, mode }) => {
  return { ...config, module: custom.module };
};
