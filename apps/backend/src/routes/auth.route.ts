import { Router } from "express";

import {
  signinController,
  signupController,
} from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/signup", signupController);
authRouter.post("/signup", signinController);

export default authRouter;
