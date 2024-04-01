import express from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurant.controller.js";

const router = express.Router();

router.get("/", getRestaurants);
router.get("/:id", getRestaurant);
router.post("/", createRestaurant);
router.patch("/:id", updateRestaurant);
router.delete("/:id", deleteRestaurant);

export default router;
