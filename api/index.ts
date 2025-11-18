import express from "express";
import serverless from "serverless-http";

import { configDotenv } from "dotenv";
import app from "../src/app";

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