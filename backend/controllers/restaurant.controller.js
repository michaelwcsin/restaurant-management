export const getRestaurants = async (req, res) => {
  try {
    const restaurants = await getRestaurantsFromRepository({});
    res.status(200).send(restaurants);
  } catch (e) {
    res.status(500).send(`Failed to get a list of restaurants: ${e.message}`);
  }
};

export const createRestaurant = async (req, res) => {
  const { body } = req;
  try {
    const restaurants = await createRestaurantInRepository(body);
    console.log(restaurants);
    res.status(200).send(restaurants);
  } catch (e) {
    res.status(500).send(e.message, `failed to get restaurants ${id}`);
  }
};

export const updateRestaurant = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const restaurants = await updateRestaurantsInRepository({ _id: id }, body);
    res.status(200).send(restaurants);
  } catch (e) {
    res.status(500).send(`Failed to update restaurants ${id}: ${e.message}`);
  }
};

export const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurants = await deleteRestaurantFromRepository({ _id: id });
    if (restaurants) {
      res.status(204).send();
    } else {
      res.status(404).send(`Failed to delete restaurants ${id}`);
    }
  } catch (e) {
    res.status(500).send(`Failed to delete restaurants ${id}: ${e.message}`);
  }
};
