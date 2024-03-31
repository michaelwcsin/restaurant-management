import React from "react";
import { TabPane } from "semantic-ui-react";
import MenuList from "../menu/menuList.component";
import AddMenu from "../menuinteraction/addMenu.component";

const AdminMenu = ({ restaurant }) => {
  return (
    <TabPane style={{ overflowY: "auto", height: "80vh" }}>
      <AddMenu restaurant={restaurant} />
      <MenuList restaurant={restaurant} />
    </TabPane>
  );
};

export default AdminMenu;
