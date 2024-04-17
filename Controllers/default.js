const sequelize = require("sequelize");
const Adjectives = require("../Models/adjective");
const Nouns = require("../Models/nouns");

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

module.exports = { randomName };
