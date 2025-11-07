import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/user.model.ts";

const JWT_SECRET = process.env.JWT_SECRET || "janbudg_secret_key"; //process.env

export const signup = async (req: any, res: any) => {
  try {
    const { name, wardNumber, fullAddress, phoneNumber, email, voterId, password } = req.body;
    console.log("res -> ", res.body)

    if (!name || !wardNumber || !fullAddress || !phoneNumber || !email || !voterId || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      wardNumber,
      fullAddress,
      phoneNumber,
      email,
      voterId,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json({ message: "Signup successful", success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ message: "Login successful", token, user, success: true });
  } catch (err) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getUser = async (req: any, res: any) => {
    try {
      if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const user = await User.findById(req.userId).select("-password");
      if (!user) return res.status(404).json({ message: "User not found" });
  
      res.status(200).json({
        username: req.username,
        user: user,
        success: false,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", success: false });
    }
  };