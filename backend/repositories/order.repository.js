import Order from "../models/order.model.js";
import Menu from "../models/menu.model.js";

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
    const existingOrder = await Order.findOne({ ...query });

    if (!existingOrder) {
      throw new Error("Order not found");
    }

    const updatedMenus = [
      ...existingOrder.menuItems,
      ...(update.menuItems ? update.menuItems.filter((item) => !existingOrder.menuItems.includes(item)) : []),
    ];

    const menuItemsPrices = await Menu.find({ _id: { $in: updatedMenus } }, 'price');
    const sumPrice = menuItemsPrices.reduce((total, menuItem) => total + menuItem.price, 0);

    let status = existingOrder.status; 
    if (update.status) {
      const validStatuses = ["in-progress", "awaiting-pickup", "completed", "cancelled"];
      if (validStatuses.includes(update.status)) {
        status = update.status;
      } else {
        throw new Error("Invalid status provided");
      }
    }

    const pickUpDate = update.pickUpDate ? update.pickUpDate : existingOrder.pickUpDate;
    const pickUpTime = update.pickUpTime ? update.pickUpTime : existingOrder.pickUpTime;

    const updatedOrder = await Order.findOneAndUpdate(
      { ...query },
      { 
        menuItems: updatedMenus, 
        sumPrice: sumPrice, 
        status: status,
        pickUpDate: pickUpDate,
        pickUpTime: pickUpTime
      }, 
      { new: true }
    ).lean();

    return updatedOrder;
  } catch (e) {
    throw new Error(`Error while updating order: ${e.message}`);
  }
};


// DELETE
export const deleteOrderFromRepository = async (query) => {
  try {
    const orders = await Order.findOneAndDelete({ ...query });
    return orders;
  } catch (e) {
    throw new Error("Error while deleting an order");
  }
};

export const createOrderInRepository = async (data) => {
  try {
    const { customerId, restaurantId, menuItems, pickUpDate, pickUpTime } = data;

    let calculatedSumPrice = 0; 

    
    for (const menuItemId of menuItems) {
      const menuItem = await Menu.findById(menuItemId);
      if (menuItem) {
        calculatedSumPrice += menuItem.price || 0; 
      }
    }

    const newOrder = new Order({
      customerId,
      restaurantId,
      menuItems,
      sumPrice: calculatedSumPrice, 
      status: "ordered",
      pickUpDate, 
      pickUpTime,
    });

    const savedOrder = await newOrder.save();
    return savedOrder;
  } catch (error) {
    throw new Error(`Failed to create order: ${error.message}`);
  }
};



export const getOrderFromRepository = async (query) => {
  try {
    const order = await Order.find(query);
    return order;
  } catch (e) {
    throw Error("Error while fetching order");
  }
};