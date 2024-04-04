import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  //only email and password are required
  name: { type: String, required: false },
  email: { type: String, required: true },
  address: { type: String, required: false },
  phone: { type: String, required: false },
});

const Customer = mongoose.model("customers", CustomerSchema);

export default Customer;
