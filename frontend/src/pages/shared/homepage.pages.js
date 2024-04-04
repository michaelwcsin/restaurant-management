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
        <Stack gap={3} className="stack">
          <div>
            <Button variant="light" className="twoButtons">
              <a href="/restaurants">
                <b id="customer-button">Customer View</b>
              </a>
            </Button>
          </div>
          <div>
            <Button variant="light" className="twoButtons">
              <a href="/login-managers">
                <b id="manager-button">Manager View</b>
              </a>
            </Button>
          </div>
        </Stack>
        </div>
    </Stack>
    </div>
  );
};

export default HomePage;
