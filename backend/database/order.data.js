import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const orders = [{
  "customerId": "660cd5995dce748125e400c9",
  "restaurantId": "660af6042c3daf09719bbc86",
  "menuItems": [
    "660af6010e98c3834e1632bc",
    "660af6010e98c3834e1632c7"
  ],
  "sumPrice": 27.98
},
{
  "customerId": "660cd5995dce748125e400ca",
  "restaurantId": "660af6042c3daf09719bbc87",
  "menuItems": [
    "660af6010e98c3834e1632b8",
    "660af6010e98c3834e1632ca"
  ],
  "sumPrice": 18.99
},

{
  "customerId": "660cd5995dce748125e400cb",
  "restaurantId": "660af6042c3daf09719bbc87",
  "menuItems": [
    "660af6010e98c3834e1632bb"
  ],
  "sumPrice": 16.99
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