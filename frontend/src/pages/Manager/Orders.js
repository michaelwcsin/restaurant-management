import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function Orders({ restaurantId }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8000/orders");
        const filteredOrders = response.data.filter(order => order.restaurantId === restaurantId);
        setOrders(filteredOrders);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    if (restaurantId) {
      fetchOrders();
    }
  }, [restaurantId]);

  useEffect(() => {
    console.log("Orders:", orders);
    if (orders.length > 0) {
      fetchOrderDetails();
    }
  }, [orders]);

  const fetchCustomerDetails = async (customerId) => {
    try {
      const response = await axios.get(`http://localhost:8000/customers/${customerId}`);
      const customer = response.data; 
      console.log("Fetched Customer:", customer); 
      return customer;
    } catch (error) {
      console.error("Error fetching customer details:", error);
      return null;
    }
  };
  
  
  

  const fetchMenuDetails = async (menuId) => {
    try {
      const response = await axios.get(`http://localhost:8000/menus/${menuId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching menu details:", error);
      return null;
    }
  };

  const fetchOrderDetails = async () => {
    try {
      const detailedOrders = await Promise.all(
        orders.map(async (order) => {
          try {
            const orderResponse = await axios.get(`http://localhost:8000/orders/${order._id}`);
            const customer = await fetchCustomerDetails(order.customerId);
            const menuItems = await Promise.all(order.menuItems.map(async (itemId) => {
              return fetchMenuDetails(itemId);
            }));
            const totalPrice = menuItems.reduce((acc, item) => acc + item.price, 0);

            
          console.log("Customer Name:", customer ? customer.name : "Unknown");
            
            return {
              ...orderResponse.data,
              customerName: customer ? customer.name : "Unknown",
              menuItems,
              totalPrice,
            };
          } catch (error) {
            console.error("Error fetching order details:", error);
            return null;
          }
        })
      );

      const validOrders = detailedOrders.filter(order => order !== null);
      if (isMounted.current) {
        setOrders(validOrders);
      }
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Orders</h1>
      <ul className="order-list">
      {orders.map((order) => (
  <li key={order._id} className="order-item">
    <p>Order ID: {order._id}</p>
    <p>Customer ID: {order.customerId}</p> 
    <p>Menu Items:</p>
    <ul>
      {order.menuItems.map((itemId) => (
        <li key={itemId}>
          
          {itemId} - Price: ${order.sumPrice}
        </li>
      ))}
    </ul>
          <p>Total Price: ${order.sumPrice}</p> 
        </li>


        ))}
      </ul>
    </div>
  );
}

export default Orders;
