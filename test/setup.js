// setup enzyme adapter
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new Adapter() });

// exclude css
const noop = () => null;
require.extensions['.scss'] = noop;
require.extensions['.css'] = noop;
