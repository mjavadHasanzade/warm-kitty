import * as express from "express";
import sequelize from "./database";
import Adjectives from "./Models/adjective";
import Nouns from "./Models/nouns";
import defaultRoutes from "./Routes/default";
import nounsRoutes from "./Routes/nouns";
import adjectiveRoutes from "./Routes/adjective";
import qaRoutes from "./Routes/fakeQA";
import FakeQA from "./Models/fakeQA";
import { nouns, adjs, qas } from "./mock";

const app = express();

//! type of data
//! naun
//! adj

//? initialize the database
sequelize
  .sync({ force: true })
  .then(async () => {
    await Nouns.bulkCreate(nouns);
    await Adjectives.bulkCreate(adjs);
    await FakeQA.bulkCreate(qas);

    console.log("db sync");
  })
  .catch((err: any) => console.log(err));

  app.use(express.json());

app.use("/", defaultRoutes);
app.use("/nouns", nounsRoutes);
app.use("/adj", adjectiveRoutes);
app.use("/qas", qaRoutes);

app.listen(3000, () => {
  console.log("server is listeing to port http:localhost:3000");
});
