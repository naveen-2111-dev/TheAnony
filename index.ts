import express from "express";
import serverless from "serverless-http";
import app from "./src/app";

const expressApp = express();
expressApp.use("/", app);

export const handler = serverless(expressApp);
export default handler;