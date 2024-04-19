import sequelize from "../database";
import { DataTypes, Model, Optional } from "sequelize";

interface AdjectivesAttributes {
  id: number;
  name: string;
  type?: string;
}

interface AdjectivesCreationAttributes
  extends Optional<AdjectivesAttributes, "id"> { }

interface AdjectivesInstance
  extends Model<AdjectivesAttributes, AdjectivesCreationAttributes>,
  AdjectivesAttributes {
  createdAt?: Date;
  updatedAt?: Date;
}

const Adjectives = sequelize.define<AdjectivesInstance>(
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
    },
  }
);

export default Adjectives;