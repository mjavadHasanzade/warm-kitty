const sequelize = require("sequelize");
const Adjectives = require("../Models/adjective");
const Nouns = require("../Models/nouns");
const FakeQA = require("../Models/fakeQA");

const randomName = async (req, res) => {
  const adj = await Adjectives.findOne({
    attributes: ["name", "type"],
    order: sequelize.literal("random()"),
  });

  const noun = await Nouns.findOne({
    attributes: ["name", "emoji"],
    order: sequelize.literal("random()"),
  });

  res.send({
    adj: adj.name,
    noun: noun.name,
    full: adj.name + " " + noun.name,
    emoji: noun.emoji,
    timestamp: new Date().getTime(),
  });
};

const randomQA = async (req, res) => {
  console.log(req.originalUrl);

  const attributes = [];
  if (req.originalUrl === "/question") attributes.push("question");
  else if (req.originalUrl === "/answer") attributes.push("answer");
  else if (req.originalUrl === "/qa") attributes.push("question", "answer");

  const qa = await FakeQA.findOne({
    attributes,
    order: sequelize.literal("random()"),
  });

  res.send({
    question: qa.question,
    answer: qa.answer,
    timestamp: new Date().getTime(),
  });
};

module.exports = { randomName, randomQA };
