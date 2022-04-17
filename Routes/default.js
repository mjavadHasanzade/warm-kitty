const { getAll } = require("../Controllers/default");
const router = require("express").Router();

router.get("/", getAll);

module.exports = router;
