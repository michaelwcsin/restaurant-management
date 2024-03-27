import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import "./tabsheet.styles.css";

const panes = [
  { menuItem: "Menu Items", render: () => <TabPane>Tab 1 Content</TabPane> },
  { menuItem: "Orders", render: () => <TabPane>Tab 2 Content</TabPane> },
  { menuItem: "Analytics", render: () => <TabPane>Tab 3 Content</TabPane> },
];

const TabSheet = () => (
  <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
);

export default TabSheet;
