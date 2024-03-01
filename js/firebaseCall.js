import "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/10.8.1/firebase-functions.js";

export function addComment(blogID, nameInput, commentInput) {

    var addData = firebase.functions().httpsCallable('addData');
    addData({
        id: blogID,
        name: nameInput,
        comment: commentInput,
    })
        .then((result) => {
            // Return result from cloud function
            var message = result.data.text;
            console.log(message);
        }); 
} 