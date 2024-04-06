import { MongoClient } from "mongodb";

// Connection to localhost & db selection
const url = "mongodb://localhost:27017";
const dbName = "restaurantDB";

// Initialize data 
const menus = [
  {
    name: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=2264&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Classic Italian pasta dish with bacon, eggs, and cheese",
    price: 14.99,
    status: true,
  },
  {
    name: "Margarita Pizza",
    image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Traditional pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    status: true,
  },
  {
    name: "Grilled Salmon",
    image: "https://images.unsplash.com/photo-1509402308-817902776267?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Fresh salmon fillet grilled to perfection, served with steamed vegetables",
    price: 18.99,
    status: false,
  },
  {
    name: "Chicken Alfredo",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Creamy pasta with grilled chicken, garlic, and parmesan cheese",
    price: 16.99,
    status: true,
  },
  {
    name: "BBQ Ribs",
    image: "https://plus.unsplash.com/premium_photo-1664478272084-532c1bfebd25?q=80&w=2220&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Slow-cooked ribs smothered in tangy barbecue sauce, served with coleslaw",
    price: 19.99,
    status: true,
  },
  {
    name: "Vegetable Stir-Fry",
    image: "https://images.unsplash.com/photo-1516901121982-4ba280115a36?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Assorted vegetables stir-fried with tofu in a savory sauce, served over rice",
    price: 13.99,
    status: true,
  },
  {
    name: "New York Strip Steak",
    image: "https://images.unsplash.com/photo-1644704265419-96ddaf628e71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Juicy steak seasoned and grilled to your liking, served with mashed potatoes",
    price: 24.99,
    status: true,
  },
  {
    name: "Caesar Salad",
    image: "https://plus.unsplash.com/premium_photo-1692309186600-03bb12fd3adb?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Fresh romaine lettuce, croutons, parmesan cheese, and Caesar dressing",
    price: 9.99,
    status: true,
  },
  {
    name: "Shrimp Scampi",
    image: "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Tender shrimp sautéed with garlic, butter, lemon juice, and white wine, served over pasta",
    price: 17.99,
    status: true,
  },
  {
    name: "Vegetarian Pizza",
    image: "https://images.unsplash.com/photo-1694717065203-8cb0de9918f3?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Pizza topped with a variety of fresh vegetables and melted cheese",
    price: 14.99,
    status: true,
  },
  {
    name: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Warm chocolate cake with a gooey chocolate center, topped with vanilla ice cream",
    price: 8.99,
    status: true,
  },
  {
    name: "Fish and Chips",
    image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Crispy battered fish served with fries and tartar sauce",
    price: 15.99,
    status: true,
  },
  {
    name: "Lemon Garlic Chicken",
    image: "https://images.unsplash.com/photo-1471623817296-aa07ae5c9f47?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVtb24lMjBHYXJsaWMlMjBDaGlja2VufGVufDB8fDB8fHww",
    description: "Grilled chicken breast marinated in lemon, garlic, and herbs, served with roasted potatoes",
    price: 16.99,
    status: true,
  },
  {
    name: "Caprese Salad",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FwcmVzZSUyMFNhbGFkfGVufDB8fDB8fHww",
    description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze",
    price: 10.99,
    status: true,
  },
  {
    name: "Beef Tacos",
    image: "https://images.unsplash.com/photo-1640983743761-4f0e0204bc58?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa",
    price: 11.99,
    status: true,
  },
  {
    name: "Chicken Caesar Wrap",
    image: "https://images.unsplash.com/photo-1666819476544-38ea4e57a3d0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hpY2tlbiUyMENhZXNhciUyMFdyYXB8ZW58MHx8MHx8fDA%3D",
    description: "Grilled chicken, romaine lettuce, parmesan cheese, and Caesar dressing wrapped in a flour tortilla",
    price: 9.99,
    status: true,
  },
  {
    name: "Vegetable Tempura",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Assorted vegetables battered and deep-fried, served with dipping sauce",
    price: 12.99,
    status: true,
  },
  {
    name: "Cheeseburger",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Juicy beef patty with melted cheese, lettuce, tomato, and pickles on a toasted bun",
    price: 13.99,
    status: true,
  },
  {
    name: "Chicken Quesadilla",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    description: "Grilled chicken, melted cheese, onions, and peppers folded in a flour tortilla, served with salsa and sour cream",
    price: 10.99,
    status: true,
  },
  {
    name: "Eggplant Parmesan",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    description: "Breaded and fried eggplant slices topped with marinara sauce and melted mozzarella cheese, served with spaghetti",
    price: 14.99,
    status: true,
  },
  {
    name: "Tiramisu",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGlyYW1pc3V8ZW58MHx8MHx8fDA%3D",
    description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese",
    price: 7.99,
    status: true,
  },
  {
    name: "Beef Stir-Fry",
    image: "https://images.unsplash.com/photo-1693609929945-b01ae4f2d602?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmV0dHVjY2luZSUyMEFsZnJlZG98ZW58MHx8MHx8fDA%3D",
    description: "Tender strips of beef stir-fried with vegetables in a savory sauce, served over rice",
    price: 17.99,
    status: true,
  },
  {
    name: "Chicken Parmesan",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmV0dHVjY2luZSUyMEFsZnJlZG98ZW58MHx8MHx8fDA%3D",
    description: "Breaded chicken cutlet topped with marinara sauce and melted mozzarella cheese, served with spaghetti",
    price: 16.99,
    status: true,
  },
  {
    name: "Fettuccine Alfredo",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmV0dHVjY2luZSUyMEFsZnJlZG98ZW58MHx8MHx8fDA%3D",
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
