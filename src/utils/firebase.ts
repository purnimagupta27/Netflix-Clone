// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx7PXOsZbc5BlAhtpqaXSwprOJbLqi7Nc",
  authDomain: "netflixgpt-aa7a0.firebaseapp.com",
  projectId: "netflixgpt-aa7a0",
  storageBucket: "netflixgpt-aa7a0.firebasestorage.app",
  messagingSenderId: "990480987383",
  appId: "1:990480987383:web:1f983d4f7011ea91eccff2",
  measurementId: "G-D8QZKMGWZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app)
export const auth = getAuth()