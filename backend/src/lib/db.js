import mongoose from "mongoose";

//db connection
export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb is connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("Error in connection to MongoDB", error);
    process.exit(1);
  }
};
