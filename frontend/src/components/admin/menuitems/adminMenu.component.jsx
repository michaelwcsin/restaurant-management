import axios from "axios";
import React, { useEffect, useState } from "react";
import { TabPane } from "semantic-ui-react";
import MenuList from "../menu/menuList.component";
import AddMenu from "../menuinteraction/addMenu.component";

const AdminMenu = ({ restaurant }) => {
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

  const handleRefresh = async () => {
    try {
      // Fetch updated restaurant details
      const updatedRestaurantResponse = await axios.get(
        `http://localhost:8000/restaurants/${restaurant}`
      );
      const [restaurantData] = updatedRestaurantResponse.data;
      const { name, email, address, phone, menuItems } = restaurantData;
      setSelectedRestaurant({ name, email, address, phone, menuItems });

      // GET menu database response
      const menuResponse = await axios("http://localhost:8000/menus");
      setMenus(menuResponse.data);
    } catch (error) {
      console.error("Error refreshing data:", error);
    }
  };

  // Filters out menu items based on restaurant menuItems
  const filteredMenuItems = menus.filter((menu) =>
    selectedRestaurant.menuItems
      ? selectedRestaurant.menuItems.includes(menu._id)
      : false
  );

  return (
    <TabPane style={{ overflowY: "auto", height: "80vh" }}>
      <AddMenu restaurant={restaurant} handleRefresh={handleRefresh} />
      <MenuList
        restaurant={restaurant}
        filteredMenuItems={filteredMenuItems}
        handleRefresh={handleRefresh}
      />
    </TabPane>
  );
};

export default AdminMenu;
