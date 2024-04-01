import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const orders = [{
  "customerId": "65f9d06c90e2a739f762e694",
  "restaurantId": "65f9d079d03e1fbaee245064",
  "menuItems": [
    "65f9d0819786ab1328a19523", // Spaghetti Carbonara
    "65f9d0819786ab1328a19524"  // Margarita Pizza
  ],
  "sumPrice": 27.98
},
{
  "customerId": "65f9d06c90e2a739f762e695",
  "restaurantId": "65f9d079d03e1fbaee245065",
  "menuItems": [
    "65f9d0819786ab1328a19525" // Grilled Salmon
  ],
  "sumPrice": 18.99
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