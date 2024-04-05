import axios from "axios";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./restaurantCard.component";
import "./restaurantList.styles.css";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await axios("http://localhost:8000/restaurants");
      setRestaurants(response.data);
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default  RestaurantList;
