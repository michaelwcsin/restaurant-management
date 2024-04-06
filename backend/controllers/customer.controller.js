import {
  createCustomerInRepository,
  deleteCustomerFromRepository,
  getCustomerFromRepository,
  getCustomersFromRepository,
  updateCustomersInRepository,
  checkLoginInfoCustomer,
} from "../repositories/customer.repository.js";

//check log in info
export const loginCustomer = async(req, res) => {
  const {email, password } = req.body;
  try {
    // check if manager exists
    const customer = await checkLoginInfoCustomer(email, password);
    console.log("in controller.js", customer);
    if (!customer) { //fail
      return res.status(401).json({ message: 'Login failed '+ email+ " "+password});
    }
    //successful login
    res.json({ success: true, message: 'Login successful' });

  } catch (e) {
    res.status(500).send(`Failed to get check for customer's login ${e.message}`);
  }
};


export const getCustomers = async (req, res) => {
  try {
    const customers = await getCustomersFromRepository({});
    res.status(200).send(customers);
  } catch (e) {
    res.status(500).send(`Failed to get a list of customers: ${e.message}`);
  }
};

export const getCustomer = async (req, res) => {
  const { id } = req.params;
  try {
    const customer = await getCustomerFromRepository({ _id: id });
    res.status(200).send(customer);
  } catch (e) {
    res.status(500).send(e.message, `failed to fetch customer ${id}`);
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
