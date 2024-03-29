import Manager from "../models/manager.model.js";

// GET
export const getManagerFromRepository = async (query) => {
  try {
    const manager = await Manager.find(query);
    return manager;
  } catch (e) {
    throw Error("Error while fetching manager");
  }
};

// PATCH
export const updateManagersInRepository = async (query, update) => {
  try {
    const manager = await Manager.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return manager;
  } catch (e) {
    throw Error("Error while updating manager");
  }
};