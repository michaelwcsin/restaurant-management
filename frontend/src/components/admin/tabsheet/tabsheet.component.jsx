import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import {
  default as OrderCard,
  default as Orders,
} from "../../../pages/Manager/Orders";
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
      {
        menuItem: "Orders",
        render: () => (
          <Tab.Pane style={{ overflowY: "auto", height: "80vh" }}>
            {restaurant && (
              <Orders restaurantId={restaurant[0] ? restaurant[0] : null} />
            )}
          </Tab.Pane>
        ),
      },
      { menuItem: "Analytics", render: () => <TabPane>Tab 3 Content</TabPane> },
    ]}
  />
);

export default TabSheet;
