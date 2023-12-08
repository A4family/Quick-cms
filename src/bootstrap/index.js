const { containerSetup }  = require('../bootstrap/container')
const expressLoader = require('./expressLoader');

let init = async (app) => {
    containerSetup(app);
    expressLoader.init(app);
};

module.exports = { init };