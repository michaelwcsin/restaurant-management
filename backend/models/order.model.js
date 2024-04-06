import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "customers", required:true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "restaurants", required:true },
  menuItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "menus", required:true}], 
  sumPrice: { type: Number, required: true },
  status: { type: String, default: "ordered" },
  pickUpDate: { type: Date, required: false },
  pickUpTime: { type: String, required: false }
});

const Order = mongoose.model("orders", OrderSchema);

export default Order;
