import Menu from "../models/menu.model.js";

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
export const deleteMenusFromRepository = async (query) => {
  try {
    const menus = await Menu.findOneAndDelete({ ...query });
    return menus;
  } catch (e) {
    throw Error("Error while deleting a menu");
  }
};

export const createMenusInRepository = async (data) => {
  try {
    const { restaurantId, name, description, price, status } = data;
    const existingMenus = await Menu.findOne({ _id });
    if (existingMenus) {
      throw new Error("Menu already exists");
    }
    const newMenus = new Menu({
      restaurantId,
      name,
      description,
      price,
      status,
    });
    const savedMenus = await newMenus.save();
    return savedMenus;
  } catch (error) {
    throw new Error(`Failed to create menu: ${error.message}`);
  }
};
