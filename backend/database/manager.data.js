import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const managers = [
  {
    name: "Manager A",
    email: "manager.a@example.com",
    password:"easy",
    address: "111 Main Street, Edmonton, AB",
    phone: "123-456-7890",
  },
  {
    name: "Manager B",
    email: "manager.b@example.com",
    password:"easy",
    address: "222 Elm Street, Edmonton, AB",
    phone: "987-654-3210",
  },
  {
    name: "Manager C",
    email: "manager.c@example.com",
    password:"easy",
    address: "333 Oak Street, Edmonton, AB",
    phone: "555-123-4567",
  },
];

// Function to shuffle an array in place
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Connect to MongoDB
MongoClient.connect(url)
  .then(async (client) => {
    try {
      const db = client.db(dbName);

      const managerCollection = db.collection("managers");
      await managerCollection.insertMany(managers);

      const allManagers = await managerCollection.find({}).toArray();
      const restaurantCollection = db.collection("restaurants");
      const allRestaurants = await restaurantCollection.find({}).toArray();

     
      const shuffledRestaurants = shuffleArray(allRestaurants);

      // Assign each manager to a restaurant 
      for (let i = 0; i < allManagers.length; i++) {
        const manager = allManagers[i];
        const restaurant = shuffledRestaurants[i % shuffledRestaurants.length];
        await managerCollection.updateOne(
          { _id: manager._id },
          { $set: { restaurant: restaurant._id } }
        );
      }

      console.log("Managers assigned to restaurants successfully!");
    } catch (error) {
      console.error("Failed to assign managers to restaurants:", error);
    } finally {
      client.close();
    }
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
