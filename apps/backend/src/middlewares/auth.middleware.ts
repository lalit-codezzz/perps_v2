import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  userId: string;
}

export interface AuthRequest extends Request {
  userId: string;
}

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authRequest = req as AuthRequest;
  const token = authRequest.headers.authorization?.split("")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized!",
    });
  }

  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const { userId } = decoded as TokenPayload;

    authRequest.userId = userId;
    next();
  } catch (error) {
    const err = error as Error;
    console.log(err.name);
    return res.status(401).json({
      success: false,
      message: "Token expried - Unauthorized!",
    });
  }
}

export default authMiddleware;
