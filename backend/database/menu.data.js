import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data for courses
const menus = [
  {
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish with bacon, eggs, and cheese",
    price: 14.99,
    status: true,
  },
  {
    name: "Margarita Pizza",
    description: "Traditional pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    status: true,
  },
  { 
    name: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection, served with steamed vegetables",
    price: 18.99,
    status: false,
  },
];


// Connect to MongoDB
MongoClient.connect(url)
  .then((client) => {
    // Select database
    const db = client.db(dbName);

    // Select collection
    const collection = db.collection("menus");

    // Insert data
    collection
      .insertMany(menus)
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