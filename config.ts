import * as admin from "firebase-admin";
import serviceAccount from "./public/serviceAccountKey.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: "https://anony-4266e-default-rtdb.firebaseio.com"
});

const db: admin.database.Database = admin.database();
export { db };