import React from "react";
import NavBar from "../../components/user/navBar/userNavBar.component";

const CustomerPage = () => {
  return (
    <div>
      <NavBar />
        <div className="onboarding">
            <h1>Choose a following option</h1>
            <button>
                <a href="/login-customers">Log in</a>
            </button>
            <button className="options">
                <a href="/placeorder">Place Order as guest</a>
            </button>
        </div>
    </div>
  );
};

export default CustomerPage;
