import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Icon, Segment } from "semantic-ui-react";
import NavBar from "../../components/user/navBar/userNavBar.component";
import "./Restaurant.css"

const PlaceOrderPage = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurantAndMenuItems = async () => {
      try {
        const restaurantResponse = await axios.get(
          `http://localhost:8000/restaurants/${restaurantId}`
        );
        const fetchedRestaurant = restaurantResponse.data[0];
        console.log("Fetched Restaurant:", fetchedRestaurant);
        setRestaurant(fetchedRestaurant);

        const menuItemsData = await Promise.all(
          fetchedRestaurant.menuItems.map(async (itemId) => {
            const itemResponse = await axios.get(
              `http://localhost:8000/menus/${itemId}`
            );
            const menuItem = itemResponse.data[0];
            console.log("Fetched Menu Item:", menuItem);
            return menuItem;
          })
        );
        console.log("Menu Items Data:", menuItemsData);
        setMenuItems(menuItemsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchRestaurantAndMenuItems();
  }, [restaurantId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <NavBar/>
    <div className="container1">
      <h1>{restaurant.name}</h1>
      <p>Address: {restaurant.address}</p>
      <p>Contact: {restaurant.phone}</p>
      <div class="ui divider"></div>
      <h2>Menu</h2>
      {menuItems.length > 0 ? (
        <ul>
          {menuItems.map((menuItem) => (
            <Segment key={menuItem?._id}>
              <h3>
                {menuItem?.name}, ${menuItem?.price}
              </h3>
              <p>{menuItem?.description}</p>
              <Button>
                  <Icon name="shop" />
              </Button>
            </Segment>
          ))}
        </ul>
      ) : (
        <p>No menu items available</p>
      )}
      </div>
    </div>
  );
};

export default PlaceOrderPage;
