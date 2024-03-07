import Menu from "../models/menu.model.js";
import Restaurant from "../models/restaurant.model.js";

// GET
export const getMenusFromRepository = async (query) => {
  try {
    const menus = await Menu.find(query);
    return menus;
  } catch (e) {
    throw Error("Error while fetching menu");
  }
};

// PATCH
export const updateMenusInRepository = async (query, update) => {
  try {
    const menus = await Menu.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return menus;
  } catch (e) {
    throw Error("Error while updating menu");
  }
};

// DELETE
export const deleteMenuFromRepository = async (query) => {
  try {
    const menus = await Menu.findOneAndDelete({ ...query });
    return menus;
  } catch (e) {
    throw Error("Error while deleting a menu");
  }
};

// POST
export const createMenuInRepository = async (req, res) => {
  const { restaurantEmail, name, description, price, status } = req.body;
  try {
    // Findrestaurant by email
    const restaurant = await Restaurant.findOne({ email: restaurantEmail });
    
    if (!restaurant) {
      return res.status(404).json({ error: "Restaurant not found" });
    }

    // Extract restaurantId
    const restaurantId = restaurant._id;

    const newMenu = new Menu({
      restaurantId,
      name,
      description,
      price,
      status,
    });

    const savedMenu = await newMenu.save();

    res.status(201).json(savedMenu);
  } catch (error) {
    console.error("Error creating menu:", error);
    res.status(500).json({ error: "Failed to create menu" });
  }
};
