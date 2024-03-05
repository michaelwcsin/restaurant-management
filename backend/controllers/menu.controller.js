import {
  createMenusInRepository,
  deleteMenuFromRepository,
  getMenusFromRepository,
  updateMenusInRepository,
} from "../repositories/menu.repository.js";

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
    const menus = await createMenusInRepository(body);
    console.log(menus);
    res.status(200).send(menus);
  } catch (e) {
    res.status(500).send(e.message, `failed to get menus ${id}`);
  }
};

export const updateMenu = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const menus = await updateMenusInRepository({ _id: id }, body);
    res.status(200).send(menus);
  } catch (e) {
    res.status(500).send(`Failed to update menus ${id}: ${e.message}`);
  }
};

export const deleteMenu = async (req, res) => {
  const { id } = req.params;
  try {
    const menus = await deleteMenuFromRepository({ _id: id });
    if (menus) {
      res.status(204).send();
    } else {
      res.status(404).send(`Failed to delete menus ${id}`);
    }
  } catch (e) {
    res.status(500).send(`Failed to delete menus ${id}: ${e.message}`);
  }
};
