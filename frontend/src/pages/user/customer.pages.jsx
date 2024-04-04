import React from "react";
import NavBar from "../../components/user/navBar/userNavBar.component";
import Button from "react-bootstrap/Button";
import "./customer.pages.css";

const CustomerPage = () => {
  return (
    <div className="customerLoginPage">
      <NavBar />
      <div className="onboarding">
      <div className="user">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="#FFF"
          class="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fill-rule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
        </div>
        {/*Adding style in <a> make the whole area clickable)*/}
        <Button variant="light" className="twoButtons">
          <a href="/login-customers">
            <b id="button">Log in</b>
          </a>
        </Button>
        <Button variant="light" className="twoButtons">
          <a href="/restaurants">
            <b id="button">Place Order as guest</b>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CustomerPage;
