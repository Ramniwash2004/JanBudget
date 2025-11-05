import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.ts";
import complaintRouter from "./routes/complaint.routes.ts"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/complaints", complaintRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/janbudg")
  .then(() => console.log("✅ MongoDB connected on localhost"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req: any, res: any): void => {
    res.send("Welcome to JanBudg API 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
