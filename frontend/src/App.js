import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import RestaurantList from "./pages/user/Restaurant";
import { RestaurantProvider } from "./components/admin/restaurants/RestaurantContext";
import AddMenuItem from "./pages/Manager/AddMenuItem";
import ManagerPage from "./pages/Manager/ManagerPage";
import HomePage from "./pages/shared/homepage.pages";
import PlaceOrderPage from "./pages/user/placeorder";
import CartPage from "./pages/user/cartPage";

const App = () => {
  return (
    <RestaurantProvider>
      <Router>
        <Routes>
          <Route index element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/add-menu-item" element={<AddMenuItem />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/place-order/:restaurantId"
            element={<PlaceOrderPage />}
          />
        </Routes>
      </Router>
    </RestaurantProvider>
  );
};

export default App;
