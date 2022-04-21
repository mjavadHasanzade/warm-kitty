const express = require("express");
const sequelize = require("./database");
const Adjectives = require("./Models/adjective");
const Nouns = require("./Models/nouns");
const defaultRoutes = require("./Routes/default");

const app = express();

//! type of data
//! naun
//! adj

//? initialize the database
sequelize
  .sync({ force: true })
  .then(async () => {
    await Nouns.create({ name: "pen", emoji: "🖋️" });
    await Adjectives.create({ name: "blue"});

    console.log("db sync");
  })
  .catch((err) => console.log(err));

app.use("/", defaultRoutes);

app.get("/noun", (req, res) => {
  //? 2
  res.send({ name1: "Soft", name2: "warm", name3: "Kitty" });
});

app.post("/noun", (req, res) => {
  //? 3
  res.send({ name1: "Soft", name2: "Kitty" });
});

app.put("/noun", (req, res) => {
  //? 4
  res.send({ name1: "Soft", name2: "Kitty" });
});

app.delete("/noun", (req, res) => {
  //? 5
  res.send({ name1: "Soft", name2: "Kitty" });
});

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
  console.log("server is listeing to port 3000");
});
