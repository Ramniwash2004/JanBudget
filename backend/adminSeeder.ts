import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "./model/admin.model.ts";

// MongoDB connection URI
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/janbudgt";

export async function createAdminAccount() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Check if admin already exists (by name)
    const existingAdmin = await User.findOne({ name: "admin" });

    if (existingAdmin) {
      console.log("Admin account already exists");
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("123456", 10);

    // Create admin (matching your schema)
    const admin = await User.create({
      name: "admin",
      password: hashedPassword,
      adminKey: "123456",
    });

    console.log("Admin account created successfully");
    console.log("-----------------------------");
    console.log("Admin Name:", admin.name);
    console.log("Admin Key:", admin.adminKey);
    console.log("Password: 123456");
    console.log("-----------------------------");
  } catch (error) {
    console.error("Error creating admin account:", error);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
}

createAdminAccount();
