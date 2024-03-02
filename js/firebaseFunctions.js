import "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
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

export function retrieveComments(blogID) {
    initFirebase();

    const db = getDatabase();
    const dbPath = ref(db, `/${blogID}/`);

    const commentDiv = document.getElementById("commentList");

    try {
        onValue(dbPath, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                commentDiv.innerHTML = ``;
                snapshot.forEach((childSnapshot) => {
                    const username = childSnapshot.val().username;
                    const comment = childSnapshot.val().comment;
                    
                    console.log(username);
                    console.log(comment);
                    commentDiv.innerHTML += 
                    `<style>
                    
                    #container {
                        margin:auto;
                        width:60%;
                        text-align:left;
                        background-color: #f2f2f2;
                        border: 5px solid white;
                        padding:15px;
                    }

                    #username {
                        font-weight: bold;
                        text-size: 50px;
                    }

                    </style>
                    <div id="container">
                    <p id="username">${username}</p>
                    <p id="comment">${comment}</p>
                    </div>`;
                    
                });
            } else {
                console.log("No data yet!");
            }
        });

    } catch (error) {
        console.log("Error: " + error);
    }
}