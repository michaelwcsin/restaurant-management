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

// PATCH (update Date and/or time of the order)
export const updatePickupsInRepository = async (query, update) => {
  try {
    const { date, pickUpTime } = update; 

    const updateFields = {};
    if (date) {
      updateFields.date = date;
    }
    if (pickUpTime) {
      updateFields.pickUpTime = pickUpTime;
    }

    const updatedPickup = await Pickup.findOneAndUpdate(
      { ...query },
      { $set: updateFields }, 
      { new: true }
    ).lean();

    if (!updatedPickup) {
      throw new Error("Pickup order not found");
    }

    return updatedPickup;
  } catch (e) {
    throw new Error(`Error while updating pickup order: ${e.message}`);
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