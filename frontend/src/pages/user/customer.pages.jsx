import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "../../components/user/navBar/userNavBar.component";
import Button from "react-bootstrap/Button";
import "./customer.pages.css"
import { CustomerContext} from "../../components/contextAPI/customerContext";

const CustomerPage = () => {
    const navigate = useNavigate();
    const { setCustomer } = useContext(CustomerContext);

    const handleGuestLogin = () => {
        // make the context to set the user as a guest
        setCustomer({
            isGuest: true,
            email: "guest@example.com", // or any other default or placeholder email if needed
        });
        // navigate('/restaurants');
    };
  return (
    <div className="customerLoginPage">
      <NavBar />
        <div className="onboarding">
            {/*Adding style in <a> make the whole area clickable)*/}
            <Button variant="light" className="mb-2 btn">
                <a href="/login-customers">Log in</a>
            </Button>
            <Button variant="light" className="mb-2 btn" onClick={handleGuestLogin}>
                <a>Place Order as guest</a>
            </Button>
        </div>
    </div>
  );
};

export default CustomerPage;
