const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("warm-kitty", "user", "pass", {
  dialect: "sqlite",
  host: "./dev.sqlite",
});

module.exports = sequelize;