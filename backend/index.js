import express from "express";
import bodyParser from "body-parser";
import customerRoutes from "./routes/customer.route.js";
import { ConnectDB } from "./utils/database.js";

const app = express();
const port = 8000;

// Middleware
app.use(bodyParser.json());


ConnectDB();

// Routes
app.use("/restaurantDB/customers", customerRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
