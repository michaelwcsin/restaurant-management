import React from "react";
import { TabPane } from "semantic-ui-react";
import MenuList from "../../user/menu/menuList.component";
import AddMenu from "../addmenu/addMenu.component";

const MenuItem = ({ restaurant }) => {
  return (
    <TabPane>
      <AddMenu restaurant={restaurant} />
      <MenuList restaurant={restaurant} /> {/* Again passes restaurant._id */}
    </TabPane>
  );
};

export default MenuItem;
