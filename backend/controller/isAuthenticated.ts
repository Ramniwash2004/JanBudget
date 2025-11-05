import jwt from "jsonwebtoken";
import type  { JwtPayload } from "jsonwebtoken"

const JWT_SECRET = "janbudg_secret_key"; // ideally from process.env

export interface AuthenticatedRequest extends Request {
  userId?: string;
  username?: string;
}

// Define your own token payload type
interface TokenPayload extends JwtPayload {
  id: string;
  name: string;
}

export const isAuth = (req: any, res: any, next: any) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload; // ✅ safely cast

    if (!decoded.id || !decoded.name) {
      return res.status(401).json({ message: "Invalid token structure" });
    }

    req.userId = decoded.id;

    next();
  } catch (error) {
    console.error("JWT verification error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
