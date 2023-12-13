const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    database: process.env.DATABASE,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: process.env.DIALECT
  }
};
