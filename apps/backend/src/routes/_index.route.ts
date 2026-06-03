import { Router } from "express";
import authRouter from "./auth.route";
import adminRouter from "./admin.routes";
import userRouter from "./user.routes";

const apiRouter = Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/admin", adminRouter);
apiRouter.use("/user", userRouter);

export default apiRouter;