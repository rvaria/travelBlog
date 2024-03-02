import { initializeApp, getApp, getApps } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  appId: process.env.APP_ID
};

export function initFirebase() {
  if (getApps.length === 0) {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    console.log("Initialised successfully", app);
  } else {
    console.log("Already initialised");
  }
}