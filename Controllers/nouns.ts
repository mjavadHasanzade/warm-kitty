import Nouns from "../Models/nouns";
import { Request, Response } from "express"

const getAll = async (req: Request, res: Response) => {
  const nouns = await Nouns.findAndCountAll({ where: { lang: req.language } });
  res.send({ nouns });
};

const createOne = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const newNoun = await Nouns.create({ ...body, lang: req.language });

    res.send({ newNoun, message: "Noun Created Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

const editOne = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const editedNoun = await Nouns.update(body, {
      where: { id: req.params.id },
    });

    if (editedNoun[0] === 0) {
      res.status(404).send({ message: "Noun Not Found" });
      return;
    }

    res.send({ editedNoun, message: "Noun Edited Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

const deleteOne = async (req: Request, res: Response) => {
  try {
    await Nouns.destroy({
      where: { id: req.params.id },
    });
    res.send({ message: "Noun Deleted Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

export { getAll, createOne, editOne, deleteOne };
