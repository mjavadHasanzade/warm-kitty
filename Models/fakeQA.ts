import sequelize from "../database";
import { DataTypes } from "sequelize";
import { Model, Optional } from 'sequelize';

interface FakeQAAttributes {
  id: number;
  question: string;
  answer: string;
  lang: string;
};

interface FakeQACreationAttributes
  extends Optional<FakeQAAttributes, 'id'> { }

interface FakeQAInstance
  extends Model<FakeQAAttributes, FakeQACreationAttributes>,
  FakeQAAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const FakeQA = sequelize.define<FakeQAInstance>(
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
    lang: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "en",
    }
  }
);

export default FakeQA;
