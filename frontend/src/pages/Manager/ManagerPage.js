import axios from "axios";
import React, { useEffect, useState } from "react";
import ManagerList from "../../components/admin/managerlist/managerlist.component";
import TabSheet from "../../components/admin/tabsheet/tabsheet.component";
import NavBar from "../../components/restaurant/navbar/restaurantNavBar.component";
import "./managerPage.styles.css";

const ManagerPage = () => {
  const [managerId, setManagerId] = useState("");
  const [manager, setManager] = useState({});

  // gets manager ID from selection from dropdown and sets it in useState
  const handleManagerSelect = (managerId) => {
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
          // Deconstruct data
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
    <div className="manager-page">
      <NavBar />
      <div className="manager-select">
        <ManagerList onSelectManager={handleManagerSelect} />
      </div>
      <TabSheet restaurant={manager.restaurant} /> {/* Passes restaurant._id */}
    </div>
  );
};

export default ManagerPage;
