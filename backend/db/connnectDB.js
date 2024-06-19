import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log("database connected successfully");
  } catch (error) {
    console.log(`mongodb connection failed`);
  }
};

export default connectDB;
