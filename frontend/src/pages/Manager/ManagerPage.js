import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Header } from "semantic-ui-react";
import ManagerList from "../../components/admin/managerlist/managerlist.component";
import TabSheet from "../../components/admin/tabsheet/tabsheet.component";
import { ManagerContext } from "../../components/contextAPI/managerContext";
import NavBar from "../../components/restaurant/navbar/restaurantNavBar.component";
import "./managerPage.styles.css";

const ManagerPage = () => {
  // const [managerId, setManagerId] = useState("");
  // const [manager, setManager] = useState({});
  // const [showOrders, setShowOrders] = useState(false);

  // gets manager ID from selection from dropdown and sets it in useState
  // const handleManagerSelect = (managerId) => {
  //   setManagerId(managerId);
  //   setShowOrders(true);
  // };
  //
  // useEffect(() => {
  //   // Fetches the manager data and deconstructs the information to be used
  //   const fetchManager = async () => {
  //     if (managerId) {
  //       try {
  //         const response = await axios(
  //           `http://localhost:8000/managers/${managerId}`
  //         );
  //         const [managerData] = response.data;
  //         // Deconstruct data
  //         const { name, email, address, phone, restaurant } = managerData;
  //         setManager({ name, email, address, phone, restaurant });
  //       } catch (error) {
  //         console.error("Error fetching manager:", error);
  //       }
  //     }
  //   };
  //   fetchManager();
  // }, [managerId]);

  const { manager, setManager } = useContext(ManagerContext);
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    const fetchManagers = async () => {
      try {
        const response = await axios("http://localhost:8000/managers");
        setManagers(response.data);
        console.log("Managers ", managers);

        const matchingManager = response.data.find(
          (obj) => obj.email === manager.email
        );
        if (matchingManager) {
          console.log("Manager ", matchingManager);
          setManager(matchingManager);
        }
      } catch (error) {
        console.error("Error fetching managers:", error);
      }
    };
    fetchManagers();
  }, [manager, setManager]);

  return (
    <div className="manager-page">
      <NavBar />
      <div className="manager-select">
        {/*<ManagerList onSelectManager={handleManagerSelect} /> */}
        <Header as="h2">Welcome {manager?.email || "Guest"}!</Header>
      </div>
      {manager && manager.restaurant && (
        <TabSheet restaurant={manager.restaurant} />
      )}{" "}
      {/* Passes restaurant._id */}
    </div>
  );
};

export default ManagerPage;
