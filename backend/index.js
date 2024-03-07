import bodyParser from "body-parser";
import express from "express";
import customerRoutes from "./routes/customer.route.js";
import menuRoutes from "./routes/menu.route.js";
import orderRoutes from "./routes/order.route.js";
import pickupRoutes from "./routes/pickup.route.js";
import restaurantRoutes from "./routes/restaurant.route.js";
import { ConnectDB } from "./utils/database.js";

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());

ConnectDB();

// Routes
app.use("/customers", customerRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);
app.use("/pickup", pickupRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
