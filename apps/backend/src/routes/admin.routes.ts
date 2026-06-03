import "dotenv/config";

import { Router } from "express";
import { createMarketController } from "../controllers/admin.controller";

const adminRouter = Router();

adminRouter.post(
  "/market",
  (req, res, next) => {
    const adminToken = req.headers.authorization;

    console.log("ADMINTOKEN" + adminToken);

    if (!adminToken || adminToken !== process.env.ADMIN_TOKEN) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized!",
      });
    }

    next();
  },
  createMarketController,
);

export default adminRouter;
