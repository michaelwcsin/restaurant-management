import React from "react";
import { useRestaurant } from "../../components/admin/restaurants/RestaurantContext";

// TODO: Given this page, add components of menu list for specific restaurant -> alter status of menu item
// TODO: Add - add/remove menu item to this page
// TODO: Check orders
// TODO: Analytics

const AdminPage = () => {
  const { selectedRestaurant } = useRestaurant();

  return (
    <div>
      <p>{selectedRestaurant._id}</p>
      <p>{selectedRestaurant.name}</p>
      <p>{selectedRestaurant.address}</p>
      <p>{selectedRestaurant.phone}</p>
    </div>
  );
};

export default AdminPage;
