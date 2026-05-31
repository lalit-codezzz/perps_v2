import "dotenv/config";

import express from "express";
import apiRouter from "./routes/index.route";

const app = express();
app.use(express.json());

app.use("/api/v1", apiRouter);

export default app;
