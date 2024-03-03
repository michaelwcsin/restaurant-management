import mongoose from "mongoose";

// ! Order management for restaurants (need decision)
const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customers" },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "restaurants" },
  menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "menus" }], // List of menu objectId's
  sumPrice: { type: Number, required: true },
});

const Order = mongoose.model("orders", OrderSchema);

export default Order;
