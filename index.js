const fs = require('fs');

if (process.env.USE_DOTENV) {
  require('dotenv').config();
}

if (process.env.NODE_ENV === 'production') {
  require('./dist/server.bundle.js');
} else {
  require('@babel/register')();

  require.extensions['.css'] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
  };

  require('./src/server/server');
}
