const { Sequelize } = require("sequelize");
const database = require("../../config/config");

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    port: database.port,
    dialect: database.dialect,
    dialectOptions: database.dialectOptions,
    define: {
      underscored: false,
    },
  }
);

module.exports = sequelize;
