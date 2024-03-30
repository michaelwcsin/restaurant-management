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
    description:
      "Fresh salmon fillet grilled to perfection, served with steamed vegetables",
    price: 18.99,
    status: false,
  },
  {
    name: "Chicken Alfredo",
    description: "Creamy pasta with grilled chicken, garlic, and parmesan cheese",
    price: 16.99,
    status: true,
  },
  {
    name: "BBQ Ribs",
    description: "Slow-cooked ribs smothered in tangy barbecue sauce, served with coleslaw",
    price: 19.99,
    status: true,
  },
  {
    name: "Vegetable Stir-Fry",
    description: "Assorted vegetables stir-fried with tofu in a savory sauce, served over rice",
    price: 13.99,
    status: true,
  },
  {
    name: "New York Strip Steak",
    description: "Juicy steak seasoned and grilled to your liking, served with mashed potatoes",
    price: 24.99,
    status: true,
  },
  {
    name: "Caesar Salad",
    description: "Fresh romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
    price: 9.99,
    status: true,
  },
  {
    name: "Shrimp Scampi",
    description: "Tender shrimp sautéed with garlic, butter, lemon juice, and white wine, served over pasta",
    price: 17.99,
    status: true,
  },
  {
    name: "Vegetarian Pizza",
    description: "Pizza topped with a variety of fresh vegetables and melted cheese",
    price: 14.99,
    status: true,
  },
  {
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a gooey chocolate center, topped with vanilla ice cream",
    price: 8.99,
    status: true,
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
