import React from "react";
import NavBar from "../../components/shared/navbar/navbar.component";

const CustomerPage = () => {
  return (
    <div>
      <NavBar />
      <div className="onboarding">
        <h1>Choose a following option</h1>
        <button className="options">
          <a href="/placeorder">Place Order</a>
        </button>
      </div>
    </div>
  );
};

export default CustomerPage;
