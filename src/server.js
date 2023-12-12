const express = require('express');
const app = express();
const process = require('process');
const PORT = process.env.PORT || 8000;
const loaders = require('./bootstrap');

const startServer = () => {
  loaders.init(app);
  app.listen(PORT, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(`Server starting at port ${PORT}`);
  });
};

startServer();
