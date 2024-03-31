import { MongoClient, ObjectId } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const restaurants = [
  {
    name: "Restaurant A",
    email: "restaurantA@example.com",
    address: "111 Main Street, Edmonton, AB",
    phone: "111-111-1111",
  },
  {
    name: "Restaurant B",
    email: "restaurantB@example.com",
    address: "222 Elm Street, Edmonton, AB",
    phone: "222-222-2222",
  },
  {
    name: "Restaurant C",
    email: "restaurantC@example.com",
    address: "333 Oak Street, Edmonton, AB",
    phone: "333-333-3333",
  },
  {
    name: "Restaurant D",
    email: "restaurantD@example.com",
    address: "444 Pine Street, Edmonton, AB",
    phone: "444-444-4444",
  },
  {
    name: "Restaurant E",
    email: "restaurantE@example.com",
    address: "555 Maple Avenue, Edmonton, AB",
    phone: "555-555-5555",
  },
  {
    name: "Restaurant F",
    email: "restaurantF@example.com",
    address: "666 Cedar Lane, Edmonton, AB",
    phone: "666-666-6666",
  },
];

// Connect to MongoDB
MongoClient.connect(url)
  .then(async (client) => {
    try {
      // Select database
      const db = client.db(dbName);

      // Insert restaurants data
      const restaurantCollection = db.collection("restaurants");
      await restaurantCollection.insertMany(restaurants);

      // Fetch menu items from the database
      const menuCollection = db.collection("menus");
      const menuItems = await menuCollection.find({}).toArray();

      // Update restaurants with menu items
      await Promise.all(
        restaurants.map(async (restaurant) => {
          const randomMenuItems = getRandomMenuItems(menuItems, 4);
          const menuItemIds = randomMenuItems.map((item) => item._id);
          await restaurantCollection.updateOne(
            { email: restaurant.email },
            { $set: { menuItems: menuItemIds } }
          );
        })
      );

      console.log("Restaurants updated with menu items successfully!");
    } catch (error) {
      console.error("Failed to update restaurants with menu items:", error);
    } finally {
      client.close();
    }
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// get random menu items
function getRandomMenuItems(menuItems, count) {
  const shuffledMenuItems = menuItems.sort(() => 0.5 - Math.random());
  return shuffledMenuItems.slice(0, count);
}
