import Customer from "../models/customer.model.js";

// GET
export const getCustomersFromRepository = async (query) => {
  try {
    const customers = await Customer.find(query);
    return customers;
  } catch (e) {
    throw Error("Error while fetching customers");
  }
}

// GET
export const getCustomerFromRepository = async (query) => {
  try {
    const customer = await Customer.findOne(query);
    return customer;
  } catch (e) {
    throw Error("Error while fetching a customer");
  }
}

// CREATE
export const createCustomersInRepository = async (data) => {
  try {
    const customer = await Customer.create(data);
    return customer;
  } catch (e) {
    throw Error("Error while creating a customer");
  }
}

// PATCH
export const updateCustomersInRepository = async (query, update) => {
  try {
    const customer = await Customer.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return customer;
  } catch (e) {
    throw Error("Error while updating customer");
  } 
}

// DELETE
export const deleteCustomerFromRepository = async (query) => {
  try {
    const customer = await Customer.findOneAndDelete({ ...query });
    return customer;
  } catch (e) {
    throw Error("Error while deleting a customer");
  }
}
