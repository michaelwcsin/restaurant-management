import mongoose from "mongoose";

// ! Do we want an ID key, since mongoDB automatically generates a ObjectID for each schema
// ! Also, do we want to split up address into suite, house number, street, etc or just keep it as one field
// - i think its easier if we keep the suite, house number and street all together -krishna
// ! Lastly, do we want a password field so that a user can login via email and password -> direct to customer page

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: false },
  password: { type: String, required: true },
});

const Customer = mongoose.model("customers", CustomerSchema);

export default Customer;
