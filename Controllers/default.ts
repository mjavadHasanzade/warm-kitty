import Adjectives from "../Models/adjective";
import Nouns from "../Models/nouns";
import FakeQA from "../Models/fakeQA";
import { Request, Response } from "express";
import sequelize from "../database";

const randomName = async (req: Request, res: Response) => {
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

const randomQA = async (req: Request, res: Response) => {
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

export  { randomName, randomQA };
