const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.createNewUser = functions.auth.user((request, response) => {
 response.send("Hello from Firebase!");


});
exports.createNewUser = functions.auth.user().onCreate((user) => {

}))