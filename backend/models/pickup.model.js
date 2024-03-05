import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const PickUpSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "orders" },
  date: { type: Date, required: false },
  pickUpTime: { type: String, required: true },
});

const PickUp = mongoose.model("pickups", PickUpSchema);

export default PickUp;
