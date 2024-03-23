import React from "react";
import AshBackground from "../../assets/background/ash.png";
import NavBar from "../../Components/shared/navbar/navbar.component";
import "./homepage.styles.css";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const HomePage = () => {
  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${AshBackground})` }}
    >
      <NavBar />


      <Stack className="onboarding">
        <h1>MINK</h1>
        <h3>Food Service Made Easy</h3>
        <Stack className="twoButtons">
          <Button variant="light" className="shadow-sm">
            <a href="/customers"><b>Customer View</b></a>
          </Button>
          <Button variant="light" className="shadow-sm">
            <a href="/manager">Go to Manager View</a>
          </Button>
        </Stack>
      </Stack>

    </div>
  );
};

export default HomePage;
