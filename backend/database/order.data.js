import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const orders = [
  {
    customerId: "660ee4216065d370bff7b72a",
    restaurantId: "660ee42a162a09064ff1a875",
    menuItems: ["660af6010e98c3834e1632bc", "660af6010e98c3834e1632c7"],
    sumPrice: 27.98,
    status: "Ordered",
  },
  {
    customerId: "660ee4216065d370bff7b72b",
    restaurantId: "660ee42a162a09064ff1a876",
    menuItems: ["660af6010e98c3834e1632b8", "660af6010e98c3834e1632ca"],
    sumPrice: 18.99,
    status: "In Progress",
  },

  {
    customerId: "660ee4216065d370bff7b72c",
    restaurantId: "660ee42a162a09064ff1a877",
    menuItems: ["660af6010e98c3834e1632bb"],
    sumPrice: 16.99,
    status: "Awaiting Pickup",
  },
];

// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    // Select database
    const db = client.db(dbName);

    // Select collection
    const collection = db.collection("orders");

    // Insert data
    collection
      .insertMany(orders)
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
