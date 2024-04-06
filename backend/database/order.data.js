import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data 
const orders = [{
  "customerId": "660f655603fcef48aab65a63",
  "restaurantId": "66109766e89b58b7398a7dcd",
  "menuItems": [
    "6610974e4daac80cf3b7e03c",
    "6610974e4daac80cf3b7e047",
    "6610974e4daac80cf3b7e03a"
  ],
  
  "pickUpTime": "12:00 PM" 
},
{
  "customerId": "660f655603fcef48aab65a65",
  "restaurantId": "66109766e89b58b7398a7dcd",
  "menuItems": [
    "6610974e4daac80cf3b7e039",
    "6610974e4daac80cf3b7e049",
    "6610974e4daac80cf3b7e03d",
    "6610974e4daac80cf3b7e049",
  ],
  
},

{
  "customerId": "660f655603fcef48aab65a64",
  "restaurantId": "66109766e89b58b7398a7dcf",
  "menuItems": [
    "6610974e4daac80cf3b7e040",
    "6610974e4daac80cf3b7e033",
    "6610974e4daac80cf3b7e037",
    "6610974e4daac80cf3b7e04b",
    "6610974e4daac80cf3b7e03b"
  ],
  "pickUpDate": "2024-04-04", 
  "pickUpTime": "01:30 PM" 
}
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
