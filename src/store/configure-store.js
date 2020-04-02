// Own actions/constants/components
const storeProd = require('./configure-store.prod');
const storeDev = require('./configure-store.dev');

// This file will check environment and export the right store
if (process.env.NODE_ENV === 'production') {
  module.exports = storeProd;
} else {
  module.exports = storeDev;
}
