import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import MenuList from "../../user/menu/menuList.component";
import "./tabsheet.styles.css";

const panes = [
  {
    menuItem: "Menu Items",
    render: () => (
      <TabPane>
        <MenuList />
      </TabPane>
    ),
  },
  { menuItem: "Orders", render: () => <TabPane>Tab 2 Content</TabPane> },
  { menuItem: "Analytics", render: () => <TabPane>Tab 3 Content</TabPane> },
];

const TabSheet = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
);

export default TabSheet;
