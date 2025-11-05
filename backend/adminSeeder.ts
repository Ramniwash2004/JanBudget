import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import  User  from "./model/user.model.ts";

// MongoDB connection (only if not already connected elsewhere)
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/JanBudget";

export async function createAdminAccount() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: "admin@janbudg.in" });

    if (existingAdmin) {
      console.log("Admin account already exists");
      return;
    }

    const hashedPassword = await bcrypt.hash("12345", 10);

    const admin = await User.create({
      name: "Administrator",
      email: "admin@janbudg.in",
      password: hashedPassword,
      userType: "admin",
      phoneNumber: "+91-771-2535700",
      fullAddress: "Nagar Nigam Bhawan, Vidhan Sabha Road, Raipur",
    });

    console.log("Admin account created successfully");
    console.log("-----------------------------");
    console.log("Username:", admin.email);
    console.log("Password: 12345");
    console.log("-----------------------------");
  } catch (error) {
    console.error("Error: creating admin account:", error);
  } finally {
    await mongoose.disconnect();
  }
}
createAdminAccount();
