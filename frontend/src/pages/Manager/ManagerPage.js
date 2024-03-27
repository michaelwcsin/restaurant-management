import React from "react";
import RestaurantList from "../../components/admin/restaurants/restaurantList.component";
import NavBar from "../../components/restaurant/navbar/restaurantNavBar.component";

const ManagerPage = () => {
  return (
    <div>
      <NavBar />
      <RestaurantList />
      <div className="onboarding">
        <h1>Manager Functions</h1>
        <button className="options">
          <a href="/add-menu-item">Add Menu Item</a>
        </button>
      </div>
    </div>
  );
};

export default ManagerPage;
