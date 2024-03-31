import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import AdminMenu from "../menuitems/adminMenu.component";
import "./tabsheet.styles.css";

const TabSheet = ({ restaurant }) => (
  <Tab
    menu={{ fluid: true, vertical: true, tabular: true }}
    panes={[
      {
        menuItem: "Menu Items",
        render: () => <AdminMenu restaurant={restaurant} />,
      },
      { menuItem: "Orders", render: () => <TabPane>Tab 2 Content</TabPane> },
      { menuItem: "Analytics", render: () => <TabPane>Tab 3 Content</TabPane> },
    ]}
  />
);

export default TabSheet;
