import React from "react";
import Badge from "react-bootstrap/Badge";
import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import RestaurantList from "./Restaurant";
import HomePage from "./pages/shared/homepage.pages";
import CustomerPage from "./pages/user/customer.pages";
import AddMenuItem from "./pages/Manager/AddMenuItem";
import ManagerPage from "./pages/Manager/ManagerPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/placeorder" element={<RestaurantList />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/manager" element={<ManagerPage />} />
        <Route path="/add-menu-item" element={<AddMenuItem />} />

      </Routes>
    </Router>
  );
};

export default App;
