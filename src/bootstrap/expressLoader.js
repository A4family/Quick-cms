const express = require('express');
const path = require('path');

const expressLoader = {};

expressLoader.init = (app) => {
  require('../routes').init(app);
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
  app.use(express.static(path.join(__dirname, '../public')));
};

module.exports = expressLoader;
