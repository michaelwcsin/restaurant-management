import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customers" },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "restaurants" },
  menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "menus" }], // List of menu objectId's
  sumPrice: { type: Number, required: true },
  status: { type: String, default: "ordered" },
  pickUpDate: { type: Date, required: false },
  pickUpTime: { type: String, required: false }
});

const Order = mongoose.model("orders", OrderSchema);

export default Order;
