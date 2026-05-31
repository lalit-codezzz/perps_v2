import "dotenv/config";

import type { Request, Response } from "express";
import { prisma } from "db/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//______________Signup_Endpoint____________________________
async function signupController(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Signup failed!",
    });
  }

  try {
    const user = await prisma.user.findFirst({ where: { username } });

    if (user) {
      return res.status(409).json({
        success: false,
        message: "Already a user!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const createdUser = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error! [from /signup endpoint]",
    });
  }
}

//______________Signin_Endpoint____________________________
async function signinController(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Signin failed!",
    });
  }

  try {
    const user = await prisma.user.findFirst({ where: { username } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      return res.status(404).json({
        success: false,
        message: "Invalid credentials!",
      });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!);

    return res.status(200).json({
      success: true,
      message: "Signed in successfully!",
      token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error! [from /signin endpoint]",
    });
  }
}

export { signupController, signinController };
