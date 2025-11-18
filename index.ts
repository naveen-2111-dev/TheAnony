import express from "express";
import serverless from "serverless-http";
import app from "./src/app";

import { configDotenv } from "dotenv";

configDotenv();

const expressApp = express();
expressApp.use("/", app);
export const handler = serverless(expressApp);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
    expressApp.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default handler;