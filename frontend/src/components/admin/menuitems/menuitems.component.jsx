import React from "react";
import { TabPane } from "semantic-ui-react";
import MenuList from "../../user/menu/menuList.component";
import AddMenu from "../addmenu/addMenu.component";

const MenuItem = () => {
  return (
    <TabPane>
      <AddMenu />
      <MenuList />
    </TabPane>
  );
};

export default MenuItem;
