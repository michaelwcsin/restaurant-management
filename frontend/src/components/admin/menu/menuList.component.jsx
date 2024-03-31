import React from "react";
import MenuItem from "./menuItem.component";

const MenuList = ({ filteredMenuItems }) => {
  return (
    <div className="menu-list">
      {filteredMenuItems.map((menu) => (
        <MenuItem key={menu._id} menuItem={menu} />
      ))}
    </div>
  );
};

export default MenuList;
