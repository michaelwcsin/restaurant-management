import React from "react";
import MenuItem from "./menuItem.component";

const MenuList = ({ filteredMenuItems, handleRefresh, restaurant }) => {
  return (
    <div className="menu-list">
      {filteredMenuItems.map((menu) => (
        <MenuItem
          restaurant={restaurant}
          key={menu._id}
          menuItem={menu}
          handleRefresh={handleRefresh}
        />
      ))}
    </div>
  );
};

export default MenuList;
