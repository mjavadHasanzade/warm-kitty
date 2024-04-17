const { randomName } = require("../Controllers/default");
const router = require("express").Router();

const routes = [
  {
    name: "/name",
    action: randomName,
  },
];

routes.map((route) => {
  router.get(route.name, route.action);
});

module.exports = router;
