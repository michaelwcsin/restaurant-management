import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import AshBackground from "../../assets/background/ash.png";
import NavBar from "../../components/shared/navbar/navbar.component";
import "./homepage.styles.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />

      <Stack className="onboarding">
        <h1>MINK</h1>
        <h3>Food Service Made Easy</h3>
        <Stack className="twoButtons">
          <Button variant="light" className="shadow-sm">
            <a href="/customers">
              <b>Customer View</b>
            </a>
          </Button>
          <Button variant="light" className="shadow-sm">
            <a href="/manager">
              <b id="manager-button">Manager View</b>
            </a>
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default HomePage;
