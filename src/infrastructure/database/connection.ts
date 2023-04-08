import mongoose from "mongoose";

export async function connectionDatabase() {
  const MONGO_URI =
    process.env.MONGO_URI || "mongodb://localhost:27017/mongodb";
  try {
    await mongoose.connect(MONGO_URI);

    console.log("Connected to MongoDB database 🐘");
  } catch (err) {
    console.log(`Failed to connect to MongoDB: ${err}`);
  }
}
