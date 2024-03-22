import Customer from "../models/customer.model.js";

// GET customer list
export const getCustomersFromRepository = async (query) => {
  try {
    const customers = await Customer.find(query);
    return customers;
  } catch (e) {
    throw Error("Error while fetching customers");
  }
};

// GET single customer
export const getCustomerFromRepository = async (query) => {
  try {
    const customer = await Customer.find(query);
    return customer;
  } catch (e) {
    throw Error("Error while fetching customer");
  }
};

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
};

// DELETE
export const deleteCustomerFromRepository = async (query) => {
  try {
    const customer = await Customer.findOneAndDelete({ ...query });
    return customer;
  } catch (e) {
    throw Error("Error while deleting a customer");
  }
};

export const createCustomerInRepository = async (data) => {
  try {
    const { name, email, address, phone, password } = data;
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      throw new Error("Customer already exists");
    }
    const newCustomer = new Customer({
      name,
      email,
      address,
      phone,
      password,
    });
    const savedCustomer = await newCustomer.save();
    return savedCustomer;
  } catch (error) {
    throw new Error(`Failed to create customer: ${error.message}`);
  }
};
