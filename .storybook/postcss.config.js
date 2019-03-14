const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {
      mixinsDir: path.join(__dirname, '/src/client/style/js-mixins')
    },
    'postcss-simple-vars': {},
    'postcss-url': {},
    'postcss-nested': {},
    'postcss-hexrgba': {},
  }
};
