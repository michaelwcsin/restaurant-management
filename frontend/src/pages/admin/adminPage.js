import React from "react";
import { useRestaurant } from "../../components/admin/restaurants/RestaurantContext";
import TabSheet from "../../components/admin/tabsheet/tabsheet.component";
import "./adminPage.styles.css";

// TODO: Given this page with the restaurant _id, add components of menu list for specific restaurant -> alter status of menu item
// TODO: Add - add/remove menu item to this page
// TODO: Check orders
// TODO: Analytics

const AdminPage = () => {
  const { selectedRestaurant } = useRestaurant();

  return (
    <div className="admin-sheet">
      <h1>{selectedRestaurant.name}</h1>
      <TabSheet />
      {/* <p>{selectedRestaurant._id}</p>
      <p>{selectedRestaurant.name}</p>
      <p>{selectedRestaurant.address}</p>
      <p>{selectedRestaurant.phone}</p> */}
    </div>
  );
};

export default AdminPage;
