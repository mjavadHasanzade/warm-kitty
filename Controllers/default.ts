import Adjectives from "../Models/adjective";
import Nouns from "../Models/nouns";
import FakeQA from "../Models/fakeQA";
import { Request, Response } from "express";
import sequelize from "../database";

const randomName = async (req: Request, res: Response) => {
  const adj = await Adjectives.findOne({
    attributes: ["name", "type"],
    order: sequelize.literal("random()"),
    where: { lang: req.language }
  });

  const noun = await Nouns.findOne({
    attributes: ["name", "emoji"],
    order: sequelize.literal("random()"),
    where: { lang: req.language }
  });


  if (!adj || !noun) {
    res.send({
      timestamp: new Date().getTime(),
    });
    return;
  }

  res.send({
    adj: adj.name,
    noun: noun.name,
    full: adj.name + " " + noun.name,
    emoji: noun.emoji,
    timestamp: new Date().getTime(),
  });
};

const randomQA = async (req: Request, res: Response) => {
  console.log(req.path);

  const attributes = [];
  if (req.path === "/question") attributes.push("question");
  else if (req.path === "/answer") attributes.push("answer");
  else if (req.path === "/qa") attributes.push("question", "answer");

  const qa = await FakeQA.findOne({
    attributes,
    order: sequelize.literal("random()"),
    where: { lang: req.language }
  });

  if (!qa) {
    res.send({
      timestamp: new Date().getTime(),
    });
    return;
  }

  res.send({
    question: qa.question,
    answer: qa.answer,
    timestamp: new Date().getTime(),
  });
};

export { randomName, randomQA };
