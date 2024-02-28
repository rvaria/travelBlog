const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin")

admin.initializeApp()

exports.addData = onCall((data) => {
    const id = data.id;
    const name = data.name;
    const comment = data.comment;
    //Sanitise comment then add to database
});
