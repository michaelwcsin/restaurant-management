import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const menu = [{}];

// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    // Select database
    const db = client.db(dbName);

    // Select collection
    const collection = db.collection("menus");

    // Insert data
    collection
      .insertMany(menu)
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