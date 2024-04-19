import {
  getAll,
  createOne,
  editOne,
  deleteOne,
} from "../Controllers/adjective";
import { Router } from "express";

const router = Router();

router.get("/", getAll);
router.post("/", createOne);
router.put("/:id", editOne);
router.delete("/:id", deleteOne);

export default router;
