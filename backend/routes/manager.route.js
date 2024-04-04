import express from "express";
import {
  getManager,
  getManagers,
  updateManager,
  loginManagers,
} from "../controllers/manager.controller.js";

const router = express.Router();

router.get("/", getManagers);
router.get("/:id", getManager);
router.patch("/:id", updateManager);
router.post("/login", loginManagers);

export default router;
