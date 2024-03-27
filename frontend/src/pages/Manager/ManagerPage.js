import React from "react";
import RestaurantSelect from "../../components/admin/dropdown/dropdown.component";
import NavBar from "../../components/restaurant/navbar/restaurantNavBar.component";

const ManagerPage = () => {
  return (
    <div>
      <NavBar />
      <RestaurantSelect />
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
