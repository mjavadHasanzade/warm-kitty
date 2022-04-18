const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const Nouns = sequelize.define(
  "nouns",
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
    emoji: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
  }
);

module.exports = Nouns;
