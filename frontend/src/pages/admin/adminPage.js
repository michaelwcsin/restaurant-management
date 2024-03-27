import React from "react";
import { useRestaurant } from "../../components/admin/restaurants/RestaurantContext";
import NavBar from "../../components/restaurant/navbar/restaurantNavBar.component";

const AdminPage = () => {
  const { selectedRestaurant } = useRestaurant();

  return (
    <div>
      <NavBar />
      <p>Hello</p>
      <p>{selectedRestaurant.name}</p>
      <p>{selectedRestaurant.address}</p>
      <p>{selectedRestaurant.phone}</p>
      <p>Goodbyes</p>
    </div>
  );
};

export default AdminPage;
