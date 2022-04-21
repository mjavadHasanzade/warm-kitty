const {
  getAll,
  createOne,
  editOne,
  deleteOne,
} = require("../Controllers/nouns");
const router = require("express").Router();

router.get("/", getAll);
router.post("/", createOne);
router.put("/:id", editOne);
router.delete("/:id", deleteOne);

module.exports = router;
