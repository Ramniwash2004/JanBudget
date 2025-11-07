import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.ts";
import complaintRouter from "./routes/complaint.routes.ts";

dotenv.config();
const app = express();

// ✅ Proper CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",   // Vite default
  "http://localhost:3000",   // Next.js / React default
  "https://your-frontend-domain.com" // your production domain
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // if using cookies or tokens
  })
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/complaints", complaintRouter);

// Database connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/janbudg")
  .then(() => console.log("✅ MongoDB connected on localhost"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Base route
app.get("/", (req, res) => {
  res.send("Welcome to JanBudg API");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
