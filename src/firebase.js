// import firebase from "firebase";
// import firebase from "firebase";
// import firebase from "firebase/app";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// import firebase from "../src/";
const firebaseConfig = {
    apiKey: "AIzaSyCc6AaNc8XqBgjBld_siBc1LKnk3-IBusY",
    authDomain: "fb-clone-e6a57.firebaseapp.com",
    projectId: "fb-clone-e6a57",
    storageBucket: "fb-clone-e6a57.appspot.com",
    messagingSenderId: "458697354903",
    appId: "1:458697354903:web:95ca26de425ae13b9ac3d2",
    measurementId: "G-FZ1XEWV5MB"
};
  

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const providers = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const provider = providers;
export default db;

// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;
