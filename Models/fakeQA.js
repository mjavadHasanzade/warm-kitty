const sequelize = require("../database");
const { DataTypes } = require("sequelize");

const FakeQA = sequelize.define(
  "QA",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "common",
    },
  },
  {
    sequelize,
  }
);

module.exports = FakeQA;
