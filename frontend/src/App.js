import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import RestaurantList from "./Restaurant";
import { RestaurantProvider } from "./components/admin/restaurants/RestaurantContext";
import AddMenuItem from "./pages/Manager/AddMenuItem";
import ManagerPage from "./pages/Manager/ManagerPage";
import HomePage from "./pages/shared/homepage.pages";
import CustomerPage from "./pages/user/customer.pages";
import LoginCustomers from "./pages/user/login.customers";
import LoginManagers from "./pages/Manager/login.managers";

const App = () => {
  return (
    <RestaurantProvider>
      <Router>
        <Routes>
          <Route index element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/placeorder" element={<RestaurantList />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/add-menu-item" element={<AddMenuItem />} />
          <Route path="/login-customers" element={<LoginCustomers/>} />
          <Route path="/login-managers" element={<LoginManagers/>} />

        </Routes>
      </Router>
    </RestaurantProvider>
  );
};

export default App;
