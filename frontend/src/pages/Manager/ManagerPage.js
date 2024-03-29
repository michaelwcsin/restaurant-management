import axios from "axios";
import React, { useEffect, useState } from "react";
import ManagerList from "../../components/admin/managerlist/managerlist.component";
import NavBar from "../../components/restaurant/navbar/restaurantNavBar.component";
import "./managerPage.styles.css";

const ManagerPage = () => {
  const [managerId, setManagerId] = useState("");
  const [manager, setManager] = useState({});

  // Grabs manager ID from selection from dropdown and sets it in useState
  const handleManagerSelect = (managerId) => {
    console.log("Selected manager ID:", managerId);
    setManagerId(managerId);
  };

  useEffect(() => {
    // Fetches the manager data and deconstructs the information to be used
    const fetchManager = async () => {
      if (managerId) {
        try {
          const response = await axios(
            `http://localhost:8000/managers/${managerId}`
          );
          const [managerData] = response.data;
          const { name, email, address, phone, restaurant } = managerData;
          setManager({ name, email, address, phone, restaurant });
        } catch (error) {
          console.error("Error fetching manager:", error);
        }
      }
    };
    fetchManager();
  }, [managerId]);

  return (
    <div>
      <NavBar />
      <div className="manager-select">
        <ManagerList onSelectManager={handleManagerSelect} />
        {/* Example of showing manager information */}
        <p>{manager.name}</p>
        <p>{manager.email}</p>
        <p>{manager.address}</p>
        <p>{manager.phone}</p>
        <p>{manager.restaurant}</p>
      </div>
      <div className="onboarding">
        <h1>Manager Functions</h1>
        <button className="options">
          <a href="/add-menu-item">Add Menu Item</a>
        </button>
      </div>
    </div>
  );
};

export default ManagerPage;
