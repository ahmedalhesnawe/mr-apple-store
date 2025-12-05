// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYXbmPGjMqCkOKwrz1yT4cP4i75T7Lgfg",
  authDomain: "mr-apple-store-fc5df.firebaseapp.com",
  projectId: "mr-apple-store-fc5df",
  storageBucket: "mr-apple-store-fc5df.firebasestorage.app",
  messagingSenderId: "527567478850",
  appId: "1:527567478850:web:7092e8cee5aa1684660ddb",
  measurementId: "G-ZSBRD46JGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);