const {
  getAll,
  createOne,
  editOne,
  deleteOne,
} = require("../Controllers/fakeQA");
const router = require("express").Router();

router.get("/", getAll);
router.post("/", createOne);
router.put("/:id", editOne);
router.delete("/:id", deleteOne);

module.exports = router;
