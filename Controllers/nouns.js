const Nouns = require("../Models/nouns");

const getAll = async (req, res) => {
  const nouns = await Nouns.findAndCountAll();
  res.send({ nouns });
};

const createOne = async (req, res) => {
  const body = req.body;

  try {
    const newNoun = await Nouns.create(body);

    res.send({ newNoun, message: "Noun Created Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

const editOne = async (req, res) => {
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

const deleteOne = async (req, res) => {
  try {
    await Nouns.destroy({
      where: { id: req.params.id },
    });
    res.send({ message: "Noun Deleted Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

module.exports = { getAll, createOne, editOne, deleteOne };
