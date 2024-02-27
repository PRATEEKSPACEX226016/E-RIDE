import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
  apiKey: "AIzaSyDr4iItcCwJQxdoBCHQ9aBhl8cKowOECDU",
  authDomain: "e-ride-2b51d.firebaseapp.com",
  projectId: "e-ride-2b51d",
  storageBucket: "e-ride-2b51d.appspot.com",
  messagingSenderId: "910046080226",
  appId: "1:910046080226:web:88b488987faaf06eea82bb"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


