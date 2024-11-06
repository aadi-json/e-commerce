// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABGzoWG4gxfUROFj39T2U5Yp6dg5FzJBw",
  authDomain: "e-commerce-7c5bb.firebaseapp.com",
  projectId: "e-commerce-7c5bb",
  storageBucket: "e-commerce-7c5bb.firebasestorage.app",
  messagingSenderId: "679701211837",
  appId: "1:679701211837:web:d30dcfc5e2c8267f9ee5d4",
  measurementId: "G-3MM9L5DSS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore();
const auth = getAuth();

export { fireDB, auth };
