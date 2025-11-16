import * as admin from "firebase-admin";
import serviceAccount from "./public/serviceAccountKey.json";
import { configDotenv } from "dotenv";
configDotenv();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL!,
});

const db: admin.database.Database = admin.database();
export { db };