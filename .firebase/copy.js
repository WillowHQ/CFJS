const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.helloWorld = functions.https.onRequest(async (req, res) => {
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('/messages').push({original: original});
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());

});