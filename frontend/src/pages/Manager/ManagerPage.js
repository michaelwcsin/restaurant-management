import React from "react";
import NavBar from "../../components/shared/navbar/navbar.component";

const ManagerPage = () => {
  return (
    <div>
      <NavBar />
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
