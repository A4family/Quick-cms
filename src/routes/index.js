const authRoute = require('./system/auth/auth.routes');
const dashboardRoute = require('./system/dashboard/dashboard.routes');

const init = async (app) => {
  app.use('/', dashboardRoute);
  app.use('/login', authRoute);
};

module.exports = { init };
