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
export const deleteMenuFromRepository = async (query) => {
  try {
    const menus = await Menu.findOneAndDelete({ ...query });
    return menus;
  } catch (e) {
    throw Error("Error while deleting a menu");
  }
};

// POST
export const createMenuInRepository = async (data) => {
  try {
    const { name, description, price, status } = data;
    const existingMenu = await Menu.findOne({ email });
    if (existingMenu) {
      throw new Error("Menu already exists");
    }
    const newMenu = new Menu({
      name,
      description,
      price,
      status,
    });
    const savedMenu = await newMenu.save();
    return savedMenu;
  } catch (error) {
    throw new Error(`Failed to create menu: ${error.message}`);
  }
};
