import express from "express";
import {
  createOrder,
  deleteOrders,
  getOrders,
  updateOrder,
  getOrder
} from "../controllers/order.controller.js";

const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", deleteOrders);
router.get('/:id', getOrder);


export default router;
