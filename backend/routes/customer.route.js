import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customer.controller.js";

const router = express.Router();

router.get("/", getCustomers);
router.post("/", createCustomer);
router.patch("/:_id", updateCustomer);
router.delete("/:_id", deleteCustomer);

export default router;
