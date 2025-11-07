import jwt from 'jsonwebtoken';
import type{ Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
  user?: {
    id: string;
    userType: 'citizen' | 'admin';
  };
}

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!|| "janbudg_secret_key") as any;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// Admin Only Middleware
export const adminOnly = (req: AuthRequest, res: Response, next: NextFunction) => {
  if (req.user?.userType !== 'admin') {
    return res.status(403).json({ 
      success: false, 
      message: 'Access denied. Admin privileges required.' 
    });
  }
  next();
};

// Check if user owns the resource
export const checkOwnership = (req: AuthRequest, res: Response, next: NextFunction) => {
  const resourceUserId = req.params.userId || req.body.userId;
  
  // Allow if admin or if user is accessing their own data
  if (req.user?.userType === 'admin' || req.user?.id === resourceUserId) {
    next();
  } else {
    return res.status(403).json({ 
      success: false, 
      message: 'Access denied. You can only modify your own data.' 
    });
  }
};

