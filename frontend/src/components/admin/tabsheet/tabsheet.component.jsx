import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import Orders from "../../../pages/Manager/Orders";
import AdminMenu from "../menuitems/adminMenu.component";
import "./tabsheet.styles.css";
import axios from "axios";
import Analytics from "../analytics/analytics.component";

const TabSheet = ({ restaurant }) => { // this restaurant is the objectID of the restaurant

    return (
        <div>
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
                    {
                        menuItem: "Analytics", //pass the restaurant ID to get the orders from that restaurant only
                        render: () => <Analytics/>,

                    },
                ]}
            />
        </div>
    );
};

export default TabSheet;
