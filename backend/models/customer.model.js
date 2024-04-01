import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: false },
  phone: { type: String, required: false },
  password: { type: String, required: true },
  cart: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true},
      quantity: { type: Number, default: 1 }
    }
  ],
  totalPrice: { type: Number, default: 0 }
});

const Customer = mongoose.model("customers", CustomerSchema);

export default Customer;
