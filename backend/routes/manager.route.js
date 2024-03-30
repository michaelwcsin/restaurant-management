import express from "express";
import {
  getManager,
  getManagers,
  updateManager,
} from "../controllers/manager.controller.js";

const router = express.Router();

router.get("/", getManagers);
router.get("/:id", getManager);
router.patch("/:id", updateManager);

export default router;
