import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuList from "./components/user/menu/menuList.component";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8000/restaurants");
        console.log("Response:", response.data);
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="restaurant-list">
      <h1>Restaurants</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Restaurant 🔍"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : filteredRestaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        <div className="restaurant-container">
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant._id} className="restaurant-card">
              <h2>{restaurant.name}</h2>
              <p>
                <strong>Email:</strong> {restaurant.email}
              </p>
              <p>
                <strong>Address:</strong> {restaurant.address}
              </p>
              <ul>
                {restaurant.menuItems.map((menuItem) => (
                  <li key={menuItem._id}>{menuItem.name}</li>
                ))}
              </ul>
              <Link to={`/restaurants/${restaurant._id}/details`}>
                Place Order
              </Link>
            </div>
          ))}
        </div>
      )}

      <MenuList />
    </div>
  );
}

export default RestaurantList;
