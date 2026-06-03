import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { onRampUserFundsController } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/onramp", authMiddleware, onRampUserFundsController);

export default userRouter;