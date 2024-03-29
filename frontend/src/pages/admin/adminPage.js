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
      <h2>{selectedRestaurant.name}</h2>
      <h4>{selectedRestaurant.address}</h4>
      <h4>{selectedRestaurant.phone}</h4>
      <TabSheet />
      {/* <p>{selectedRestaurant._id}</p> */}
    </div>
  );
};

export default AdminPage;
