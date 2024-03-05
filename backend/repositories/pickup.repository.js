import Pickup from "../models/pickup.model.js";

// GET
export const getPickupsFromRepository = async (query) => {
  try {
    const pickups = await Pickup.find(query);
    return pickups;
  } catch (e) {
    throw Error("Error while fetching pickups");
  }
};

// PATCH
export const updatePickupsInRepository = async (query, update) => {
  try {
    const pickups = await Pickup.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return pickups;
  } catch (e) {
    throw Error("Error while updating pickups");
  }
};

// DELETE
export const deletePickupFromRepository = async (query) => {
  try {
    const pickups = await Pickup.findOneAndDelete({ ...query });
    return pickups;
  } catch (e) {
    throw Error("Error while deleting a pickups");
  }
};

export const createPickupInRepository = async (data) => {
  try {
    const { orderId, date, pickUpTime } = data;
    const existingPickup = await Pickup.findOne({ email });
    if (existingPickup) {
      throw new Error("Pickup already exists");
    }
    const newPickup = new Pickup({
      orderId,
      date,
      pickUpTime,
    });
    const savedPickup = await newPickup.save();
    return savedPickup;
  } catch (error) {
    throw new Error(`Failed to create pickups: ${error.message}`);
  }
};
