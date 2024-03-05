import express from "express";
import {
  createOrder,
  deleteOrders,
  getOrders,
  updateOrder,
} from "../controllers/order.controller.js";
const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrders);

export default router;
