const authRoute = require('./system/auth/auth.routes');
const dashboardRoute = require('./system/dashboard/dashboard.routes');
const categoryRoute = require('./system/category/category.routes');

const init = async (app) => {
  app.use('/', dashboardRoute);
  app.use('/login', authRoute);
  app.use('/category', categoryRoute);
};

module.exports = { init };
