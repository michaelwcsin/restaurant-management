import {
  createMenuInRepository,
  deleteMenuFromRepository,
  getMenusFromRepository,
  updateMenusInRepository,
} from "../repositories/menu.repository.js";

// Menus
export const getMenus = async (req, res) => {
  try {
    const menus = await getMenusFromRepository({});
    res.status(200).send(menus);
  } catch (e) {
    res.status(500).send(`Failed to get a list of menus: ${e.message}`);
  }
};

export const createMenu = async (req, res) => {
  const { body } = req;
  try {
    const menu = await createMenuInRepository(body);
    console.log(menu);
    res.status(200).send(menu);
  } catch (e) {
    res.status(500).send(`Failed to create menu: ${e.message}`);
  }
};


export const updateMenu = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const menu = await updateMenusInRepository({ _id: id }, body);
    res.status(200).send(menu);
  } catch (e) {
    res.status(500).send(`Failed to update menu ${id}: ${e.message}`);
  }
};

export const deleteMenu = async (req, res) => {
  const { id } = req.params;
  try {
    const menu = await deleteMenuFromRepository({ _id: id });
    if (menu) {
      res.status(204).send();
    } else {
      res.status(404).send(`Failed to delete menu ${id}`);
    }
  } catch (e) {
    res.status(500).send(`Failed to delete menu ${id}: ${e.message}`);
  }
};
