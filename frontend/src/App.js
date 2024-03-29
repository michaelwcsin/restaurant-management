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
import AdminPage from "./pages/admin/adminPage";
import HomePage from "./pages/shared/homepage.pages";
import CustomerPage from "./pages/user/customer.pages";
import PlaceOrderPage from "./pages/user/placeorder";

const App = () => {
  return (
    <RestaurantProvider>
      <Router>
        <Routes>
          <Route index element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/add-menu-item" element={<AddMenuItem />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/place-order/:restaurantId" element={<PlaceOrderPage />} />

        </Routes>
      </Router>
    </RestaurantProvider>
  );
};

export default App;
