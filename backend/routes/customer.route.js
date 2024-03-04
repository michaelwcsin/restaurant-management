import express from "express";
import { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } from "../controllers/customer.controller.js";
const router = express.Router();

router.get("/", getCustomers);
router.get("/:id", getCustomer);
router.post("/", createCustomer);
router.patch("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
