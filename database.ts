import { Sequelize } from "sequelize";

const sequelize = new Sequelize("warm-kitty", "user", "pass", {
  dialect: "sqlite",
  host: "./resources/dev.sqlite",
});

export default sequelize;