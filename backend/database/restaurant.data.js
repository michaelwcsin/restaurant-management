import { MongoClient } from "mongodb";

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
    password: "111",
  },
  {
    name: "Restaurant B",
    email: "restaurantB@example.com",
    address: "222 Elm Street, Edmonton, AB",
    phone: "222-222-2222",
    password: "222",
  },
  {
    name: "Restaurant C",
    email: "restaurantC@example.com",
    address: "333 Oak Street, Edmonton, AB",
    phone: "333-333-3333",
    password: "333",
  },
];

// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    // Select database
    const db = client.db(dbName);

    // Select collection
    const collection = db.collection("restaurants");

    // Insert data
    collection
      .insertMany(restaurants)
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
