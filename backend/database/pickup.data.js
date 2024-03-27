import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const pickups = [
  {
    orderId: "65f9d4ff6cabc02a16b049c0",
    date: new Date("2024-03-20"),
    pickUpTime: "12:00 PM",
  },
  {
    orderId: "65f9d4ff6cabc02a16b049c1",
    pickUpTime: "13:00 PM",
  },
];

// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    // Select database
    const db = client.db(dbName);

    // Select collection
    const collection = db.collection("pickups");

    // Insert data
    collection
      .insertMany(pickups)
      .then((result) => {
        console.log("Document inserted successfully");
      })
      .catch((err) => {
        console.error("Failed to insert document");
      })
      .finally(() => {
        client.close();
      });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB");
  });
