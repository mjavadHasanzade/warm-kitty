import { randomName, randomQA } from "../Controllers/default";
import { Router } from "express";

const router = Router();
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

export default router;
