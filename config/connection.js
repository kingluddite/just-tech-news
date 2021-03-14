// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// load environment variables
require('dotenv').config();

// create conn to our Database, pass in your MySQL info for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize;
