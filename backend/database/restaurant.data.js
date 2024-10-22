import { MongoClient, ObjectId } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data 
const restaurants = [
  {
    name: "Cactus Club",
    email: "spikey.club@example.com",
    address: "111 Main Street, Edmonton, AB",
    phone: "111-111-1111",
  },
  {
    name: "Shawarma City",
    email: "many.spices.dune@example.com",
    address: "222 Elm Street, Edmonton, AB",
    phone: "222-222-2222",
  },
  {
    name: "Saigon Taste",
    email: "artificial.taste.of.vietnam@example.com",
    address: "333 Oak Street, Edmonton, AB",
    phone: "333-333-3333",
  },
];

// Connect to MongoDB
MongoClient.connect(url)
  .then(async (client) => {
    try {
      // Select database
      const db = client.db(dbName);

      
      const restaurantCollection = db.collection("restaurants");
      await restaurantCollection.insertMany(restaurants);

      
      const menuCollection = db.collection("menus");
      const menuItems = await menuCollection.find({}).toArray();

      // Assign restaurants random menu items
      await Promise.all(
        restaurants.map(async (restaurant) => {
          const uniqueMenuItems = getUniqueMenuItems(menuItems, 8);
          const menuItemIds = uniqueMenuItems.map((item) => item._id);
          await restaurantCollection.updateOne(
            { email: restaurant.email },
            { $set: { menuItems: menuItemIds } }
          );
        })
      );

      console.log("Document inserted successfully");
    } catch (error) {
      console.error("Failed to update restaurants with menu items:", error);
    } finally {
      client.close();
    }
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

//each restaurant gets a unique menu items
function getUniqueMenuItems(menuItems, count) {
  const shuffledMenuItems = menuItems.sort(() => 0.5 - Math.random());
  const uniqueItems = new Set();

  while (uniqueItems.size < count) {
    uniqueItems.add(shuffledMenuItems.pop());
  }

  return Array.from(uniqueItems);
}