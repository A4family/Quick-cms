const { containerSetup } = require('../bootstrap/container');
const expressLoader = require('./expressLoader');

const init = async (app) => {
  containerSetup(app);
  expressLoader.init(app);
};

module.exports = { init };
