import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: {type: String, required: false},
  description: { type: String, required: false },
  price: { type: Number, required: true },
  status: { type: Boolean, required: true },
});

const Menu = mongoose.model("menus", MenuSchema);

export default Menu;
