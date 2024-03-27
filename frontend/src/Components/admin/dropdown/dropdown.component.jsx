import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

const RestaurantSelect = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`http://localhost:8000/restaurants`);
        setRestaurants(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Dropdown
      className="restaurant-list"
      placeholder="Select Restaurant"
      fluid
      search
      selection
      options={restaurants.map((restaurant) => ({
        key: restaurant._id,
        text: restaurant.name,
        value: restaurant.name,
      }))}
      style={{ width: "40%" }}
    />
  );
};

export default RestaurantSelect;
