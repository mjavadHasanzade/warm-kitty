const express = require("express");
const sequelize = require("./database");
const Adjectives = require("./Models/adjective");
const Nouns = require("./Models/nouns");
const defaultRoutes = require("./Routes/default");
const nounsRoutes = require("./Routes/nouns");
const adjectiveRoutes = require("./Routes/adjective");
const qaRoutes = require("./Routes/fakeQA");
var bodyParser = require("body-parser");
const FakeQA = require("./Models/fakeQA");
const { nouns, adjs, qas } = require("./mock");

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
  .catch((err) => console.log(err));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/", defaultRoutes);
app.use("/nouns", nounsRoutes);
app.use("/adj", adjectiveRoutes);
app.use("/qas", qaRoutes);

app.listen(3000, () => {
  console.log("server is listeing to port http:localhost:3000");
});
