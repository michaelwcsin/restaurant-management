import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  Header,
  Input,
} from "semantic-ui-react";
import NavBar from "../../components/user/navBar/userNavBar.component";
import "./Restaurant.css";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const CartContext = createContext();


  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8000/restaurants");
        console.log("Response:", response.data);
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
        setLoading(false);
      }
    };
    fetchRestaurants();
  }, []);


  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="restaurant-list">
      <NavBar />
      <Container style={{ padding: 20 }}>
        <Header as="h1">Available Restaurants</Header>

        <div className="search-bar">
          <Input
            focus
            type="text"
            placeholder="Search Restaurant 🔍"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : filteredRestaurants.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          <div className="restaurant-container">
            {filteredRestaurants.map((restaurant) => (
              <Card  key={restaurant._id}>
                <Card.Content >
                  <Card.Header>{restaurant.name}</Card.Header>
                  <Card.Meta>Email: {restaurant.email}</Card.Meta>
                  <Card.Description>
                    Address: {restaurant.address}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Link to={`/place-order/${restaurant._id}`}>
                    Place Order Here
                  </Link>
                </Card.Content>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default RestaurantList;

