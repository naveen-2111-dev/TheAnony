import { Request, Response } from "express";
import { db } from "../../config";
import { getLocalIP } from "../utils/getIp";
import { Room } from "../../types";

export async function GetMyRoom(req: Request, res: Response) {
    try {
        const ip = getLocalIP();

        const roomsRef = db.ref("rooms");
        const snapshot = await roomsRef
            .orderByChild("owner")
            .equalTo(ip)
            .once('value');

        if (!snapshot.exists()) {
            return res.status(200).json({ success: true, rooms: [] });
        }

        const rooms: Room[] = [];
        const data = snapshot.val() as Record<string, Room> | null;
        if (data) {
            for (const [key, value] of Object.entries(data)) {
                rooms.push({
                    ...value,
                    roomId: key
                });
            }
        }

        return res.status(200).json({ success: true, rooms });
    } catch (error) {
        console.error("Failed to get room:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to get room",
            error: error instanceof Error ? error.message : String(error)
        });
    }
}