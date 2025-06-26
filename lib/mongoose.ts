import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

export async function connectToDB() {
  try {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}
