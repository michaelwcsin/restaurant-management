import express from "express";
import {
  createPickup,
  deletePickup,
  getPickups,
  updatePickup,
} from "../controllers/pickup.controller.js";

const router = express.Router();

router.get("/", getPickups);
router.post("/", createPickup);
router.patch("/:id", updatePickup);
router.delete("/:id", deletePickup);

export default router;
