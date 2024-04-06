import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CustomerContext} from "../../components/contextAPI/customerContext";
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
import NavBar from "../../components/restaurant/navbar/restaurantNavBar.component";

import restaurantImage1 from "../../assets/restaurantsphoto/cactus.jpeg"
import restaurantImage2 from "../../assets/restaurantsphoto/shawarma.png"
import restaurantImage3 from "../../assets/restaurantsphoto/saigontaste.png"
import defaultImage from "../../assets/restaurantsphoto/default.jpg"

const restaurantImages = {
  'Cactus Club': restaurantImage1,
  'Shawarma City': restaurantImage2,
  'Saigon Taste': restaurantImage3,
};
function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const { customer } = useContext(CustomerContext);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get("http://localhost:8000/restaurants");
        console.log("Response:", response.data);
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching restaurantsContext:", error);
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log("Customer is: ", customer.email);

  return (
      <div className="mainContainer">
        <NavBar />
        <Container style={{ padding: 20 }}>
          {/*check if customer is not null before getting customer.email, else, display "Guess"*/}
          <Header as="h2">Welcome {customer ? customer.name :"Guest"}!</Header>
          <Header as="h2">Available Restaurants</Header>

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
              <div className="restaurant-container"
                   style={{ display: 'flex', flexWrap: 'wrap', gap: '62px', justifyContent: 'center' }}>
                {filteredRestaurants.map((restaurant) => (
                    <Card //inline css code for each card
                        key={restaurant._id}
                        style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                          width: '300px',
                          margin: '10px', // some space around the cards
                        }}>
                      <Dimmer.Dimmable
                          as={Image}
                          dimmed={hoveredCard === restaurant._id}
                          dimmer={{
                            active: hoveredCard === restaurant._id,
                            content:(
                                <Link to={`/place-order/${restaurant._id}`} className="ui primary button">
                                  Place Order Here
                                </Link>
                            ),
                          }}
                          onMouseEnter={() => setHoveredCard(restaurant._id)}
                          onMouseLeave={() => setHoveredCard(null)}
                          src={restaurantImages[restaurant.name] || defaultImage}
                      />
                      <Card.Content>
                        <Card.Header>{restaurant.name}</Card.Header>
                        <Card.Meta>Email: {restaurant.email}</Card.Meta>
                        <Card.Description>
                          Address: {restaurant.address}
                        </Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <Card.Description>
                          Every dollar of your order goes to support the revival of MINK empire!
                        </Card.Description>
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

