import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const ConnectDB = async () => {
  const url = `mongodb:localhost:27017/restaurantDB`; 

  try {
    const connection = await mongoose.connect(url, {
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (e) {
    console.log(`Failed to connect to database: ${e}`);
  }
};