import Order from "../models/order.model.js";

// GET
export const getOrdersFromRepository = async (query) => {
  try {
    const orders = await Order.find(query);
    return orders;
  } catch (e) {
    throw Error("Error while fetching orders");
  }
};

// PATCH
export const updateOrdersInRepository = async (query, update) => {
  try {
    const orders = await Order.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return orders;
  } catch (e) {
    throw Error("Error while updating order");
  }
};

// DELETE
export const deleteOrderFromRepository = async (query) => {
  try {
    const orders = await Order.findOneAndDelete({ ...query });
    return orders;
  } catch (e) {
    throw Error("Error while deleting a order");
  }
};

export const createOrderInRepository = async (data) => {
  try {
    const { customerId, restaurantId, menuItems, sumPrice } = data;
    const existingOrder = await Order.findOne({ _id });
    if (existingOrder) {
      throw new Error("Order already exists");
    }
    const newOrder = new Order({
      customerId,
      restaurantId,
      menuItems,
      sumPrice,
    });
    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    throw new Error(`Failed to create orders: ${error.message}`);
  }
};
