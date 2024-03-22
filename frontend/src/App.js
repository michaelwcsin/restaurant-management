import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import RestaurantList from './Restaurant'; // Import your RestaurantList component

const App = () => {
  return (
    <Router>
      <div>
        <h1>Restaurant Management</h1>
        <Badge bg="secondary">
          <Link to="/restaurants" className="btn btn-primary btn-lg">
            Available Restaurants
          </Link>
        </Badge>

        <Routes>
          <Route path="/restaurants" element={<RestaurantList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
