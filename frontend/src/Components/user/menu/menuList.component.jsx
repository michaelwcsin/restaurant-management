import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuItem from "./menuItem.component";

const MenuList = ({ restaurant }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState({});
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    //
    const fetchRestaurants = async () => {
      if (restaurant) {
        try {
          const response = await axios(
            `http://localhost:8000/restaurants/${restaurant}`
          );
          const [restaurantData] = response.data;
          const { name, email, address, phone, menuItems } = restaurantData;
          setSelectedRestaurant({ name, email, address, phone, menuItems });

          const menuResponse = await axios("http://localhost:8000/menus");
          setMenus(menuResponse.data);
        } catch (error) {
          console.error("Error fetching:", error);
        }
      }
    };
    fetchRestaurants();
  }, [restaurant]);

  const filteredMenuItems = menus.filter((menu) =>
    selectedRestaurant.menuItems
      ? selectedRestaurant.menuItems.includes(menu._id)
      : false
  );

  return (
    <div className="menu-list">
      {filteredMenuItems.map((menu) => (
        <MenuItem key={menu._id} menuItem={menu} />
      ))}
    </div>
  );
};

export default MenuList;
