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

// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    // Select database
    const db = client.db(dbName);

    // Select collection
    const collection = db.collection("managers");

    // Insert data
    collection
      .insertMany(managers)
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
