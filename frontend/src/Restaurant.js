import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Dimmer,
  Header,
  Image,
  Input,
} from "semantic-ui-react";
import NavBar from "./Components/restaurant/navbar/restaurantNavBar.component";

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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
              <Card key={restaurant._id}>
                <Dimmer.Dimmable
                  as={Image}
                  dimmed={hoveredCard === restaurant._id}
                  dimmer={{
                    active: hoveredCard === restaurant._id,
                    content: (
                      <Button
                        primary
                        onClick={() => alert("Place your order!")}
                      >
                        Order Here
                      </Button>
                    ),
                  }}
                  onMouseEnter={() => setHoveredCard(restaurant._id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  // src='/assets/restaurantsphoto/Cactus.jpg'
                  src="https://react.semantic-ui.com/images/avatar/large/daniel.jpg"
                />
                <Card.Content>
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
