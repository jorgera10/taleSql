import express from "express";
import {
  createTale,
  deleteTale,
  getAllTale,
  getTale,
  updateTale,
} from "../controllers/BookController.js";

const router = express.Router();

router.get("/", getAllTale);
router.get("/:id", getTale);
router.post("/", createTale);
router.put("/:id", updateTale);
router.delete("/:id", deleteTale);

export default router;
