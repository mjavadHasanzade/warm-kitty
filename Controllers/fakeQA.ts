import FakeQA from "../Models/fakeQA";
import { Request, Response } from "express";

const getAll = async (req: Request, res: Response) => {
  const fakeQAs = await FakeQA.findAndCountAll();
  res.send({ fakeQAs });
};

const createOne = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const newFakeQA = await FakeQA.create(body);

    res.send({ newFakeQA, message: "FakeQA Created Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

const editOne = async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const editedFakeQA = await FakeQA.update(body, {
      where: { id: req.params.id },
    });

    if (editedFakeQA[0] === 0) {
      res.status(404).send({ message: "FakeQA Not Found" });
      return;
    }

    res.send({ editedFakeQA, message: "FakeQA Edited Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

const deleteOne = async (req: Request, res: Response) => {
  try {
    await FakeQA.destroy({
      where: { id: req.params.id },
    });
    res.send({ message: "FakeQA Deleted Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

export { getAll, createOne, editOne, deleteOne };
