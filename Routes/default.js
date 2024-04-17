const { randomName, randomQA } = require("../Controllers/default");
const router = require("express").Router();

const routes = [
  {
    name: "/",
    action: randomName,
  },
  {
    name: "/qa",
    action: randomQA,
  },
  {
    name: "/question",
    action: randomQA,
  },
  {
    name: "/answer",
    action: randomQA,
  },
];

routes.map((route) => {
  router.get(route.name, route.action);
});

module.exports = router;
