import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PlaceOrderPage = () => {
  const { restaurantId } = useParams();
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/restaurants/${restaurantId}/menu`
        );
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        // Handle error state or display error message
      }
    };

    fetchMenuItems();
  }, [restaurantId]);

  return (
    <div>
      <h1>Menu Items for Restaurant</h1>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem._id}>
            {menuItem.name} - ${menuItem.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceOrderPage;
