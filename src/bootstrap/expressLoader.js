const express = require('express');
const routes = require('../routes');
const path = require('path');

let expressLoader = {};
expressLoader.init = (app) => {
    
    routes.init(app);
    console.log(__dirname);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));
    app.use(express.static(path.join(__dirname, '../public')));
}


module.exports = expressLoader;