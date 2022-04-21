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
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "common",
    }
  },
  {
    sequelize,
  }
);

module.exports = Adjectives;
