import React from "react";
import { Tab, TabPane } from "semantic-ui-react";
import Orders from "../../../pages/Manager/Orders"; // Ensure correct import if Orders is the default export
import AdminMenu from "../menuitems/adminMenu.component";
import "./tabsheet.styles.css";

const TabSheet = ({ restaurant }) => {
    const restaurantName = restaurant?.name;

    return (
        <div>
            {restaurantName && (
                <h2 className="restaurant-name-header">{restaurantName}</h2>
            )}
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
                                    <Orders restaurantId={restaurant._id} />
                                )}
                            </Tab.Pane>
                        ),
                    },
                    {
                        menuItem: "Analytics",
                        render: () => <TabPane>Tab 3 Content</TabPane>,
                    },
                ]}
            />
        </div>
    );
};

export default TabSheet;
