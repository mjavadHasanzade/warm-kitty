import sequelize from "../database";
import { DataTypes } from "sequelize";
import { Model, Optional } from 'sequelize';

interface NounAttributes {
  id: number;
  name: string;
  emoji: string;
  lang: string;
};

interface NounCreationAttributes
  extends Optional<NounAttributes, 'id'> { }

interface NounInstance
  extends Model<NounAttributes, NounCreationAttributes>,
  NounAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Nouns = sequelize.define<NounInstance>(
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
    lang: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "en",
    }
  },

);

export default Nouns;
