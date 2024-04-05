import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const orders = [{
  "customerId": "660cd5995dce748125e400c9",
  "restaurantId": "660af6042c3daf09719bbc87",
  "menuItems": [
    "660af6010e98c3834e1632c6",
    "660af6010e98c3834e1632bb",
  ],
  "sumPrice": 28.98,
  "status": "ordered",
  "pickUpTime": "12:00 PM" 
},
{
  "customerId": "660cd5995dce748125e400ca",
  "restaurantId": "660af6042c3daf09719bbc87",
  "menuItems": [
    "660af6010e98c3834e1632b8",
    "660af6010e98c3834e1632ca"
  ],
  "sumPrice": 18.99,
  "status": "in-progress"
},

{
  "customerId": "660cd5995dce748125e400cb",
  "restaurantId": "660af6042c3daf09719bbc86",
  "menuItems": [
    "660af6010e98c3834e1632c9",
    "660af6010e98c3834e1632c7",
    "660af6010e98c3834e1632cd",
    "660af6010e98c3834e1632c4",
    "660af6010e98c3834e1632ba"
  ],
  "sumPrice": 68.95,
  "status": "awaiting-pickup",
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