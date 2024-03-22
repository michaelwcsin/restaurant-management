import axios from "axios";
import React, { useEffect, useState } from "react";
import MenuItem from "./menuItem.component";

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios("http://localhost:8000/menus");
      setMenuItems(response.data);
      console.log(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="menu-list">
      {menuItems.map((menu) => (
        <MenuItem key={menu._id} menuItem={menu} />
      ))}
    </div>
  );
};

export default MenuList;
