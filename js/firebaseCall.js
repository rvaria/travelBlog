//import firebase from "firebase/app";
//import "firebase/functions";

export function addComment(blogID, nameInput, commentInput) {
    alert(nameInput.value);

    var addData = firebase.functions().httpsCallable('addData');
    addData({
        id: blogID,
        name: nameInput,
        comment: commentInput,
    })
        .then((result) => {
            // Return result from cloud function
        });
}