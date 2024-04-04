import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import NavBar from "../../components/home/navbar/homeNavBar.component";
import "./homepage.styles.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />

      <Stack gap={5} className="onboarding">
        <div>
          <h1>MINK</h1>
          <h3>Food Service Made Easy</h3>
        </div>
        <div>
          <div className="user-options">
            <Button variant="light" className="twoButtons">
              <a href="/customers">
                <b id="customer-button">Customer View</b>
              </a>
            </Button>
            <Button variant="light" className="twoButtons">
              <a href="/login-managers">
                <b id="manager-button">Manager View</b>
              </a>
            </Button>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default HomePage;
