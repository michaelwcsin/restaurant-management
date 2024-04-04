import React from "react";
import NavBar from "../../components/user/navBar/userNavBar.component";
import Button from "react-bootstrap/Button";
import "./customer.pages.css"

const CustomerPage = () => {
  return (
    <div className='customerLoginPage'>
      <NavBar />
        <div className="onboarding">
            {/*Adding style in <a> make the whole area clickable)*/}
            <Button variant="light" className="mb-2 btn">
                <a href="/login-customers">Log in</a>
            </Button>
            <Button variant="light" className="mb-2 btn">
                <a href="/restaurants">Place Order as guest</a>
            </Button>
        </div>
    </div>
  );
};

export default CustomerPage;
