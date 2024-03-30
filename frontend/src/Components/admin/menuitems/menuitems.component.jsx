import React from "react";
import { TabPane } from "semantic-ui-react";
import MenuList from "../../user/menu/menuList.component";
import AddMenu from "../menuinteraction/addMenu.component";

const MenuItem = ({ restaurant }) => {
  return (
    <TabPane style={{ overflowY: "auto", height: "80vh" }}>
      <AddMenu restaurant={restaurant} />
      <MenuList restaurant={restaurant} />
    </TabPane>
  );
};

export default MenuItem;
