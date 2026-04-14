// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq0_xB5kuky30Rlhi7XHO7-WCWHnB0D3w",
  authDomain: "awamovies-1ac5b.firebaseapp.com",
  projectId: "awamovies-1ac5b",
  storageBucket: "awamovies-1ac5b.firebasestorage.app",
  messagingSenderId: "503151635643",
  appId: "1:503151635643:web:5bd61ff04714880f3b8d9e",
  measurementId: "G-20R09CLHB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
