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
import { Request, Response } from "express";

declare module "express-serve-static-core" {
  interface Request {
    language?: string;
  }
}

const app = express();

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



const middleware = (req: Request, res: Response, next: express.NextFunction) => {
  if (req.query.lang == "en" || req.query.lang == "fa")
    req.language = req.query.lang;
  else
    req.language = "fa"
  next();
}

app.use("*", middleware);
app.use("/", defaultRoutes);
app.use("/nouns", nounsRoutes);
app.use("/adjs", adjectiveRoutes);
app.use("/qas", qaRoutes);


app.listen(3000, () => {
  console.log("server is listeing to port http:localhost:3000");
});
