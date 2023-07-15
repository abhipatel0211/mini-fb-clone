// import firebase from "firebase";
// import firebase from "firebase";
// import firebase from "firebase/app";
// import "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import firebase from "../src/";
const firebaseConfig = {
  apiKey: "AIzaSyDis29G3dRX_uDcSyIS7zg9aa_IM72nT-w",
  authDomain: "facebook-clone-2b793.firebaseapp.com",
  projectId: "facebook-clone-2b793",
  storageBucket: "facebook-clone-2b793.appspot.com",
  messagingSenderId: "686177950305",
  appId: "1:686177950305:web:a1d103267ce9b506d0e820",
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
