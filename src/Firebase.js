import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBeVXZGBA5AeYS_g-kwHPncseY70XQFUzY",
  authDomain: "stateful-content.firebaseapp.com",
  databaseURL: "https://stateful-content.firebaseio.com",
  projectId: "stateful-content",
  storageBucket: "stateful-content.appspot.com",
  messagingSenderId: "24728769018",
  appId: "1:24728769018:web:a3f756c4f6fae45f585443",
  measurementId: "G-RCFFPBM0VY"
};

 firebase.initializeApp(config);



 export default firebase;

 export const database = firebase.database();
 export const auth = firebase.auth();
 export const storage = firebase.storage();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

