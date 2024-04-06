import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
  getCustomer,
  loginCustomer,
} from "../controllers/customer.controller.js";

const router = express.Router();

router.get("/", getCustomers);
router.post("/", createCustomer);
router.patch("/:_id", updateCustomer);
router.delete("/:_id", deleteCustomer);
router.get('/:id', getCustomer);
router.post("/login", loginCustomer);

export default router;
