 require('dotenv').config();

if (process.env.NODE_ENV === 'production') {
  require('./dist/server.bundle.js');
} else {
  require('@babel/register')();

  require.extensions['.scss'] = () => {
    return;
  };
  require.extensions['.css'] = () => {
    return;
  };

  require('./server/server');
}
