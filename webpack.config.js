const path = require('path');

module.exports = {
  entry: './src/resources/assets/system/js/index.js',
  output: {
    path: path.resolve(__dirname, './src/public/system/js'),
    filename: 'default.js',
  },
};