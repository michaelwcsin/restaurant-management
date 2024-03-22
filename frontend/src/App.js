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
import UserPage from "./pages/user/user.pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/customers" element={<UserPage />} />
      </Routes>
    </Router>
  );
};

export default App;
