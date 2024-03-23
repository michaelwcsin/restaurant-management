import express from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurant.controller.js";

const router = express.Router();

router.get("/", getRestaurants);
router.post("/", createRestaurant);
router.patch("/:id", updateRestaurant);
router.delete("/:id", deleteRestaurant);

export default router;
