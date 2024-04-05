import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import customerRoutes from "./routes/customer.route.js";
import managerRoutes from "./routes/manager.route.js";
import menuRoutes from "./routes/menu.route.js";
import orderRoutes from "./routes/order.route.js";
import restaurantRoutes from "./routes/restaurant.route.js";
import { ConnectDB } from "./utils/database.js";

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

ConnectDB();

// Routes
app.use("/customers", customerRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/menus", menuRoutes);
app.use("/orders", orderRoutes);
app.use("/managers", managerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
