import "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, child } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { initFirebase } from "./firebaseInit.js";

export function addComment(blogID, nameInput, commentInput) {

    initFirebase();
    try {
        const db = getDatabase();
        const dbPath = ref(db, `/${blogID}/`);

        push(dbPath, {
            username: nameInput,
            comment: commentInput,
        }).then((data) => {
            console.log("Data written successfully", data);
        }).catch((error) => {
            console.log("Error: " + error);
        });
    } catch (error) {
        console.log("Error: " + error);
    }
} 