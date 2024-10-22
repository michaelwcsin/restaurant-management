import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import RestaurantList from "./pages/user/Restaurant";
import { RestaurantProvider } from "./components/contextAPI/RestaurantContext";
import { CustomerProvider } from "./components/contextAPI/customerContext";
import { ManagerProvider } from "./components/contextAPI/managerContext";
import { OrdersProvider } from "./components/contextAPI/ordersContext";

import AddMenuItem from "./pages/Manager/AddMenuItem";
import ManagerPage from "./pages/Manager/ManagerPage";
import HomePage from "./pages/shared/homepage.pages";
import CustomerPage from "./pages/user/customer.pages";
import LoginCustomers from "./pages/user/login.customers";
import LoginManagers from "./pages/Manager/login.managers";
import PlaceOrderPage from "./pages/user/placeorder";

const App = () => {
  return (
      <CustomerProvider>
        <ManagerProvider>
          <RestaurantProvider>
            <OrdersProvider>
              <Router>
                <Routes>
                  <Route index element={<Navigate to="/home" />}></Route>
                  <Route path="/home" element={<HomePage />} />
                  <Route path="/restaurants" element={<RestaurantList />} />
                  <Route path="/customers" element={<CustomerPage />} />
                  <Route path="/manager" element={<ManagerPage />} />
                  <Route path="/add-menu-item" element={<AddMenuItem />} />
                  <Route path="/login-customers" element={<LoginCustomers/>} />
                  <Route path="/login-managers" element={<LoginManagers/>} />

                  <Route
                    path="/place-order/:restaurantId"
                    element={<PlaceOrderPage />}
                  />
                </Routes>
              </Router>
            </OrdersProvider>
          </RestaurantProvider>
        </ManagerProvider>
      </CustomerProvider>
  );
};

export default App;
