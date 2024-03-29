import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";

const ManagerList = ({ onSelectManager }) => {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    const fetchManagers = async () => {
      const response = await axios("http://localhost:8000/managers");
      setManagers(response.data);
    };
    fetchManagers();
  }, []);

  const handleSelectManager = (managerId) => {
    onSelectManager(managerId);
  };

  return (
    <Dropdown
      placeholder="Select Manager"
      fluid
      search
      selection
      clearable
      floating
      options={managers.map((manager) => ({
        key: manager._id,
        text: manager.name,
        value: manager._id,
        onClick: () => handleSelectManager(manager._id),
      }))}
      style={{ fontSize: "16px" }}
    />
  );
};

export default ManagerList;
