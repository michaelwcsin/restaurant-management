import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: false },
  password: { type: String, required: true },
});

const Restaurant = mongoose.model("restaurants", RestaurantSchema);

export default Restaurant;
