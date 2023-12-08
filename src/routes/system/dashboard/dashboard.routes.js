const express = require('express');
const router = express.Router();
const { container } = require('../../../bootstrap/container');
const DashboardController = container.resolve('dashboardController');


router.get('/', DashboardController.index);

module.exports = router;
