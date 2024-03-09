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

                    commentDiv.innerHTML += 
                    `<style>
                    
                    #container {
                        margin:auto;
                        width:52%;
                        text-align:left;
                        background-color: #edfff8;
                        border: 5px solid white;
                        padding-left:2%;    
                        font-family: "Arial";               
                    }

                    #username {
                        font-weight: bold;
                        font-size: 20px;
                        margin-bottom: 0px;
                    }

                    #comment {
                        margin-top: 0px;
                        font-size: 15px;
                    }

                    @media (max-width: 480px) {
                        #container {
                            width: 80%;
                        }
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