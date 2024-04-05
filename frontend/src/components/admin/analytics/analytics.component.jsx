import React, {useEffect, useState} from "react";
import axios from "axios";
import {Header, TabPane} from "semantic-ui-react";

const Analytics = ({ restaurant }) => {
    const [selectedRestaurant, setSelectedRestaurant] = useState({});
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            if (restaurant) {
                try {
                    // GET information of restaurant
                    const response = await axios(
                        `http://localhost:8000/restaurants/${restaurant}`
                    );
                    // Deconstruct restaurant information
                    const [restaurantData] = response.data;
                    const { name, email, address, phone, menuItems } = restaurantData;
                    setSelectedRestaurant({ name, email, address, phone, menuItems });

                    // GET menu database response
                    const menuResponse = await axios("http://localhost:8000/menus");
                    setMenus(menuResponse.data);
                } catch (error) {
                    console.error("Error fetching:", error);
                }
            }
        };
        fetchRestaurants();
    }, [restaurant]);

    return (
        <TabPane style={{ overflowY: "auto", height: "80vh" }}>
            <Header style={{ fontSize: '28px', padding: '10px' }}
            >{selectedRestaurant.name}</Header>
            <h2> Tab 3 Analytics Content is</h2>
            />
        </TabPane>
    );
};

export default Analytics;