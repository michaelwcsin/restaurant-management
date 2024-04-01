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
  {
    name: "Fish and Chips",
    description: "Crispy battered fish served with fries and tartar sauce",
    price: 15.99,
    status: true,
  },
  {
    name: "Lemon Garlic Chicken",
    description: "Grilled chicken breast marinated in lemon, garlic, and herbs, served with roasted potatoes",
    price: 16.99,
    status: true,
  },
  {
    name: "Caprese Salad",
    description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
    price: 10.99,
    status: true,
  },
  {
    name: "Beef Tacos",
    description: "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa",
    price: 11.99,
    status: true,
  },
  {
    name: "Chicken Caesar Wrap",
    description: "Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing wrapped in a flour tortilla",
    price: 9.99,
    status: true,
  },
  {
    name: "Vegetable Tempura",
    description: "Assorted vegetables battered and deep-fried, served with dipping sauce",
    price: 12.99,
    status: true,
  },
  {
    name: "Cheeseburger",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and pickles on a toasted bun",
    price: 13.99,
    status: true,
  },
  {
    name: "Chicken Quesadilla",
    description: "Grilled chicken, melted cheese, onions, and peppers folded in a flour tortilla, served with salsa and sour cream",
    price: 10.99,
    status: true,
  },
  {
    name: "Eggplant Parmesan",
    description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese, served with spaghetti",
    price: 14.99,
    status: true,
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese",
    price: 7.99,
    status: true,
  },
  {
    name: "Garden Salad",
    description: "Mixed greens, cucumbers, tomatoes, carrots, and choice of dressing",
    price: 8.99,
    status: true,
  },
  {
    name: "Beef Stir-Fry",
    description: "Tender strips of beef stir-fried with vegetables in a savory sauce, served over rice",
    price: 17.99,
    status: true,
  },
  {
    name: "Chicken Parmesan",
    description: "Breaded chicken cutlet topped with marinara sauce and melted mozzarella cheese, served with spaghetti",
    price: 16.99,
    status: true,
  },
  {
    name: "Fettuccine Alfredo",
    description: "Creamy pasta tossed in a parmesan cheese sauce",
    price: 12.99,
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
