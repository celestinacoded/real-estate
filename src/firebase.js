import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBlAFJ9W7E_guy3B4m4L-A-gxIy73ZW2KU",
    authDomain: "real-estate-project-5e294.firebaseapp.com",
    projectId: "real-estate-project-5e294",
    storageBucket: "real-estate-project-5e294.appspot.com",
    messagingSenderId: "429443477051",
    appId: "1:429443477051:web:003c4c48ecfb82bc8c761e",
    measurementId: "G-Z5WVSYQ8C1"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const fireAuth = getAuth();


export { app, firestore, fireAuth };

