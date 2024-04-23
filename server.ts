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
import { Request, Response, ErrorRequestHandler } from "express";
import { DatabaseError, ValidationError } from "./errors";
import { lookup } from "geoip-lite";
import * as cors from "cors";

declare module "express-serve-static-core" {
  interface Request {
    language?: string;
  }
}

const app = express();

//? initialize the database
sequelize
  .sync({})
  .then(async () => {
    await Nouns.bulkCreate(nouns);
    await Adjectives.bulkCreate(adjs);
    await FakeQA.bulkCreate(qas);

    console.log("db sync");
  })
  .catch((err: any) => console.log(err));

app.use(cors());
app.use(express.json());

const langHandler = (req: Request, res: Response, next: express.NextFunction) => {
  if (req.query.lang == "en" || req.query.lang == "fa")
    req.language = req.query.lang;
  else
    req.language = "fa";
  next();
}

const logger = (req: Request, res: Response, next: express.NextFunction) => {
  const oldSend = res.send;
  res.send = function (body: any) {
    console.log('Headers: ' + JSON.stringify(req.headers));
    console.log('IP: ' + JSON.stringify(req.ip));

    var geo = lookup(req.ip);

    console.log("Browser: " + req.headers["user-agent"]);
    console.log("Language: " + req.headers["accept-language"]);
    console.log("Country: " + (geo ? geo.country : "Unknown"));
    console.log("Region: " + (geo ? geo.region : "Unknown"));

    console.log(geo);
    return oldSend.call(res, body);
  };

  next();
}

app.use("*", langHandler, logger);
app.use("/", defaultRoutes);
app.use("/nouns", nounsRoutes);
app.use("/adjs", adjectiveRoutes);
app.use("/qas", qaRoutes);

const errorHandler: ErrorRequestHandler = (err, request, res, next) => {
  if (err instanceof DatabaseError || err instanceof ValidationError) {
    res.status(err.statusCode).send({ error: err.message, type: err.name });
  } else {
    console.error(err);
    res.status(500).send('An error occurred!');
  }
}

app.use(errorHandler);


app.listen(3000, () => {
  console.log("server is listeing to port http:localhost:3000");
});
