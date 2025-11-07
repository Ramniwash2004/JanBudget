import jwt from "jsonwebtoken"
const adminUsername = "raipur-nagar"
const adminPassword = "12345678"
const adminPassKey = "raipur"

const JWT_SECRET = "janbudg_secret_key";

export const login = async (req: any, res: any) => {
    try {
      const { username, password, adminKey } = req.body;

      if(username == adminUsername && password == adminPassword && adminKey == adminPassKey) {
        const token = jwt.sign({ username: username }, JWT_SECRET, { expiresIn: "2d" });
        res.status(200).json({ message: "Admin Login successful", token, username, success: true });
      }else {
        console.log("Invalid credentials -> ", )
        return res.status(400).json({ message: "Invalid credentials" });
      }
    } catch (err) {
      res.status(500).json({ message: "Server error", success: false });
    }
  };