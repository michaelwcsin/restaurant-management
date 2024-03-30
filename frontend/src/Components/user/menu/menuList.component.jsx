import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuItem from "./menuItem.component";

const MenuList = ({ restaurant }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState({});
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    // Based on the passed restaurantID from manager list -> manager page -> tab sheet -> menu item -> to here
    const fetchRestaurants = async () => {
      if (restaurant) {
        try {
          // GET information of restaurant
          const response = await axios(
            `http://localhost:8000/restaurants/${restaurant}`
          );
          // Deconstruct restaurant information
          const [restaurantData] = response.data;
          const { name, email, address, phone, menuItems } = restaurantData;
          setSelectedRestaurant({ name, email, address, phone, menuItems });

          // GET menu database response
          const menuResponse = await axios("http://localhost:8000/menus");
          setMenus(menuResponse.data);
        } catch (error) {
          console.error("Error fetching:", error);
        }
      }
    };
    fetchRestaurants();
  }, [restaurant]);

  // Filters out menu items based on restaurant menuItems
  const filteredMenuItems = menus.filter((menu) =>
    selectedRestaurant.menuItems
      ? selectedRestaurant.menuItems.includes(menu._id)
      : false
  );

  return (
    <div className="menu-list">
      {filteredMenuItems.map((menu) => (
        <MenuItem key={menu._id} menuItem={menu} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default MenuList;
