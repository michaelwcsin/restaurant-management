import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data 
const customers = [
  {
    name: "Nhi Phan",
    email: "nhi.phan@example.com",
    password: "easy",
    address: "123 Main Street, Edmonton, AB",
    phone: "123-456-7890",
  },
  {
    name: "Michael Sin",
    email: "michael.sin@example.com",
    password: "easy",
    address: "456 Elm Street, Edmonton, AB",
    phone: "987-654-3210",
  },
  {
    name: "Krishna Purani",
    email: "krishna.purani@example.com",
    password: "easy",
    address: "789 Oak Street, Edmonton, AB",
    phone: "555-123-4567",
  },
  {
    name: "Isra Jime",
    email: "isra.jime@example.com",
    password: "easy",
    address: "789 Oak Street, Edmonton, AB",
    phone: "555-123-4567",
  },
  {
    name: "Chen Liang",
    email: "chen.liang@example.com",
    password: "easy",
    address: "MacEwan University, Edmonton, AB",
    phone: "555-777-9999",
  },
];

// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    
    const db = client.db(dbName);
    const collection = db.collection("customers");

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
