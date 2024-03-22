import React from "react";
import NavBar from "../../components/shared/navbar/navbar.component";
import "./homepage.styles.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <NavBar />

      <div className="onboarding">
        <h1>MINKs</h1>

        <button>
          <a href="/customers">Go to Customer View</a>
        </button>

        <button>
          <a href="/restaurants">Go to Manager view</a>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
