import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
  getCustomer
} from "../controllers/customer.controller.js";

const router = express.Router();

router.get("/", getCustomers);
router.post("/", createCustomer);
router.patch("/:_id", updateCustomer);
router.delete("/:_id", deleteCustomer);
router.get('/:id', getCustomer);

export default router;
