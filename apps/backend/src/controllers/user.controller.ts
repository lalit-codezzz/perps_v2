import type { Request, Response } from "express";
import type { AuthRequest } from "../middlewares/auth.middleware";
import { pub } from "../configs/redis";

async function onRampUserFundsController(req: Request, res: Response) {
  const authRequest = req as AuthRequest;
  const { balance } = authRequest.body;
  const userId = authRequest.userId;

  console.log(balance);

  return res.status(200).json({
    success: true,
    message: "Funds initialized!",
  });
}

export { onRampUserFundsController };
