import mongoose from "mongoose";

const ManagerSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  address: { type: String, required: false },
  phone: { type: String, required: false },
  restaurant: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
});

const Manager = mongoose.model("managers", ManagerSchema);

export default Manager;
