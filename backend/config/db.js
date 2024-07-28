const Sequelize = require('sequelize');

const connectDB = new Sequelize('nodeestudos', 'postgres', 'postgres', {
  host: 'postgres-db',
  port: 5432, 
  dialect: 'postgres',
});

module.exports = connectDB;
