import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Segment, Tab, TabPane } from "semantic-ui-react";
import NavBar from "../../components/user/navBar/userNavBar.component";
import "./placeorder.css";
import { Dropdown } from "semantic-ui-react";
import Checkout from "./checkoutpage";

const PlaceOrderPage = () => {
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState("");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/customers");
        console.log("Response:", response.data);
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };
    fetchCustomers();
  }, []);

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

  const handleAdd = async (item, itemPrice) => {
    cart.push(item);
    addPrice(itemPrice);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  
  };

  const handleRemove = async (item, itemPrice) => {
    const index = cart.indexOf(item);
    const newCart = [...cart];
    newCart.splice(index, 1);
    subPrice(itemPrice);
    setCartItems(newCart);
  };

  const addPrice = async (itemPrice) => {
    let cost = 0;
    cost = total + itemPrice;
    cost = Math.round(cost * 100) / 100;
    setTotal(cost);
  };

  const subPrice = async (itemPrice) => {
    let cost = 0;
    cost = total - itemPrice;
    cost = Math.round(cost * 100) / 100;
    if (cost <= 0) {
      setTotal(0);
    } else {
      setTotal(cost);
    }
  };

  const convertToId = async () => {
    const arr = [];
    console.log(cart)
    for (let i = 0; i <= cart.length; i++) {
      if (cart[i]){
      const id = cart[i]._id;
      arr.push(id);
      }
    }
    return arr;
  };

  const handleCustomer = (id) => {
    setCustomer(id);
  };
  
  const order = {
    customerId: customer,
    restaurantId: restaurantId,
    menuItems: convertToId(),
    sumPrice: total,
  }

  const handleOrder = async () => {
    axios.post("http://localhost:8000/orders",order)
    .then((result) => {
      console.log("Document inserted successfully",result.data);
    })
    .catch((err) => {
      console.error("Failed to insert document",err);
    });
    setCheckoutOpen(true);
  }

  return (
    <div>
      <NavBar />
      <Dropdown
        className="userDrop"
        placeholder="Select Customer"
        fluid
        search
        selection
        clearable
        floating
        options={customers.map((customer) => ({
          key: customer._id,
          text: customer.name,
          value: customer._id,
          onselect: () => handleCustomer(customer._id),
        }))}
      />
      <Tab
        className="tabs"
        menu={{ fluid: true, vertical: true, tabular: true }}
        panes={[
          {
            menuItem: "Menu",
            render: () => (
              <TabPane style={{ overflowY: "auto", height: "80vh" }}>
                <div className="container1">
                  <h1>{restaurant.name}</h1>
                  <p>Address: {restaurant.address}</p>
                  <p>Contact: {restaurant.phone}</p>
                  <div className="ui divider"></div>
                  <h2 className="ui center aligned header">Menu</h2>
                  {menuItems.length > 0 ? (
                    <ul>
                      {menuItems.map((menuItem) => (
                        <Segment key={menuItem?._id}>
                          <h3>
                            {menuItem?.name}, ${menuItem?.price}
                          </h3>
                          <p>{menuItem?.description}</p>
                          {cart.some((item) => item._id === menuItem._id) ? (
                            <div className="ui buttons">
                              <button
                                className="ui vertical animated button"
                                tabIndex="0"
                                onClick={(e) => handleAdd(menuItem, menuItem.price, e)}
                              >
                                <div className="hidden content">Add</div>
                                <div className="visible content">
                                  <i className="shop icon"></i>
                                </div>
                              </button>
                              <button
                                className="ui vertical animated button"
                                tabIndex="0"
                                onClick={(e) => handleRemove(menuItem, menuItem.price, e)}
                              >
                                <div className="hidden content">Remove</div>
                                <div className="visible content">
                                  <i className="trash alternate outline icon"></i>
                                </div>
                              </button>
                              
                            </div>
                          ) : (
                            <button
                              className="ui vertical animated button"
                              tabIndex="0"
                              onClick={(e) => handleAdd(menuItem, menuItem.price, e)}
                            >
                              <div className="hidden content">Add</div>
                              <div className="visible content">
                                <i className="shop icon"></i>
                              </div>
                            </button>
                          )}
                        </Segment>
                      ))}
                    </ul>
                  ) : (
                    <p>No menu items available</p>
                  )}
                </div>
              </TabPane>
          
            ), // This can be imported from another file, take a look at admin/menuitems/adminmenu.component.jsx
          },
          {
            menuItem: `Cart - $${total} (🛒 ${cart.length})`,
            render: () => (
              <TabPane style={{ overflowY: "auto", height: "80vh" }}>
                {" "}
                <div className="container1">
                  <h1>{restaurant.name}</h1>
                  <p>Address: {restaurant.address}</p>
                  <p>Contact: {restaurant.phone}</p>
                  <div class="ui divider"></div>
                  <h2 class="ui center aligned header">Cart</h2>
                  {cart.length > 0 ? (
                    <ul>
                      {cart.map((item) => (
                        <Segment key={item?._id}>
                          <h3>
                            {item?.name}, ${item?.price}
                          </h3>
                          <p>{item?.description}</p>
                          <div
                            class="ui vertical button"
                            tabindex="0"
                            onClick={(e) => handleRemove(item, item.price, e)}
                          >
                            Remove
                          </div>
                        </Segment>
                      ))}
                    </ul>
                  ) : (
                    <p>No Items In Cart</p>
                  )}
                  <h3>Total: ${total}</h3>
                  {!checkoutOpen && (
                    <button className="ui toggle button active" onClick={handleOrder}>
                      Checkout
                    </button>
                  )}
                  {checkoutOpen && <Checkout />}
                </div>
              </TabPane>
            ),
          },
          {
            menuItem: "History",
            render: () => (
              <TabPane>
                <h2 class="ui center aligned header">Cart</h2>
              </TabPane>
            ),
          },
        ]}
      />
      {showPopup && (
        <div className="popup">
          Item successfully added to cart
        </div>
      )}
    </div>
  );
};

export default PlaceOrderPage;
