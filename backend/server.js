import dotenv from "dotenv";
import connectDB from "./db/connnectDB.js";
import { server } from "./socket/Socket.js";

const PORT = process.env.PORT || 5000;
dotenv.config();

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running at port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongodb connection error", error);
  });

  