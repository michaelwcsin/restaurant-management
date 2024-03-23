import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const customers = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    address: "123 Main Street, Edmonton, AB",
    phone: "123-456-7890",
    password: "123",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    address: "456 Elm Street, Edmonton, AB",
    phone: "987-654-3210",
    password: "987",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    address: "789 Oak Street, Edmonton, AB",
    phone: "555-123-4567",
    password: "555",
  },
];

// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    // Select database
    const db = client.db(dbName);

    // Select collection
    const collection = db.collection("customers");

    // Insert data
    collection
      .insertMany(customers)
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
