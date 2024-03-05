import {
  createPickupInRepository,
  deletePickupFromRepository,
  getPickupsFromRepository,
  updatePickupsInRepository,
} from "../repositories/menu.repository.js";

export const getPickups = async (req, res) => {
  try {
    const pickup = await getPickupsFromRepository({});
    res.status(200).send(pickup);
  } catch (e) {
    res.status(500).send(`Failed to get a list of pickup: ${e.message}`);
  }
};

export const createPickup = async (req, res) => {
  const { body } = req;
  try {
    const pickup = await createPickupInRepository(body);
    console.log(pickup);
    res.status(200).send(pickup);
  } catch (e) {
    res.status(500).send(e.message, `failed to get pickup ${id}`);
  }
};

export const updatePickup = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const pickup = await updatePickupsInRepository({ _id: id }, body);
    res.status(200).send(pickup);
  } catch (e) {
    res.status(500).send(`Failed to update pickup ${id}: ${e.message}`);
  }
};

export const deletePickup = async (req, res) => {
  const { id } = req.params;
  try {
    const pickup = await deletePickupFromRepository({ _id: id });
    if (pickup) {
      res.status(204).send();
    } else {
      res.status(404).send(`Failed to delete pickup ${id}`);
    }
  } catch (e) {
    res.status(500).send(`Failed to delete pickup ${id}: ${e.message}`);
  }
};
