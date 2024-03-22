import React from "react";
import AshBackground from "../../assets/background/ash.png";
import NavBar from "../../components/shared/navbar/navbar.component";
import "./homepage.styles.css";

const HomePage = () => {
  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${AshBackground})` }}
    >
      <NavBar />

      <div className="onboarding">
        <h1>MINKs</h1>

        <button className="options">
          <a href="/customers">Go to Customer View</a>
        </button>

        <button className="options">
          <a href="/restaurants">Go to Manager View</a>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
