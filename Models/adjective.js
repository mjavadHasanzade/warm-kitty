const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Adjectives = sequelize.define(
  "adjective",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = Adjectives;
