import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDaEm8cabs7moL30Wr9f-enBM2P5jp__AM",
    authDomain: "journalapp-react-6fde2.firebaseapp.com",
    projectId: "journalapp-react-6fde2",
    storageBucket: "journalapp-react-6fde2.appspot.com",
    messagingSenderId: "787476528238",
    appId: "1:787476528238:web:509641ffd028a616937a7f"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,googleAuthProvider,firebase
}