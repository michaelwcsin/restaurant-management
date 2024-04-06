import Manager from "../models/manager.model.js";

export const checkLoginInfoManagers = async (email, password) => {
  try {
    // look for the manager by email first
    console.log("in controller.js: email:", email);
    console.log("Email:", email);
    console.log("Password:", password);
    const manager = await Manager.findOne({ email: email });
    // const manager = await Manager.find({ email: 'manager.a@example.com'});
    // if manager doesn't exist or password doesn't match, return false
    if (!manager || manager.password !== password) {
      console.log("Manager doesn't exist:", email, password)
      return false;
    }

    return true;
  } catch (error) {
    // If there's an error (e.g., database connection issue), log it and return false
    console.error("Error checking manager login info:", error);
    return false;
  }
};

// GET
export const getManagersFromRepository = async (query) => {
  try {
    const managers = await Manager.find(query);
    return managers;
  } catch (e) {
    throw Error("Error while fetching managers");
  }
};

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
