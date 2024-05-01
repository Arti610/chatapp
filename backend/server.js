import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/connnectDB.js";

const PORT = process.env.PORT || 5000;
dotenv.config();

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongodb connection error", error);
  });

  