import express from "express";
import {
  createMenu,
  deleteMenu,
  getMenus,
  getMenu,
  updateMenu,
} from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getMenus);
router.get("/:id", getMenu);
router.post("/", createMenu);
router.patch("/:id", updateMenu);
router.delete("/:id", deleteMenu);

export default router;
