import Restaurant from "../models/restaurant.model.js";

// GET
export const getRestaurantsFromRepository = async (query) => {
  try {
    const restaurants = await Restaurant.find(query);
    return restaurants;
  } catch (e) {
    throw Error("Error while fetching restaurants");
  }
};

// PATCH
export const updateRestaurantsInRepository = async (query, update) => {
  try {
    const restaurant = await Restaurant.findOneAndUpdate(
      { ...query },
      { ...update },
      { new: true }
    ).lean();
    return restaurant;
  } catch (e) {
    throw Error("Error while updating restaurant");
  }
};

// DELETE
export const deleteRestaurantFromRepository = async (query) => {
  try {
    const restaurant = await Restaurant.findOneAndDelete({ ...query });
    return restaurant;
  } catch (e) {
    throw Error("Error while deleting a restaurant");
  }
};

export const createRestaurantInRepository = async (data) => {
  try {
    const { name, email, address, phone, password } = data;
    const existingRestaurant = await Restaurant.findOne({ email });
    if (existingRestaurant) {
      throw new Error("Restaurant already exists");
    }
    const newRestaurant = new Restaurant({
      name,
      email,
      address,
      phone,
      password,
    });
    const savedRestaurant = await newRestaurant.save();
    return savedRestaurant;
  } catch (error) {
    throw new Error(`Failed to create restaurant: ${error.message}`);
  }
};
