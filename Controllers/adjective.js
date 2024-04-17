const Adj = require("../Models/adjective");

const getAll = async (req, res) => {
  const adj = await Adj.findAndCountAll();
  res.send({ adj });
};

const createOne = async (req, res) => {
  const body = req.body;

  try {
    const newAdj = await Adj.create(body);

    res.send({ newAdj, message: "Adj Created Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

const editOne = async (req, res) => {
  const body = req.body;

  try {
    const editedAdj = await Adj.update(body, {
      where: { id: req.params.id },
    });

    if (editedAdj[0] === 0) {
      res.status(404).send({ message: "Adj Not Found" });
      return;
    }

    res.send({ editedAdj, message: "Adj Edited Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

const deleteOne = async (req, res) => {
  try {
    await Adj.destroy({
      where: { id: req.params.id },
    });
    res.send({ message: "Adj Deleted Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.errors[0].message });
  }
};

module.exports = { getAll, createOne, editOne, deleteOne };
