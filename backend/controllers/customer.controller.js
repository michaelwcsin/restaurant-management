import {
  createCustomerInRepository,
  deleteCustomerFromRepository,
  getCustomersFromRepository,
  updateCustomersInRepository,
} from "../repositories/customer.repository.js";

// Customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await getCustomersFromRepository({});
    res.status(200).send(customers);
  } catch (e) {
    res.status(500).send(`Failed to get a list of customers: ${e.message}`);
  }
};

export const createCustomer = async (req, res) => {
  const { body } = req;
  try {
    const customer = await createCustomerInRepository(body);
    console.log(customer);
    res.status(200).send(customer);
  } catch (e) {
    res.status(500).send(e.message, `failed to get customer ${id}`);
  }
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const customer = await updateCustomersInRepository({ _id: id }, body);
    res.status(200).send(customer);
  } catch (e) {
    res.status(500).send(`Failed to update customer ${id}: ${e.message}`);
  }
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await deleteCustomerFromRepository({ _id: id });
    if (customer) {
      res.status(204).send();
    } else {
      res.status(404).send(`Failed to delete customer ${id}`);
    }
  } catch (e) {
    res.status(500).send(`Failed to delete customer ${id}: ${e.message}`);
  }
};
