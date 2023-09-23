const authRoute = require('./system/auth/auth.routes');
const dashboardRoute = require('./system/dashboard/dashboard.routes');

let init = async (app) => {
    app.use('/login', authRoute);
    app.use('/', dashboardRoute);
};

module.exports = { init }