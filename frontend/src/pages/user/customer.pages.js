import React from "react";
import NavBar from "../../Components/user/navBar/userNavBar.component";

const CustomerPage = () => {
  return (
    <div>
      <NavBar />
      <div className="onboarding">
        <h1>Choose a following option</h1>
        <button className="options">
          <a href="/restaurants">Place Order</a>
        </button>
      </div>
    </div>
  );
};

export default CustomerPage;
