import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRestaurant } from "../../components/admin/restaurants/RestaurantContext";
import TabSheet from "../../components/admin/tabsheet/tabsheet.component";
import "./adminPage.styles.css";

// TODO: Given this page with the restaurant _id, add components of menu list for specific restaurant -> alter status of menu item
// TODO: Add - add/remove menu item to this page
// TODO: Check orders
// TODO: Analytics

const AdminPage = () => {
  const { selectedRestaurant } = useRestaurant();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      const response = await axios("http://localhost:8000/menus");
      setMenus(response.data);
    };
    fetchMenus();
  }, []);

  const filteredMenus = menus.filter((menu) =>
    selectedRestaurant.menuItems.includes(menu._id)
  );

  return (
    <div className="admin-sheet">
      <h2>{selectedRestaurant.name}</h2>
      <h4>{selectedRestaurant.address}</h4>
      <h4>{selectedRestaurant.phone}</h4>
      <h4>{selectedRestaurant._id}</h4>
      <h4>{selectedRestaurant.menuItems}</h4>
      <ul>
        {filteredMenus.map((menu) => (
          <li key={menu._id}>
            {menu.name} // {menu.description} // ${menu.price}
          </li>
        ))}
      </ul>
      <TabSheet />
      {/* <p>{selectedRestaurant._id}</p> */}
    </div>
  );
};

export default AdminPage;
