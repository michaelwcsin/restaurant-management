import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: false },
  phone: { type: String, required: false },
});

const Customer = mongoose.model("customers", CustomerSchema);

export default Customer;
