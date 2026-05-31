import "dotenv/config";

import app from "./src/app";
import http from "http";

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT!, () =>
  console.log("Server running on PORT: ", process.env.PORT!),
);
