import express, { Application, Router, Request, Response } from "express";
import path from "node:path";

import { CreateRoom } from "./Routes/create_room";
import { GetRoom } from "./Routes/get_room";
import { GetMyRoom } from "./Routes/get_my_rooms";
import { AddParticipants } from "./Routes/add_participants";
import { RemoveParticipants } from "./Routes/remove_participants";
import { GetIp } from "./Routes/get_ip";
import { Chat } from "./Routes/chat";

const app: Application = express();
const router: Router = express.Router();

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "..", "public")));

// home
app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// API routes
app.use("/api", router);

router.get("/get-room/:roomId", GetRoom);
router.get("/get-my-room", GetMyRoom);
router.get("/get-my-ip", GetIp);

router.post("/create-room", CreateRoom);
router.post("/chat/:roomId/:ip", Chat);
router.post("/add-participants/:roomId/:participant", AddParticipants);
router.post("/remove-participants/:roomId/:participant", RemoveParticipants);

export default app;
