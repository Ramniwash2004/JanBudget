import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../model/user.model.ts"; 
import { verifyToken, adminOnly, checkOwnership } from "../middlewares/auth.middleware.ts";
import type { Request, Response } from "express";

dotenv.config();

const router = express.Router();

//  Login Route
router.post("/login", async (req: Request, res: Response) => {
  const { email, password, userType } = req.body;

  try {
    const user = await User.findOne({ email, userType });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, userType: user.userType },
      process.env.JWT_SECRET || "janbudg_secret_key",
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        wardNumber: user.wardNumber,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// Signup Route (Citizens only)
router.post("/signup", async (req: Request, res: Response) => {
  const { name, email, password, wardNumber, fullAddress, phoneNumber, voterId } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      userType: "citizen",
      wardNumber,
      fullAddress,
      phoneNumber,
      voterId,
    });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        wardNumber: newUser.wardNumber,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// 👤 Get User Profile (Own or Admin)
router.get("/profile/:userId", verifyToken, checkOwnership, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.userId).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error("Profile fetch error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Update User Profile (Own or Admin)
router.put("/profile/:userId", verifyToken, checkOwnership, async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Profile update error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Delete User (Admin only)
router.delete("/user/:userId", verifyToken, adminOnly, async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.userId);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Get All Users (Admin only)
router.get("/users", verifyToken, adminOnly, async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.json({ success: true, users });
  } catch (error) {
    console.error("Fetch all users error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
