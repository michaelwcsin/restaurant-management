import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import OrderCard from "../../components/admin/ordercard/ordercard.component";
import "./Orders.css";

function Orders({ restaurantId }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [detailedOrders, setDetailedOrders] = useState([]);
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
        const filteredOrders = response.data.filter(
          (order) => order.restaurantId === restaurantId
        );
        console.log("Filtered Orders:", filteredOrders);
        setOrders(filteredOrders);
        setLoading(false);
        return filteredOrders;
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
        return [];
      }
    };

    const fetchData = async () => {
      const fetchedOrders = await fetchOrders();
      if (fetchedOrders.length > 0) {
        fetchOrderDetails(fetchedOrders);
      }
    };

    if (restaurantId) {
      fetchData();
    }
  }, [restaurantId]);

  useEffect(() => {
    console.log("Orders:", orders);
    if (orders.length > 0) {
      setDetailedOrders([]);
      fetchOrderDetails(orders);
    }
  }, [orders]);

  const fetchCustomerDetails = async (customerId) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/customers/${customerId}`
      );
      if (
        response.data &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        return response.data[0];
      } else {
        throw new Error("Customer not found or invalid response");
      }
    } catch (error) {
      console.error("Error fetching customer details:", error);
      return null;
    }
  };

  const fetchMenuDetails = async (menuId) => {
    try {
      const response = await axios.get(`http://localhost:8000/menus/${menuId}`);
      if (
        response.data &&
        Array.isArray(response.data) &&
        response.data.length > 0
      ) {
        return response.data[0];
      } else {
        throw new Error("Menu Item not found or invalid response");
      }
    } catch (error) {
      console.error("Error fetching menuItem details:", error);
      return null;
    }
  };

  const fetchOrderDetails = async (ordersData) => {
    try {
      const detailedOrders = await Promise.all(
        ordersData.map(async (order) => {
          try {
            console.log("Order ID:", order._id);
            const orderResponse = await axios.get(
              `http://localhost:8000/orders/${order._id}`
            );
            const customer = await fetchCustomerDetails(order.customerId);
            const menuItems = await Promise.all(
              order.menuItems.map(async (itemId) => {
                const menuItem = await fetchMenuDetails(itemId);
                return menuItem ? menuItem.name : "Unknown";
              })
            );

            return {
              ...orderResponse.data,
              _id: order._id,
              customerName: customer ? customer.name : "N/A",
              customerEmail: customer ? customer.email : "N/A",
              customerPhone: customer ? customer.phone : "N/A",
              menuItems,
              sumPrice: order.sumPrice,
              pickUpDate: order.pickUpDate || "N/A",
              pickUpTime: order.pickUpTime || "N/A",
              status: order.status,
            };
          } catch (error) {
            console.error("Error fetching order details:", error);
            return null;
          }
        })
      );

      const validOrders = detailedOrders.filter((order) => order !== null);
      setDetailedOrders(validOrders);
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  if (loading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="order-container">
      <h1 className="title">Orders</h1>
      <div className="order-list">
        {detailedOrders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
