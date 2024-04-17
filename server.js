const express = require("express");
const sequelize = require("./database");
const Adjectives = require("./Models/adjective");
const Nouns = require("./Models/nouns");
const defaultRoutes = require("./Routes/default");
const nounsRoutes = require("./Routes/nouns");
var bodyParser = require("body-parser");

const app = express();

//! type of data
//! naun
//! adj

//? initialize the database
sequelize
  .sync({ force: true })
  .then(async () => {
    await Nouns.bulkCreate([
      { name: "chockolate", emoji: "🍫" },
      { name: "glass", emoji: "🍷" },
      { name: "Cat", emoji: "🐈" },
      { name: "Pen", emoji: "🖊️" },
      { name: "pillow", emoji: "💩" },
    ]);
    await Adjectives.bulkCreate([
      { name: "warm", type: "any" },
      { name: "scary", type: "any" },
      { name: "Blue", type: "any" },
      { name: "funny", type: "any" },
      { name: "salty", type: "any" },
    ]);

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

app.get("/adj", (req, res) => {
  //? 6
  res.send({ name1: "Soft", name2: "warm", name3: "Kitty" });
});

app.post("/adj", (req, res) => {
  //? 7
  res.send({ name1: "Soft", name2: "Kitty" });
});

app.put("/adj", (req, res) => {
  //? 8
  res.send({ name1: "Soft", name2: "Kitty" });
});

app.delete("/adj", (req, res) => {
  //? 9
  res.send({ name1: "Soft", name2: "Kitty" });
});

app.listen(3000, () => {
  console.log("server is listeing to port http:localhost:3000");
});
