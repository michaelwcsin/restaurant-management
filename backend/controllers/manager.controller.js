import {
  getManagerFromRepository,
  getManagersFromRepository,
  updateManagersInRepository,
} from "../repositories/manager.respository.js";

export const getManagers = async (req, res) => {
  try {
    const managers = await getManagersFromRepository({});
    res.status(200).send(managers);
  } catch (e) {
    res.status(500).send(`Failed to get a list of managers: ${e.message}`);
  }
};

export const getManager = async (req, res) => {
  const { id } = req.params;
  try {
    const manager = await getManagerFromRepository({ _id: id });
    res.status(200).send(manager);
  } catch (e) {
    res.status(500).send(e.message, `failed to fetch manager ${id}`);
  }
};

export const updateManager = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const restaurants = await updateManagersInRepository({ _id: id }, body);
    res.status(200).send(restaurants);
  } catch (e) {
    res.status(500).send(`Failed to update managers ${id}: ${e.message}`);
  }
};
