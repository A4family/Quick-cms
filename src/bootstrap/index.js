const expressLoader = require('./expressLoader');

let init = async (app) => {
    expressLoader.init(app);
    
};

module.exports = { init }