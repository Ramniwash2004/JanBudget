import jwt from "jsonwebtoken";
import type  { JwtPayload } from "jsonwebtoken"

const JWT_SECRET = "janbudg_secret_key";

export interface AuthenticatedRequest extends Request {
  userId?: string;
  username?: string;
}

// Define your own token payload type
interface TokenPayload extends JwtPayload {
  id: string;
  name: string;
}

const adminUsername = "raipur-nagar-nigam"

export const isAuth = (req: any, res: any, next: any) => {
  try {
    const { username, password, adminKey } = req.body


    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
